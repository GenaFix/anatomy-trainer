
import * as THREE from 'three';

export function createMovementModel(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const makeMaterial = color =>
    new THREE.MeshStandardMaterial({
      color,
      roughness: 0.7
    });

  const body = makeMaterial('#b9c9dc');
  const joint = makeMaterial('#829cb9');
  const face = makeMaterial('#dcb59d');
  const dark = makeMaterial('#344b65');
  const active = makeMaterial('#39e2ad');

  const arrowMaterial = new THREE.MeshBasicMaterial({
    color: '#ffcc52',
    depthTest: false,
    depthWrite: false
  });

  const geometries = [];

  function addMesh(parent, geometry, material, position) {
    const mesh = new THREE.Mesh(geometry, material);
    if (position) mesh.position.copy(position);
    parent.add(mesh);
    geometries.push(geometry);
    return mesh;
  }

  function ball(parent, x, y, z, r, material = joint) {
    return addMesh(
      parent,
      new THREE.SphereGeometry(r, 16, 12),
      material,
      new THREE.Vector3(x, y, z)
    );
  }

  function box(parent, x, y, z, w, h, d, material = body) {
    return addMesh(
      parent,
      new THREE.BoxGeometry(w, h, d),
      material,
      new THREE.Vector3(x, y, z)
    );
  }

  function segment(parent, length, radius) {
    return addMesh(
      parent,
      new THREE.CylinderGeometry(
        radius * 0.9,
        radius,
        length,
        18
      ),
      body,
      new THREE.Vector3(0, -length / 2, 0)
    );
  }

  function pivot(parent, x, y, z) {
    const object = new THREE.Group();
    object.position.set(x, y, z);
    parent.add(object);
    return object;
  }

  // Туловище
  const torso = new THREE.Group();
  group.add(torso);

  box(torso, 0, 2.3, 0, 0.9, 1.06, 0.38);
  box(torso, 0, 1.67, 0, 0.71, 0.25, 0.4);
  box(torso, 0, 2.96, 0, 0.18, 0.25, 0.18);

  // Голова и лицо
  const head = pivot(torso, 0, 3.13, 0);

  const skull = ball(head, 0, 0.23, 0, 0.26, face);
  skull.scale.set(0.86, 1.15, 0.9);

  ball(head, -0.09, 0.27, 0.23, 0.025, dark);
  ball(head, 0.09, 0.27, 0.23, 0.025, dark);
  box(head, 0, 0.08, 0.24, 0.12, 0.015, 0.02, dark);

  const nose = addMesh(
    head,
    new THREE.ConeGeometry(0.045, 0.12, 12),
    face,
    new THREE.Vector3(0, 0.17, 0.27)
  );
  nose.rotation.x = Math.PI / 2;

  ball(head, -0.23, 0.2, 0, 0.065, face);
  ball(head, 0.23, 0.2, 0, 0.065, face);

  // Конечности
  const arms = {};
  const legs = {};

  for (const side of [-1, 1]) {
    const key = side === -1 ? 'right' : 'left';

    const shoulder = pivot(torso, side * 0.56, 2.77, 0);
    ball(shoulder, 0, 0, 0, 0.14);

    const upper = segment(shoulder, 0.68, 0.115);

    const elbow = pivot(shoulder, 0, -0.72, 0);
    ball(elbow, 0, 0, 0, 0.105);

    const forearm = segment(elbow, 0.6, 0.09);
    const hand = pivot(elbow, 0, -0.65, 0);

    const palm = box(
      hand, 0, -0.13, 0.01,
      0.18, 0.27, 0.09
    );

    const fingers = [];

    for (let i = 0; i < 4; i++) {
      fingers.push(
        box(
          hand,
          (i - 1.5) * 0.043,
          -0.32,
          0.015,
          0.033,
          0.12,
          0.045
        )
      );
    }

    arms[key] = {
      shoulder,
      elbow,
      upper,
      forearm,
      palm,
      fingers
    };

    const hip = pivot(group, side * 0.23, 1.55, 0);
    ball(hip, 0, 0, 0, 0.15);

    const thigh = segment(hip, 0.72, 0.16);

    const knee = pivot(hip, 0, -0.79, 0);
    ball(knee, 0, 0, 0, 0.13);

    const shin = segment(knee, 0.66, 0.115);

    const ankle = pivot(knee, 0, -0.72, 0);

    const foot = box(
      ankle, 0, -0.045, 0.16,
      0.24, 0.14, 0.45
    );

    legs[key] = {
      hip,
      knee,
      ankle,
      thigh,
      shin,
      foot
    };
  }

  // Шесть направленных движений
  const movements = {
    abduction: {
      ru: 'Абдукция плеча',
      en: 'Shoulder abduction',
      view: 'front',
      joint: 'shoulder',
      from: 0,
      to: -1.15
    },

    adduction: {
      ru: 'Аддукция плеча',
      en: 'Shoulder adduction',
      view: 'front',
      joint: 'shoulder',
      from: -1.15,
      to: 0
    },

    elbowFlex: {
      ru: 'Флексия локтя',
      en: 'Elbow flexion',
      view: 'right',
      joint: 'elbow',
      from: 0,
      to: -1.5
    },

    elbowExtend: {
      ru: 'Экстензия локтя',
      en: 'Elbow extension',
      view: 'right',
      joint: 'elbow',
      from: -1.5,
      to: 0
    },

    kneeFlex: {
      ru: 'Флексия колена',
      en: 'Knee flexion',
      view: 'right',
      joint: 'knee',
      from: 0,
      to: 1.4
    },

    kneeExtend: {
      ru: 'Экстензия колена',
      en: 'Knee extension',
      view: 'right',
      joint: 'knee',
      from: 1.4,
      to: 0
    },
    hipFlex: {view:'right',joint:'hip',from:0,to:-1.05},
    hipExtend: {view:'right',joint:'hip',from:0,to:0.55},
    hipAbduction: {view:'front',joint:'hipSide',from:0,to:-0.55},
    hipAdduction: {view:'front',joint:'hipSide',from:-0.55,to:0},
    ankleDorsi: {view:'right',joint:'ankle',from:0,to:-0.55},
    anklePlantar: {view:'right',joint:'ankle',from:0,to:0.55}
  };

  const arrowGroup = new THREE.Group();
  group.add(arrowGroup);

  let arrowGeometries = [];
  let current = 'abduction';
  let playing = true;
  let lastPhase = -1;

  function clearArrow() {
    for (const child of [...arrowGroup.children]) {
      arrowGroup.remove(child);
    }

    for (const geometry of arrowGeometries) {
      geometry.dispose();
    }

    arrowGeometries = [];
  }

  function addArrow(points) {
    const curve = new THREE.CatmullRomCurve3(points);

    const tubeGeometry = new THREE.TubeGeometry(
      curve, 40, 0.018, 8, false
    );

    const tube = new THREE.Mesh(
      tubeGeometry,
      arrowMaterial
    );

    tube.renderOrder = 20;
    arrowGroup.add(tube);
    arrowGeometries.push(tubeGeometry);

    const tipGeometry = new THREE.ConeGeometry(
      0.065, 0.16, 12
    );

    const tip = new THREE.Mesh(
      tipGeometry,
      arrowMaterial
    );

    const end = curve.getPoint(1);
    const direction = curve.getTangent(1).normalize();

    tip.position.copy(end);
    tip.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction
    );

    tip.renderOrder = 21;
    arrowGroup.add(tip);
    arrowGeometries.push(tipGeometry);
  }

  // Стрелка строится по фактической траектории
  // движущейся части конечности.
  function buildArrow(id) {
    clearArrow();

    const spec = movements[id];
    const points = [];

    const count = 28;

    if (spec.joint === 'shoulder') {
      const center = new THREE.Vector3(
        -0.56, 2.77, 0.27
      );

      const radius = 1.02;

      for (let i = 0; i <= count; i++) {
        const t = i / count;
        const a = spec.from +
          (spec.to - spec.from) * t;

        // Правая рука находится по -X.
        const x = center.x + radius * Math.sin(a);
        const y = center.y - radius * Math.cos(a);

        points.push(
          new THREE.Vector3(x, y, center.z)
        );
      }
    }

    if (spec.joint === 'elbow') {
      const center = new THREE.Vector3(
        -0.56, 2.05, 0.36
      );

      const radius = 0.79;

      for (let i = 0; i <= count; i++) {
        const t = i / count;
        const a = spec.from +
          (spec.to - spec.from) * t;

        points.push(
          new THREE.Vector3(
            center.x,
            center.y - radius * Math.cos(a),
            center.z - radius * Math.sin(a)
          )
        );
      }
    }

    if (spec.joint === 'knee') {
      const center = new THREE.Vector3(
        -0.23, 0.76, 0.36
      );

      const radius = 0.82;

      for (let i = 0; i <= count; i++) {
        const t = i / count;
        const a = spec.from +
          (spec.to - spec.from) * t;

        points.push(
          new THREE.Vector3(
            center.x,
            center.y - radius * Math.cos(a),
            center.z - radius * Math.sin(a)
          )
        );
      }
    }

    if (spec.joint === 'hip') {
      const center = new THREE.Vector3(-0.23, 1.55, 0.35);
      const radius = 0.9;
      for (let i = 0; i <= count; i++) {
        const a = spec.from + (spec.to - spec.from) * i / count;
        points.push(new THREE.Vector3(center.x, center.y-radius*Math.cos(a),center.z-radius*Math.sin(a)));
      }
    }
    if (spec.joint === 'hipSide') {
      const center = new THREE.Vector3(-0.23, 1.55, 0.35);
      const radius = 0.94;
      for (let i = 0; i <= count; i++) {
        const a = spec.from + (spec.to - spec.from) * i / count;
        points.push(new THREE.Vector3(center.x+radius*Math.sin(a),center.y-radius*Math.cos(a),center.z));
      }
    }
    if (spec.joint === 'ankle') {
      const center = new THREE.Vector3(-0.23, 0.04, 0.35);
      const radius = 0.5;
      for (let i = 0; i <= count; i++) {
        const a = spec.from + (spec.to - spec.from) * i / count;
        points.push(new THREE.Vector3(center.x,center.y-radius*Math.sin(a),center.z+radius*Math.cos(a)));
      }
    }
    if (points.length > 1) {
      addArrow(points);
    }
  }

  function resetPose() {
    for (const arm of Object.values(arms)) {
      arm.shoulder.rotation.set(0, 0, 0);
      arm.elbow.rotation.set(0, 0, 0);
    }

    for (const leg of Object.values(legs)) {
      leg.hip.rotation.set(0, 0, 0);
      leg.knee.rotation.set(0, 0, 0);
      leg.ankle.rotation.set(0, 0, 0);
    }
  }

  function paintMovement(forward) {
    const arm = arms.right;
    const leg = legs.right;
    const color = forward ? active : body;

    // Возвращаем нейтральные материалы.
    for (const a of Object.values(arms)) {
      a.upper.material = body;
      a.forearm.material = body;
      a.palm.material = body;
      a.fingers.forEach(m => m.material = body);
    }

    for (const l of Object.values(legs)) {
      l.thigh.material = body;
      l.shin.material = body;
      l.foot.material = body;
    }

    if (current === 'abduction' ||
        current === 'adduction') {
      arm.upper.material = color;
      arm.forearm.material = color;
      arm.palm.material = color;
      arm.fingers.forEach(m => m.material = color);
    }

    if (current === 'elbowFlex' ||
        current === 'elbowExtend') {
      arm.forearm.material = color;
      arm.palm.material = color;
      arm.fingers.forEach(m => m.material = color);
    }

    if (current === 'hipFlex' || current === 'hipExtend' || current === 'hipAbduction' || current === 'hipAdduction') {
      leg.thigh.material = color;
      leg.shin.material = color;
      leg.foot.material = color;
    }
    if (current === 'ankleDorsi' || current === 'anklePlantar') {
      leg.foot.material = color;
    }
    if (current === 'kneeFlex' ||
        current === 'kneeExtend') {
      leg.shin.material = color;
      leg.foot.material = color;
    }
  }

  function applyPose(progress, forward) {
    resetPose();

    const spec = movements[current];
    const angle = spec.from +
      (spec.to - spec.from) * progress;

    if (spec.joint === 'shoulder') {
      arms.right.shoulder.rotation.z = angle;
    }

    if (spec.joint === 'elbow') {
      arms.right.elbow.rotation.x = angle;
    }

    if (spec.joint === 'knee') {
      legs.right.knee.rotation.x = angle;
    }
    if (spec.joint === 'hip') {
      legs.right.hip.rotation.x = angle;
    }
    if (spec.joint === 'ankle') {
      legs.right.ankle.rotation.x = angle;
    }
    if (spec.joint === 'hipSide') {
      legs.right.hip.rotation.z = angle;
    }

    paintMovement(forward);
  }

  function setMovement(id) {
    if (!movements[id]) return;

    current = id;
    lastPhase = -1;

    buildArrow(id);
    arrowGroup.visible = playing;
    applyPose(0, true);
  }

  function update(time) {
    if (!playing) return;

    // Полный цикл 4.4 секунды.
    // 0..2.2: основное движение.
    // 2.2..4.4: плавный возврат.
    const duration = 4.4;
    const half = duration / 2;
    const t = ((time % duration) + duration) % duration;

    const forward = t < half;
    const x = forward
      ? t / half
      : (t - half) / half;

    // Плавное ускорение и торможение.
    const smooth = x * x * (3 - 2 * x);
    const progress = forward
      ? smooth
      : 1 - smooth;

    if (Math.abs(progress - lastPhase) > 0.0001) {
      applyPose(progress, forward);
      lastPhase = progress;
    }
  }

  function setNeutralPose() {
    resetPose();
    paintMovement(false);
    lastPhase = -1;
  }

  function setPlaying(value) {
    playing = Boolean(value);
    arrowGroup.visible = playing;

    if (!playing) {
      setNeutralPose();
    }
  }

  function dispose() {
    clearArrow();
    scene.remove(group);

    for (const geometry of geometries) {
      geometry.dispose();
    }

    [
      body,
      joint,
      face,
      dark,
      active,
      arrowMaterial
    ].forEach(material => material.dispose());
  }

  setMovement(current);

  return {
    group,
    movements,
    setMovement,
    setPlaying,
    setNeutralPose,
    update,
    dispose,

    get current() {
      return current;
    },

    get playing() {
      return playing;
    }
  };
}
