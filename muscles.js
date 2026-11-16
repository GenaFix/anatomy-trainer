import * as THREE from 'three';

// Schematic surface landmarks, not an anatomical dissection model.
export function createMuscleLayer(scene){
 const group=new THREE.Group();scene.add(group);group.visible=false;
 const neutral=new THREE.MeshStandardMaterial({color:0x9b5c67,roughness:.78,transparent:true,opacity:.76,depthTest:true});
 const selected=new THREE.MeshStandardMaterial({color:0xffc267,roughness:.55,emissive:0x59300a,depthTest:true});
 const specs={
  trapezius:{ru:'Трапециевидная мышца',la:'Musculus trapezius',en:'Trapezius',view:'back',action:['Поднимает, приводит и вращает лопатку; участвует в движениях шеи.','Elevates, retracts and rotates the scapula; assists neck movement.'],shapes:[[0,2.88,-.26,.46,.36,.10,0]]},
  deltoid:{ru:'Дельтовидная мышца',la:'Musculus deltoideus',en:'Deltoid',view:'front',action:['Отводит плечо; передние и задние пучки участвуют в сгибании и разгибании.','Abducts the arm; anterior and posterior fibers assist flexion and extension.'],shapes:[[-.62,2.67,.08,.18,.32,.19,-.1],[.62,2.67,.08,.18,.32,.19,.1]]},
  pectoralis:{ru:'Большая грудная мышца',la:'Musculus pectoralis major',en:'Pectoralis major',view:'front',action:['Приводит и вращает плечо внутрь; участвует в сгибании плеча.','Adducts and internally rotates the arm; assists shoulder flexion.'],shapes:[[-.28,2.55,.25,.32,.25,.09,-.2],[.28,2.55,.25,.32,.25,.09,.2]]},
  rectus:{ru:'Прямая мышца живота',la:'Musculus rectus abdominis',en:'Rectus abdominis',view:'front',action:['Сгибает туловище, способствует стабилизации таза.','Flexes the trunk and helps stabilize the pelvis.'],shapes:[[-.12,1.98,.235,.115,.42,.075,0],[.12,1.98,.235,.115,.42,.075,0]]},
  latissimus:{ru:'Широчайшая мышца спины',la:'Musculus latissimus dorsi',en:'Latissimus dorsi',view:'back',action:['Разгибает, приводит и вращает плечо внутрь.','Extends, adducts and internally rotates the arm.'],shapes:[[-.29,2.22,-.27,.27,.38,.085,-.18],[.29,2.22,-.27,.27,.38,.085,.18]]},
  quadriceps:{ru:'Четырёхглавая мышца бедра',la:'Musculus quadriceps femoris',en:'Quadriceps femoris',view:'front',action:['Разгибает колено; прямая мышца бедра также сгибает бедро.','Extends the knee; rectus femoris also flexes the hip.'],shapes:[[-.29,1.22,.17,.19,.37,.14,0],[.29,1.22,.17,.19,.37,.14,0]]}
 };
 const meshes={};
 for(const [id,s] of Object.entries(specs)){
  meshes[id]=[];
  for(const [x,y,z,w,h,d,rz] of s.shapes){
   const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,20,16),neutral);
   mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.rotation.z=rz;
   group.add(mesh);meshes[id].push(mesh);
  }
 }
 function select(id){
  for(const [key,items] of Object.entries(meshes))for(const item of items)item.material=key===id?selected:neutral;
 }
 select('trapezius');
 return {group,specs,select};
}
