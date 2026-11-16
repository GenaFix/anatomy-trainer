import * as THREE from 'three';

// Визуальные задания: анатомическое положение, оси и плоскости.
// +Z = передняя поверхность, -X = правая сторона человека.
export function createVectorModel(scene) {
  const group = new THREE.Group();
  scene.add(group);
  group.visible = false;
  const yellow = 0xffdf32;
  const blue = new THREE.MeshBasicMaterial({
    color: 0x38c6f4, side: THREE.DoubleSide,
    transparent: true, opacity: 0.27, depthWrite: false
  });
  let disposable = [];

  function clear() {
    for (const child of [...group.children]) group.remove(child);
    disposable.forEach(x => x.dispose());
    disposable = [];
  }

  function arrow(start, direction, length = 0.95) {
    const origin = new THREE.Vector3(...start);
    const unit = new THREE.Vector3(...direction).normalize();
    const a = new THREE.ArrowHelper(unit, origin, length, yellow, 0.2, 0.1);
    a.line.material.depthTest = false;
    a.cone.material.depthTest = false;
    a.line.renderOrder = 30;
    a.cone.renderOrder = 31;
    group.add(a);
    disposable.push(a.line.geometry, a.cone.geometry, a.line.material, a.cone.material);
    const dotGeometry = new THREE.SphereGeometry(0.07, 12, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({color: yellow, depthTest: false});
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.position.copy(origin);
    dot.renderOrder = 32;
    group.add(dot);
    disposable.push(dotGeometry, dotMaterial);
  }

  function plane(w, h, orientation) {
    const geometry = new THREE.PlaneGeometry(w, h);
    const mesh = new THREE.Mesh(geometry, blue);
    mesh.position.set(0, 1.72, 0);
    if (orientation === 'sagittal') mesh.rotation.y = Math.PI / 2;
    if (orientation === 'transverse') mesh.rotation.x = Math.PI / 2;
    group.add(mesh);
    disposable.push(geometry);

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edges = new THREE.LineSegments(edgesGeometry,
      new THREE.LineBasicMaterial({color: 0x6de6ff, depthTest: false}));
    edges.position.copy(mesh.position);
    edges.rotation.copy(mesh.rotation);
    edges.renderOrder = 25;
    group.add(edges);
    disposable.push(edgesGeometry, edges.material);
  }

  const specs = {
    superior: {type:'direction', start:[-0.8,2.1,0.55], dir:[0,1,0], view:'front'},
    inferior: {type:'direction', start:[-0.8,2.1,0.55], dir:[0,-1,0], view:'front'},
    anterior: {type:'direction', start:[-0.7,2.1,0.45], dir:[0,0,1], view:'right'},
    posterior: {type:'direction', start:[-0.7,2.1,0.9], dir:[0,0,-1], view:'right'},
    medial: {type:'direction', start:[-1.35,2.05,0.55], dir:[1,0,0], view:'front'},
    lateral: {type:'direction', start:[-0.75,2.05,0.55], dir:[-1,0,0], view:'front'},
    proximal: {type:'direction', start:[-0.56,1.8,0.55], dir:[0,1,0], view:'front'},
    distal: {type:'direction', start:[-0.56,2.5,0.55], dir:[0,-1,0], view:'front'},
    superficial: {type:'depth', outward:true, view:'oblique'},
    deep: {type:'depth', outward:false, view:'oblique'},
    sagittal: {type:'plane', view:'oblique'},
    frontal: {type:'plane', view:'oblique'},
    transverse: {type:'plane', view:'oblique'}
  };

  function depthDiagram(outward) {
    // Сечение мягких тканей: поверхностное направление обозначено
    // от глубокой ткани к коже, а глубокое в обратную сторону.
    const tissue = new THREE.Group();
    tissue.position.set(-1.15, 1.85, 0.75);
    group.add(tissue);
    const layers = [
      {z:-0.38, color:0x9e4d4d, label:'deep'},
      {z:-0.10, color:0xcc7777, label:'muscle'},
      {z: 0.17, color:0xe5b77f, label:'subcutaneous'},
      {z: 0.40, color:0xf2cfac, label:'skin'}
    ];
    for (const layer of layers) {
      const geometry = new THREE.BoxGeometry(1.25, 1.1, 0.10);
      const material = new THREE.MeshPhongMaterial({color:layer.color,transparent:true,opacity:0.83});
      const mesh = new THREE.Mesh(geometry,material);
      mesh.position.z=layer.z;
      tissue.add(mesh);
      disposable.push(geometry,material);
    }
    // Стрелка располагается сбоку от слоёв, а не рядом с туловищем.
    // Помещаем стрелку отдельно слева от среза тканей,
    // чтобы она не перекрывалась слоями или фигурой.
    const start=outward?[-2.05,1.85,0.32]:[-2.05,1.85,1.15];
    arrow(start, [0,0,outward?1:-1], 0.80);
  }

  function show(id) {
    clear();
    const spec = specs[id];
    group.visible = Boolean(spec);
    if (!spec) return;
    if (spec.type === 'direction') arrow(spec.start, spec.dir);
    else if (spec.type === 'depth') depthDiagram(spec.outward);
    else if (id === 'sagittal') plane(2.2, 3.7, 'sagittal');
    else if (id === 'frontal') plane(2.2, 3.7, 'frontal');
    else plane(2.4, 2.0, 'transverse');
  }

  return {group, specs, show, dispose() {clear(); scene.remove(group); blue.dispose();}};
}
