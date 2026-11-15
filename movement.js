
import * as THREE from 'three';

export function createMovementModel(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const mat = color => new THREE.MeshStandardMaterial({
    color, roughness: 0.72
  });

  const body = mat('#b6c5d8');
  const joint = mat('#839cb8');
  const face = mat('#d9b39d');
  const dark = mat('#344b65');

  function ball(parent,x,y,z,r,m=joint){
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(r,20,14),m
    );
    mesh.position.set(x,y,z);
    parent.add(mesh);
    return mesh;
  }

  function box(parent,x,y,z,w,h,d,m=body){
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w,h,d),m
    );
    mesh.position.set(x,y,z);
    parent.add(mesh);
    return mesh;
  }

  function segment(parent,x,y,z,length,radius,m=body){
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(
        radius*.88,radius,length,18
      ),m
    );
    mesh.position.set(x,y-length/2,z);
    parent.add(mesh);
    return mesh;
  }

  function pivot(parent,x,y,z){
    const g = new THREE.Group();
    g.position.set(x,y,z);
    parent.add(g);
    return g;
  }

  const torso = new THREE.Group();
  group.add(torso);
  box(torso,0,2.32,0,.91,1.1,.37);
  box(torso,0,1.66,0,.72,.28,.38);
  segment(torso,0,3.12,0,.3,.10);

  const head = pivot(torso,0,3.15,0);
  const skull = new THREE.Mesh(
    new THREE.SphereGeometry(.27,24,18),face
  );
  skull.scale.set(.85,1.15,.88);
  skull.position.y=.25;
  head.add(skull);

  // Лицо направлено по оси +Z.
  ball(head,-.095,.30,.225,.028,dark);
  ball(head,.095,.30,.225,.028,dark);
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(.055,.14,12),face
  );
  nose.rotation.x=Math.PI/2;
  nose.position.set(0,.19,.28);
  head.add(nose);
  box(head,0,.065,.245,.13,.018,.018,dark);
  ball(head,-.245,.22,0,.07,face);
  ball(head,.245,.22,0,.07,face);

  const arms = {};
  for(const side of [-1,1]){
    const key = side===-1?'right':'left';
    const shoulder=pivot(torso,side*.57,2.78,0);
    ball(shoulder,0,0,0,.15);
    segment(shoulder,0,-.05,0,.68,.115);
    const elbow=pivot(shoulder,0,-.73,0);
    ball(elbow,0,0,0,.105);
    segment(elbow,0,-.05,0,.61,.09);
    const hand=pivot(elbow,0,-.66,0);
    box(hand,0,-.15,.015,.19,.31,.085);
    for(let i=0;i<4;i++){
      box(hand,(i-1.5)*.044,-.34,.02,.035,.13,.04);
    }
    box(hand,side*.13,-.09,.05,.07,.19,.07);
    arms[key]={shoulder,elbow,hand};
  }

  const legs = {};
  for(const side of [-1,1]){
    const key=side===-1?'right':'left';
    const hip=pivot(group,side*.23,1.55,0);
    ball(hip,0,0,0,.15);
    segment(hip,0,-.07,0,.72,.17);
    const knee=pivot(hip,0,-.79,0);
    ball(knee,0,0,0,.13);
    segment(knee,0,-.05,0,.67,.115);
    const foot=pivot(knee,0,-.73,0);
    box(foot,0,-.04,.17,.24,.14,.46);
    for(let i=0;i<4;i++){
      box(foot,(i-1.5)*.052,-.04,.43,.047,.065,.13);
    }
    legs[key]={hip,knee,foot};
  }

  box(torso,0,2.32,.193,.015,.78,.012,dark);

  const movements = {
    elbow:{
      ru:'Сгибание локтя',
      en:'Elbow flexion',
      view:'right',
      description:'Сгибание предплечья в локтевом суставе.'
    },
    shoulder:{
      ru:'Отведение плеча',
      en:'Shoulder abduction',
      view:'front',
      description:'Отведение плеча от средней линии тела.'
    },
    knee:{
      ru:'Сгибание колена',
      en:'Knee flexion',
      view:'right',
      description:'Сгибание голени в коленном суставе.'
    }
  };

  let current='elbow';
  let playing=true;

  function resetPose(){
    Object.values(arms).forEach(a=>{
      a.shoulder.rotation.set(0,0,0);
      a.elbow.rotation.set(0,0,0);
    });
    Object.values(legs).forEach(l=>{
      l.hip.rotation.set(0,0,0);
      l.knee.rotation.set(0,0,0);
    });
  }

  function setMovement(name){
    if(!movements[name])return;
    current=name;
    resetPose();
  }

  function update(time){
    if(!playing)return;
    const phase=(1-Math.cos(time*1.5))/2;
    resetPose();

    if(current==='elbow'){
      arms.right.elbow.rotation.x=-phase*1.65;
    }
    if(current==='shoulder'){
      // Для правой руки, расположенной по -X,
      // отрицательный угол отводит её наружу.
      arms.right.shoulder.rotation.z=-phase*1.25;
    }
    if(current==='knee'){
      legs.right.knee.rotation.x=phase*1.45;
    }
  }

  function setPlaying(value){
    playing=Boolean(value);
    if(!playing)resetPose();
  }

  function dispose(){
    group.traverse(o=>{
      if(o.isMesh)o.geometry.dispose();
    });
    [body,joint,face,dark].forEach(m=>m.dispose());
    scene.remove(group);
  }

  return {
    group,
    movements,
    setMovement,
    setPlaying,
    update,
    dispose,
    get current(){return current;},
    get playing(){return playing;}
  };
}
