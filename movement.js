
import * as THREE from 'three';

export function createMovementModel(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const material = color => new THREE.MeshStandardMaterial({
    color, roughness: 0.7
  });
  const body = material('#b9c9dc');
  const joint = material('#829cb9');
  const face = material('#dcb59d');
  const dark = material('#344b65');
  const active = material('#39e2ad');
  const arrowMaterial = new THREE.MeshBasicMaterial({
    color: '#ffcc52',
    depthTest: false
  });

  const geometryList = [];
  const meshes = [];

  function mesh(parent, geometry, mat, x=0, y=0, z=0) {
    const m = new THREE.Mesh(geometry, mat);
    m.position.set(x,y,z);
    parent.add(m);
    geometryList.push(geometry);
    meshes.push(m);
    return m;
  }

  function ball(parent,x,y,z,r,mat=joint) {
    return mesh(parent,
      new THREE.SphereGeometry(r,16,12),mat,x,y,z);
  }

  function box(parent,x,y,z,w,h,d,mat=body) {
    return mesh(parent,
      new THREE.BoxGeometry(w,h,d),mat,x,y,z);
  }

  function segment(parent,length,radius,mat=body) {
    return mesh(parent,
      new THREE.CylinderGeometry(
        radius*.9,radius,length,16
      ),mat,0,-length/2,0);
  }

  function pivot(parent,x,y,z) {
    const p = new THREE.Group();
    p.position.set(x,y,z);
    parent.add(p);
    return p;
  }

  const torso = new THREE.Group();
  group.add(torso);
  box(torso,0,2.3,0,.9,1.06,.38);
  box(torso,0,1.67,0,.71,.25,.4);
  box(torso,0,2.96,0,.18,.25,.18);

  const head = pivot(torso,0,3.13,0);
  const skull = ball(head,0,.23,0,.26,face);
  skull.scale.set(.86,1.15,.9);
  ball(head,-.09,.27,.23,.025,dark);
  ball(head,.09,.27,.23,.025,dark);
  box(head,0,.08,.24,.12,.015,.02,dark);
  const nose = mesh(head,
    new THREE.ConeGeometry(.045,.12,12),
    face,0,.17,.27);
  nose.rotation.x=Math.PI/2;
  ball(head,-.23,.2,0,.065,face);
  ball(head,.23,.2,0,.065,face);

  const arms = {};
  const legs = {};

  for(const side of [-1,1]) {
    const key=side===-1?'right':'left';

    const shoulder=pivot(torso,side*.56,2.77,0);
    ball(shoulder,0,0,0,.14);
    const upper=segment(shoulder,.68,.115);

    const elbow=pivot(shoulder,0,-.72,0);
    ball(elbow,0,0,0,.105);
    const forearm=segment(elbow,.6,.09);

    const hand=pivot(elbow,0,-.65,0);
    const palm=box(hand,0,-.13,.01,.18,.27,.09);
    const fingers=[];
    for(let i=0;i<4;i++) {
      fingers.push(box(hand,
        (i-1.5)*.043,-.32,.015,.033,.12,.045));
    }

    arms[key]={
      shoulder,elbow,upper,forearm,palm,fingers
    };

    const hip=pivot(group,side*.23,1.55,0);
    ball(hip,0,0,0,.15);
    const thigh=segment(hip,.72,.16);

    const knee=pivot(hip,0,-.79,0);
    ball(knee,0,0,0,.13);
    const shin=segment(knee,.66,.115);

    const ankle=pivot(knee,0,-.72,0);
    const foot=box(ankle,0,-.045,.16,.24,.14,.45);

    legs[key]={hip,knee,ankle,thigh,shin,foot};
  }

  // Траектория и наконечник стрелки в локальных
  // координатах соответствующего сустава.
  const arrowGroup=new THREE.Group();
  group.add(arrowGroup);
  arrowGroup.renderOrder=20;

  function makeArrow(points) {
    const curve=new THREE.CatmullRomCurve3(points);
    const tube=mesh(arrowGroup,
      new THREE.TubeGeometry(curve,36,.018,8,false),
      arrowMaterial);

    const end=points[points.length-1];
    const tangent=curve.getTangent(1).normalize();
    const tip=mesh(arrowGroup,
      new THREE.ConeGeometry(.065,.17,12),
      arrowMaterial,end.x,end.y,end.z);
    tip.quaternion.setFromUnitVectors(
      new THREE.Vector3(0,1,0),tangent
    );
    tube.renderOrder=20;
    tip.renderOrder=21;
  }

  // Стрелка строится в мировой системе координат
  // для выбранного движения.
  function setArrow(id) {
    arrowGroup.clear();
    // Геометрии стрелок повторно создаются при смене
    // вопроса, поэтому удаляем предыдущие.
    const old=geometryList.splice(0,0);
    // Основные геометрии тела сохраняются отдельно;
    // для стрелок используется собственный список ниже.
    const spec=movements[id];
    if(!spec)return;

    const points=[];
    const count=22;
    const radius=spec.radius;
    const center=new THREE.Vector3(...spec.center);
    const sign=spec.sign;

    for(let i=0;i<=count;i++) {
      const t=i/count;
      const a=spec.startAngle+
        (spec.endAngle-spec.startAngle)*t;
      let p;
      if(spec.plane==='xy') {
        p=new THREE.Vector3(
          center.x+radius*Math.cos(a),
          center.y+radius*Math.sin(a),
          center.z
        );
      } else {
        p=new THREE.Vector3(
          center.x,
          center.y+radius*Math.cos(a),
          center.z+radius*Math.sin(a)
        );
      }
      points.push(p);
    }
    makeArrow(points);
  }

  const movements={
    abduction:{
      ru:'Абдукция плеча',
      en:'Shoulder abduction',
      view:'front',
      center:[-.56,2.77,.28],
      plane:'xy',radius:1.12,
      startAngle:-Math.PI/2,
      endAngle:-Math.PI/2-1.15,
      sign:-1
    },
    adduction:{
      ru:'Аддукция плеча',
      en:'Shoulder adduction',
      view:'front',
      center:[-.56,2.77,.28],
      plane:'xy',radius:1.12,
      startAngle:-Math.PI/2-1.15,
      endAngle:-Math.PI/2,
      sign:1
    },
    elbowFlex:{
      ru:'Флексия локтя',
      en:'Elbow flexion',
      view:'right',
      center:[-.56,2.05,.4],
      plane:'yz',radius:.88,
      startAngle:Math.PI,
      endAngle:Math.PI*1.52,
      sign:-1
    },
    elbowExtend:{
      ru:'Экстензия локтя',
      en:'Elbow extension',
      view:'right',
      center:[-.56,2.05,.4],
      plane:'yz',radius:.88,
      startAngle:Math.PI*1.52,
      endAngle:Math.PI,
      sign:1
    },
    kneeFlex:{
      ru:'Флексия колена',
      en:'Knee flexion',
      view:'right',
      center:[-.23,.76,.36],
      plane:'yz',radius:.85,
      startAngle:Math.PI,
      endAngle:Math.PI*1.46,
      sign:1
    },
    kneeExtend:{
      ru:'Экстензия колена',
      en:'Knee extension',
      view:'right',
      center:[-.23,.76,.36],
      plane:'yz',radius:.85,
      startAngle:Math.PI*1.46,
      endAngle:Math.PI,
      sign:-1
    }
  };

  let current='abduction';
  let playing=true;
  let lastPhase=-1;

  function resetPose() {
    Object.values(arms).forEach(a=>{
      a.shoulder.rotation.set(0,0,0);
      a.elbow.rotation.set(0,0,0);
      [a.upper,a.forearm,a.palm,...a.fingers]
        .forEach(m=>m.material=body);
    });
    Object.values(legs).forEach(l=>{
      l.hip.rotation.set(0,0,0);
      l.knee.rotation.set(0,0,0);
      [l.thigh,l.shin,l.foot]
        .forEach(m=>m.material=body);
    });
  }

  function applyPose(p) {
    resetPose();
    const a=arms.right;
    const l=legs.right;

    if(current==='abduction'||current==='adduction') {
      const angle=current==='abduction'
        ?p*1.15:(1-p)*1.15;
      a.shoulder.rotation.z=-angle;
      a.upper.material=active;
      a.forearm.material=active;
      a.palm.material=active;
    }

    if(current==='elbowFlex'||current==='elbowExtend') {
      const angle=current==='elbowFlex'
        ?p*1.5:(1-p)*1.5;
      a.elbow.rotation.x=-angle;
      a.forearm.material=active;
      a.palm.material=active;
    }

    if(current==='kneeFlex'||current==='kneeExtend') {
      const angle=current==='kneeFlex'
        ?p*1.4:(1-p)*1.4;
      l.knee.rotation.x=angle;
      l.shin.material=active;
      l.foot.material=active;
    }
  }

  function setMovement(id) {
    if(!movements[id])return;
    current=id;
    lastPhase=-1;
    setArrow(id);
    applyPose(0);
  }

  function update(time) {
    if(!playing)return;

    // 3.6 секунды на цикл.
    // 0..2.2: движение вперёд
    // 2.2..2.8: удержание
    // 2.8..3.6: мгновенный сброс между циклами
    // без анимации противоположного движения.
    const t=time%3.6;
    let p;
    if(t<2.2) {
      const x=t/2.2;
      p=x*x*(3-2*x);
    } else {
      p=1;
    }
    if(t>=2.8)p=0;

    if(Math.abs(p-lastPhase)>.001) {
      applyPose(p);
      lastPhase=p;
    }
  }

  function setPlaying(v) {
    playing=Boolean(v);
    if(!playing)applyPose(0);
  }

  function dispose() {
    scene.remove(group);
    geometryList.forEach(g=>g.dispose());
    [body,joint,face,dark,active,arrowMaterial]
      .forEach(m=>m.dispose());
  }

  setMovement(current);

  return {
    group,movements,setMovement,setPlaying,
    update,dispose,
    get current(){return current;},
    get playing(){return playing;}
  };
}
