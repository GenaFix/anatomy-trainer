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
 const hidden=new Set();
 function restore(){
   for(const [mesh,material] of materialCache){mesh.material=material;}
   materialCache.clear();
 }
 function highlight(targets){
   restore();
   const selected=new Set(targets);
   for(const mesh of meshes){
     if(!selected.has(mesh))continue;
     materialCache.set(mesh,mesh.material);
     const base=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;
     const copy=base?.clone?.()||new THREE.MeshStandardMaterial();
     if(copy.color)copy.color.set('#ffbf58');
     if(copy.emissive)copy.emissive.set('#673700');
     mesh.material=copy;
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
   selectByName(query){
     const q=query.toLowerCase().trim();
     if(!q)return [];
     const matches=meshes.filter(m=>m.name.toLowerCase().includes(q));
     highlight(matches);return matches;
   },
   dispose(){canvas.removeEventListener('click',click);restore();}
 };
}
