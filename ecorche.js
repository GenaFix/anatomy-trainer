import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

const SOURCE='https://cdn.jsdelivr.net/gh/Charleeh/ecorche@main/model/ecorche.meshopt.glb';
export function createEcorche(scene,camera,canvas){
 const root=new THREE.Group();scene.add(root);root.visible=false;
 const ray=new THREE.Raycaster();const pointer=new THREE.Vector2();
 const meshes=[];let picked=null;let onPick=()=>{};
 let phase='loading';
 const materialCache=new Map();
 const renderOrderCache=new Map();
 const hidden=new Set();
 function restore(){
   for(const [mesh,material] of materialCache){mesh.material=material;mesh.renderOrder=renderOrderCache.get(mesh)??0;}
   renderOrderCache.clear();
   materialCache.clear();
 }
 function highlight(targets){
   restore();
   const selected=new Set(targets);
   for(const mesh of meshes){
     if(!selected.has(mesh))continue;
     materialCache.set(mesh,mesh.material);
     renderOrderCache.set(mesh,mesh.renderOrder);
     // Draw a clearly visible diagnostic overlay even when the anatomical
     // mesh lies beneath another surface layer in the source GLB.
     const makeHighlight=base=>{
       const copy=base?.clone?.()||new THREE.MeshStandardMaterial();
       if(copy.color)copy.color.set('#ffe34d');
       if(copy.emissive)copy.emissive.set('#ff9c00');
       if('emissiveIntensity' in copy)copy.emissiveIntensity=1.4;
       copy.depthTest=false;
       copy.depthWrite=false;
       copy.transparent=false;
       copy.opacity=1;
       copy.needsUpdate=true;
       return copy;
     };
     mesh.material=Array.isArray(mesh.material)?mesh.material.map(makeHighlight):makeHighlight(mesh.material);
     mesh.renderOrder=999;
   }
 }
 function click(e){
   if(!root.visible||!meshes.length)return;
   const r=canvas.getBoundingClientRect();
   pointer.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height*2-1));
   ray.setFromCamera(pointer,camera);
   const hit=ray.intersectObjects(meshes.filter(m=>m.visible),false)[0];
   if(hit){picked=hit.object;highlight([picked]);onPick(picked);}
 }
 canvas.addEventListener('click',click);
 const loader=new GLTFLoader();
 loader.setMeshoptDecoder(MeshoptDecoder);
 const ready=new Promise((resolve,reject)=>{
   loader.load(SOURCE,gltf=>{
     phase='ready';
     const model=gltf.scene;
     model.traverse(o=>{if(o.isMesh){meshes.push(o);o.frustumCulled=false;}});
     if(!meshes.length){reject(new Error('В файле нет доступных Mesh-объектов'));return;}
     // Fit into the existing movement scene dimensions without modifying the source.
     const bounds=new THREE.Box3().setFromObject(model);
     const size=bounds.getSize(new THREE.Vector3());
     const center=bounds.getCenter(new THREE.Vector3());
     const factor=3.65/Math.max(size.y,.0001);
     model.position.sub(center);
     const centered=new THREE.Group();centered.add(model);
     centered.scale.setScalar(factor);
     centered.position.y=1.83;
     root.add(centered);
     resolve({meshCount:meshes.length,namedCount:meshes.filter(m=>m.name&& !/^mesh[_ .-]?\\d+$/i.test(m.name)).length});
   },undefined,error=>{phase='error';reject(error);});
 });
 return {root,ready,meshes,highlight,restore,get phase(){return phase;},
   hidePicked(){if(!picked)return false;picked.visible=false;hidden.add(picked);restore();return true;},
   showAll(){for(const mesh of hidden)mesh.visible=true;hidden.clear();restore();},
   getPicked(){return picked;},
   getPickedCenter(){if(!picked)return null;const bounds=new THREE.Box3().setFromObject(picked);return bounds.getCenter(new THREE.Vector3());},
   setOnPick(fn){onPick=fn;},
   findByAnatomicalName(name){
     // Match only exact anatomical names or exact names with side suffixes.
     // Do not highlight unrelated parts through substring matching.
     const norm=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
     const key=norm(name);
     if(!key)return [];
     const aliases=new Set([key,'musculus '+key,'muscle '+key,'m '+key]);
     // Accept exact scientific labels, with common authoring prefixes.
     // Never infer anatomy from arbitrary partial names.
     if(key==='fibularis brevis')aliases.add('peroneus brevis');
     if(key==='fibularis longus')aliases.add('peroneus longus');
     if(key==='trapezius')aliases.add('trapezius muscle');
     if(key==='sternocleidomastoid')aliases.add('sternocleidomastoideus');
     if(key==='scalenus anterior')aliases.add('anterior scalene');
     if(key==='longus colli')aliases.add('longus colli muscle');
     const side=new Set(['l','r','left','right','sinister','dexter','001','002']);
     return meshes.filter(mesh=>{
       const label=norm(mesh.name);
       if(aliases.has(label))return true;
       const tokens=label.split(' ');
       if(tokens.length>1&&side.has(tokens[tokens.length-1])&&aliases.has(tokens.slice(0,-1).join(' ')))return true;
       if(tokens.length>1&&side.has(tokens[0])&&aliases.has(tokens.slice(1).join(' ')))return true;
       return false;
     });
   },
   getNameSamples(limit=12){return meshes.filter(mesh=>mesh.name).slice(0,limit).map(mesh=>mesh.name);},
   selectByName(query){
     const q=query.toLowerCase().trim();
     if(!q)return [];
     const matches=meshes.filter(m=>m.name.toLowerCase().includes(q));
     highlight(matches);return matches;
   },
   dispose(){canvas.removeEventListener('click',click);restore();}
 };
}
