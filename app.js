
import * as THREE from 'three';
import {OrbitControls} from
  'three/addons/controls/OrbitControls.js';
import {createMovementModel} from './movement.js?v=2940';
import {createVectorModel} from './vectors.js?v=2924';
import {createEcorche} from './ecorche.js?v=29441';
import {setupMuscleQuiz} from './muscle-study.js?v=29441';

const $=id=>document.getElementById(id);
const stage=$('stage');

const scene=new THREE.Scene();
scene.background=new THREE.Color('#0a192e');

const camera=new THREE.PerspectiveCamera(36,1,.1,100);
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(
  window.devicePixelRatio||1,2
));
renderer.outputColorSpace=THREE.SRGBColorSpace;
stage.prepend(renderer.domElement);

scene.add(new THREE.HemisphereLight(
  0xffffff,0x435675,2.3
));

const light=new THREE.DirectionalLight(
  0xffffff,2.2
);
light.position.set(3,6,6);
scene.add(light);

const controls=new OrbitControls(
  camera,renderer.domElement
);

// На сенсорных устройствах обычный свайп прокручивает страницу.
// Вращение модели включается отдельной кнопкой.
const touchDevice=window.matchMedia('(pointer: coarse)').matches;
const rotateBtn=$('touchRotate');
const searchField=$('muscleGlobalSearch');
const desktopSearchSlot=$('viewControls');
const mobileSearchSlot=$('modelInteractionRow');
function placeMuscleSearch(){
 const target=window.matchMedia('(min-width: 801px)').matches?desktopSearchSlot:mobileSearchSlot;
 if(searchField.parentElement!==target)target.append(searchField);
 const rotateTarget=window.matchMedia('(max-width: 800px)').matches?stage:mobileSearchSlot;
 if(rotateBtn.parentElement!==rotateTarget)rotateTarget.append(rotateBtn);
}
placeMuscleSearch();
window.addEventListener('resize',placeMuscleSearch);
let touchRotate=false;
if(touchDevice){
  rotateBtn.hidden=false;
  controls.enabled=false;
  renderer.domElement.style.touchAction='pan-y';

  // Надёжный pinch-to-zoom для мышечной модели на сенсорных экранах.
  // OrbitControls остаётся ответственным за поворот одним пальцем
  // и перемещение двумя пальцами.
  let previousPinchDistance=0;
  const canvas=renderer.domElement;
  canvas.addEventListener('touchstart',event=>{
    previousPinchDistance=event.touches.length===2
      ?Math.hypot(
        event.touches[0].clientX-event.touches[1].clientX,
        event.touches[0].clientY-event.touches[1].clientY
      )
      :0;
  },{passive:true});
  canvas.addEventListener('touchmove',event=>{
    if(!touchRotate||!muscleMode||event.touches.length!==2){
      previousPinchDistance=0;
      return;
    }
    const distance=Math.hypot(
      event.touches[0].clientX-event.touches[1].clientX,
      event.touches[0].clientY-event.touches[1].clientY
    );
    if(previousPinchDistance>0&&distance>0){
      event.preventDefault();
      const currentDistance=camera.position.distanceTo(controls.target);
      const nextDistance=THREE.MathUtils.clamp(
        currentDistance*previousPinchDistance/distance,
        controls.minDistance,
        controls.maxDistance
      );
      camera.position
        .sub(controls.target)
        .setLength(nextDistance)
        .add(controls.target);
      controls.update();
    }
    previousPinchDistance=distance;
  },{passive:false});
  canvas.addEventListener('touchend',event=>{
    if(event.touches.length<2)previousPinchDistance=0;
  },{passive:true});
  canvas.addEventListener('touchcancel',()=>{previousPinchDistance=0;},{passive:true});

  rotateBtn.onclick=()=>{
    touchRotate=!touchRotate;
    controls.enabled=touchRotate;
    renderer.domElement.style.touchAction=touchRotate?'none':'pan-y';
    rotateBtn.textContent=touchRotate?(language==='en'?'Done · scroll page':'Готово · прокрутка страницы'):(language==='en'?'Rotate 3D model':'Вращать 3D-модель');
    rotateBtn.classList.toggle('active',touchRotate);
    rotateBtn.setAttribute('aria-pressed',String(touchRotate));
  };
}
controls.enableDamping=true;
controls.enablePan=false;
controls.screenSpacePanning=true;
controls.touches.ONE=THREE.TOUCH.ROTATE;
// Для исходного режима оставляем штатные жесты OrbitControls.
controls.touches.TWO=THREE.TOUCH.DOLLY_PAN;
controls.minDistance=2;
controls.maxDistance=12;


const model=createMovementModel(scene);
const vectors=createVectorModel(scene);
const ecorche=createEcorche(scene,camera,renderer.domElement);
let muscleMode=false;
let muscleStudy=null;
let muscleReady=false;
let muscleLoadError=null;
ecorche.ready.then(info=>{
  muscleReady=true;
  $('status').classList.add('muscle-model-loaded');
  if(muscleStudy)muscleStudy.setInfo(language==='en'?('GLB: '+info.meshCount+' objects, named: '+info.namedCount):('GLB: '+info.meshCount+' объектов, с названиями: '+info.namedCount));
  if(muscleMode)$('status').textContent=language==='en'?'Original Écorché model loaded. Select a muscle or object.':'Оригинальная модель Écorché загружена. Выберите мышцу или объект.';
}).catch(error=>{
  muscleLoadError=error.message;
  $('status').classList.remove('muscle-model-loaded');
  if(muscleStudy)muscleStudy.setInfo('Не удалось загрузить GLB: '+error.message);
  if(muscleMode)$('status').textContent=language==='en'?'Failed to load Écorché. Check CDN access.':'Ошибка загрузки Écorché. Проверьте доступ к CDN.';
});
// Демонстрация составного направления перемещением всей фигуры.
// Неподвижный контур показывает исходное положение.
const reference=new THREE.Group();
scene.add(reference);
const referenceMat=new THREE.MeshBasicMaterial({color:0x4bd7f5,transparent:true,opacity:0.45,depthWrite:false});
const referenceLine=new THREE.LineSegments(
 new THREE.EdgesGeometry(new THREE.BoxGeometry(1.45,3.8,0.9)),
 new THREE.LineBasicMaterial({color:0x4bd7f5,transparent:true,opacity:0.3,depthTest:false})
);
referenceLine.position.y=1.9;
reference.add(referenceLine);
reference.visible=false;
const compoundDirections={
 cranioMedial:[1,1,0],cranioLateral:[-1,1,0],
 caudoMedial:[1,-1,0],caudoLateral:[-1,-1,0],
 cranioVentral:[0,1,1],cranioDorsal:[0,1,-1],
 caudoVentral:[0,-1,1],caudoDorsal:[0,-1,-1],
 cranioLateroVentral:[-1,1,1],cranioMedioVentral:[1,1,1],
 caudoLateroDorsal:[-1,-1,-1],caudoMedioDorsal:[1,-1,-1]
};
let activeCompound=null;
function resetCompound(){
 activeCompound=null;
 model.group.position.set(0,0,0);
 reference.visible=false;
}
function updateCompound(time){
 if(!activeCompound)return;
 const t=(1-Math.cos(time*Math.PI/2.2))/2;
 const v=compoundDirections[activeCompound];
 const mag=Math.hypot(...v);
 model.group.position.set(v[0]/mag*0.65*t,v[1]/mag*0.65*t,v[2]/mag*0.65*t);
}

function resize(){
  const w=stage.clientWidth;
  const h=stage.clientHeight;
  if(!w||!h)return;
  camera.aspect=w/h;
  camera.updateProjectionMatrix();
  renderer.setSize(w,h,false);
}
new ResizeObserver(resize).observe(stage);

const views={
  front:[0,1.7,6.6],
  back:[0,1.7,-6.6],
  right:[-6.6,1.7,0],
  left:[6.6,1.7,0],
  oblique:[4.7,3.2,5.1]
};

const viewNames={
  front:'Вид спереди',
  back:'Вид сзади',
  right:'Правая сторона человека',
  left:'Левая сторона человека',
  oblique:'Объёмный вид анатомической плоскости'
};

function setView(name){
  if(!views[name])return;
  camera.position.set(...views[name]);
  controls.target.set(0,1.7,0);
  controls.update();
  $('viewLabel').textContent=language==='en'?englishViewNames[name]:viewNames[name];
  document.querySelectorAll('[data-view]').forEach(b=>{
    b.classList.toggle(
      'active',b.dataset.view===name
    );
  });
}

let lastMuscleFocusBounds=null;
function focusMuscleBounds(bounds,side='front'){
 if(!bounds||bounds.isEmpty())return false;
 const center=bounds.getCenter(new THREE.Vector3());
 const size=bounds.getSize(new THREE.Vector3());
 const distance=Math.max(2.15,Math.min(3.3,Math.max(size.x,size.y,size.z)*2.1));
 const direction=side==='back'?new THREE.Vector3(0,0,-1):new THREE.Vector3(0,0,1);
 direction.y=.12;
 direction.normalize();
 controls.target.copy(center);
 camera.position.copy(center).addScaledVector(direction,distance);
 controls.update();
 return true;
}
function focusQuizAnswer(indices){
 lastMuscleFocusBounds=null;
 if(!indices.length){setView('front');return;}
 const muscleNames=muscleStudy?.getMuscleNames?.()||[];
 const names=indices.map(i=>muscleNames[i]?.[1]).filter(Boolean);
 const posteriorNames=new Set([
  'Trapezius','Rhomboid major','Rhomboid minor','Levator scapulae','Latissimus dorsi','Triceps brachii',
  'Teres major','Teres minor','Supraspinatus','Infraspinatus','Erector spinae','Multifidus',
  'Gluteus maximus','Gluteus medius','Gluteus minimus','Piriformis','Biceps femoris',
  'Semitendinosus','Semimembranosus','Gastrocnemius','Soleus','Tibialis posterior','Popliteus',
  'Flexor hallucis longus','Flexor digitorum longus','Fibularis brevis','Fibularis longus',
  'Posterior scalene','Rectus capitis posterior major','Rectus capitis posterior minor',
  'Obliquus capitis superior','Obliquus capitis inferior','Splenius capitis','Splenius cervicis',
  'Semispinalis cervicis','Semispinalis capitis','Coccygeus'
 ]);
 const back=names.filter(n=>posteriorNames.has(n)).length>names.length/2;
 const bounds=ecorche.getAnatomicalBounds(names);
 if(bounds){lastMuscleFocusBounds=bounds.clone();focusMuscleBounds(bounds,back?'back':'front');}
}

document.querySelectorAll('[data-view]').forEach(b=>{
  b.onclick=()=>setView(b.dataset.view);
});

$('resetView').onclick=()=>setView('front');

const dictionary={
  ru:{
    question:'Как называется показанное движение?',
    directionQuestion:'Какое анатомическое направление показано?',
    planeQuestion:'Какая анатомическая плоскость выделена?',
    next:'Следующий вопрос',
    restart:'Новый тест',
    repeat:'Повторить ошибки',
    correct:'Правильно.',
    wrong:'Неправильно.',
    result:'Результат',
    finished:'Тест завершён'
  },
  en:{
    question:'What movement is shown?',
    directionQuestion:'Which anatomical direction is shown?',
    planeQuestion:'Which anatomical plane is highlighted?',
    next:'Next question',
    restart:'New test',
    repeat:'Retry mistakes',
    correct:'Correct.',
    wrong:'Incorrect.',
    result:'Result',
    finished:'Test completed'
  }
};


const uiLabels={
 digitalBtn:['Движения и направления','Movements and directions'],
 muscleBtn:['Изучение мышц','Muscle study'],
 resetView:['Сброс','Reset'],
 hideMuscleMesh:['Скрыть выбранное','Hide selected'],
 restoreMuscleMeshes:['Вернуть слои','Restore layers'],
 focusMuscleMesh:['Приблизить выбранное','Focus on selected'],
 touchRotate:['Вращать 3D-модель','Rotate 3D model'],
 viewLabel:['3D-модель','3D model']
};
const viewButtons={
 front:['Спереди','Front'],back:['Сзади','Back'],
 right:['Справа','Right'],left:['Слева','Left']
};
const englishViewNames={
 front:'Front view',back:'Back view',
 right:'Person’s right side',left:'Person’s left side',
 oblique:'Oblique view of anatomical plane'
};
function translateInterface(){
 const en=language==='en';
 for(const [id,pair] of Object.entries(uiLabels)){
   const node=$(id);
   if(!node)continue;
   if(id==='touchRotate'&&touchRotate){
     node.textContent=en?'Done · scroll page':'Готово · прокрутка страницы';
   }else if(id==='viewLabel'){
     // The camera label is set by setView().
   }else node.textContent=pair[en?1:0];
 }
 for(const b of document.querySelectorAll('[data-view]')){
   const pair=viewButtons[b.dataset.view];
   if(pair)b.textContent=pair[en?1:0];
 }
 const search=$('muscleGlobalSearch');
 search.placeholder=en?'Find GLB object':'Поиск объекта GLB';
 search.setAttribute('aria-label',search.placeholder);
 const hint=$('muscleGestureText');
 $('muscleGestureHint').querySelector('summary').textContent=en?'Model controls':'Управление моделью';
 hint.textContent=en
  ?'On a phone, tap “Rotate 3D model”, then drag with one finger. Use two fingers to pan or zoom. Tap “Done” to scroll. On a computer, left mouse rotates and right mouse pans.'
  :'На телефоне нажмите «Вращать 3D-модель» и проведите одним пальцем. Двумя пальцами можно перемещать и приближать. Нажмите «Готово», чтобы прокручивать страницу. На компьютере левая кнопка вращает, правая перемещает.';
 const langLabel=document.querySelector('label[for="language"]');
 if(langLabel)langLabel.textContent=en?'Language:':'Язык:';
 const heading=document.querySelector('#quizPanel .quiz-heading h3');
 if(heading)heading.textContent=en?'Knowledge check':'Проверка знаний';
 const topicLabel=document.querySelector('label[for="topic"]');
 if(topicLabel)topicLabel.textContent=en?'Topic:':'Тема:';
 const footer=document.querySelector('main > p.small.muted');
 if(footer)footer.textContent=en
  ?'Interactive quiz on movements, anatomical directions and planes. Animations are schematic and are not intended for clinical joint assessment.'
  :'Интерактивный тест движений, направлений и анатомических плоскостей. Анимации схематические и не предназначены для клинической оценки суставов.';
 const selectedView=document.querySelector('[data-view].active')?.dataset.view||'front';
 $('viewLabel').textContent=en?englishViewNames[selectedView]:viewNames[selectedView];
}

const compoundNames={
  cranioMedial:['Кранио-медиально','Cranio-medial'],
  cranioLateral:['Кранио-латерально','Cranio-lateral'],
  caudoMedial:['Каудо-медиально','Caudo-medial'],
  caudoLateral:['Каудо-латерально','Caudo-lateral'],
  cranioVentral:['Кранио-вентрально','Cranio-ventral'],
  cranioDorsal:['Кранио-дорсально','Cranio-dorsal'],
  caudoVentral:['Каудо-вентрально','Caudo-ventral'],
  caudoDorsal:['Каудо-дорсально','Caudo-dorsal'],
  cranioLateroVentral:['Кранио-латеро-вентрально','Cranio-latero-ventral'],
  cranioMedioVentral:['Кранио-медио-вентрально','Cranio-medio-ventral'],
  caudoLateroDorsal:['Каудо-латеро-дорсально','Caudo-latero-dorsal'],
  caudoMedioDorsal:['Каудо-медио-дорсально','Caudo-medio-dorsal']
};
const compoundDescriptions={
  cranioMedial:['К голове и к срединной плоскости.','Toward the head and midline.'],
  cranioLateral:['К голове и от срединной плоскости.','Toward the head and away from the midline.'],
  caudoMedial:['К стопам и к срединной плоскости.','Toward the feet and midline.'],
  caudoLateral:['К стопам и от срединной плоскости.','Toward the feet and away from the midline.'],
  cranioVentral:['К голове и к передней поверхности.','Toward the head and anterior surface.'],
  cranioDorsal:['К голове и к задней поверхности.','Toward the head and posterior surface.'],
  caudoVentral:['К стопам и к передней поверхности.','Toward the feet and anterior surface.'],
  caudoDorsal:['К стопам и к задней поверхности.','Toward the feet and posterior surface.'],
  cranioLateroVentral:['К голове, от срединной плоскости и вперёд.','Toward the head, laterally and anteriorly.'],
  cranioMedioVentral:['К голове, к срединной плоскости и вперёд.','Toward the head, medially and anteriorly.'],
  caudoLateroDorsal:['К стопам, от срединной плоскости и назад.','Toward the feet, laterally and posteriorly.'],
  caudoMedioDorsal:['К стопам, к срединной плоскости и назад.','Toward the feet, medially and posteriorly.']
};
const movementNames={
  abduction:['Абдукция плеча','Shoulder abduction'],
  adduction:['Аддукция плеча','Shoulder adduction'],
  shoulderFlex:['Сгибание в плечевом суставе (флексия)','Shoulder flexion'],
  shoulderExtend:['Разгибание в плечевом суставе (экстензия)','Shoulder extension'],
  elbowFlex:['Флексия локтя','Elbow flexion'],
  elbowExtend:['Экстензия локтя','Elbow extension'],
  kneeFlex:['Флексия колена','Knee flexion'],
  kneeExtend:['Экстензия колена','Knee extension'],
  hipFlex:['Флексия тазобедренного сустава','Hip flexion'],
  hipExtend:['Экстензия тазобедренного сустава','Hip extension'],
  hipAbduction:['Абдукция бедра','Hip abduction'],
  hipAdduction:['Аддукция бедра','Hip adduction'],
  ankleDorsi:['Дорсифлексия стопы','Ankle dorsiflexion'],
  anklePlantar:['Плантарная флексия стопы','Ankle plantarflexion'],
  wristFlex:['Флексия кисти','Wrist flexion'],
  wristExtend:['Экстензия кисти','Wrist extension'],
  neckRotateLeft:['Аксиальная ротация головы влево','Head rotation left'],
  neckRotateRight:['Аксиальная ротация головы вправо','Head rotation right'],
  trunkSideLeft:['Латерофлексия туловища влево','Left trunk lateral flexion'],
  trunkSideRight:['Латерофлексия туловища вправо','Right trunk lateral flexion'],
  scapElevate:['Элевация плечевого пояса','Shoulder girdle elevation'],
  scapDepress:['Депрессия плечевого пояса','Shoulder girdle depression'],
  trunkFlex:['Флексия туловища','Trunk flexion'],
  trunkExtend:['Экстензия туловища','Trunk extension'],
  trunkRotateLeft:['Аксиальная ротация туловища влево','Left axial trunk rotation'],
  trunkRotateRight:['Аксиальная ротация туловища вправо','Right axial trunk rotation'],
  superior:['Краниально (верхний)','Superior (cranial)'],
  inferior:['Каудально (нижний)','Inferior (caudal)'],
  anterior:['Вентрально (передний)','Anterior (ventral)'],
  posterior:['Дорсально (задний)','Posterior (dorsal)'],
  medial:['Медиально','Medial'],
  lateral:['Латерально','Lateral'],
  proximal:['Проксимально','Proximal'],
  distal:['Дистально','Distal'],
  superficial:['Поверхностно','Superficial'],
  deep:['Глубоко','Deep'],
  sagittal:['Сагиттальная плоскость','Sagittal plane'],
  frontal:['Фронтальная плоскость','Frontal plane'],
  transverse:['Поперечная плоскость','Transverse plane']
};

const descriptions={
  abduction:[
    'Отведение плеча от туловища.',
    'Movement of the arm away from the trunk.'
  ],
  adduction:[
    'Приведение плеча к туловищу.',
    'Movement of the arm toward the trunk.'
  ],
  shoulderFlex:['Движение плеча вперёд относительно туловища в сагиттальной плоскости.','Moving the upper arm forward relative to the trunk in the sagittal plane.'],
  shoulderExtend:['Движение плеча назад относительно туловища в сагиттальной плоскости.','Moving the upper arm backward relative to the trunk in the sagittal plane.'],
  elbowFlex:[
    'Уменьшение угла в локтевом суставе.',
    'Decreasing the angle at the elbow.'
  ],
  elbowExtend:[
    'Увеличение угла в локтевом суставе.',
    'Increasing the angle at the elbow.'
  ],
  kneeFlex:[
    'Уменьшение угла в коленном суставе.',
    'Decreasing the angle at the knee.'
  ],
  kneeExtend:[
    'Увеличение угла в коленном суставе.',
    'Increasing the angle at the knee.'
  ],
  hipFlex:['Движение бедра вперёд относительно таза.','Movement of the thigh forward relative to the pelvis.'],
  hipExtend:['Движение бедра назад относительно таза.','Movement of the thigh backward relative to the pelvis.'],
  hipAbduction:['Отведение бедра от срединной линии тела.','Moving the thigh away from the body midline.'],
  hipAdduction:['Приведение бедра к срединной линии тела.','Moving the thigh toward the body midline.'],
  ankleDorsi:['Подъём переднего отдела стопы к голени.','Moving the top of the foot toward the shin.'],
  anklePlantar:['Движение переднего отдела стопы вниз от голени.','Pointing the foot downward away from the shin.'],
  wristFlex:['Сгибание кисти в лучезапястном суставе.','Flexion at the wrist.'],
  wristExtend:['Разгибание кисти в лучезапястном суставе.','Extension at the wrist.'],
  neckRotateLeft:['Поворот головы влево относительно туловища.','Turning the head to the person’s left.'],
  neckRotateRight:['Поворот головы вправо относительно туловища.','Turning the head to the person’s right.'],
  trunkSideLeft:['Боковое сгибание туловища влево.','Lateral flexion of the trunk to the left.'],
  trunkSideRight:['Боковое сгибание туловища вправо.','Lateral flexion of the trunk to the right.'],
  scapElevate:['Движение плечевого пояса вверх.','Moving the shoulder girdle upward.'],
  scapDepress:['Движение плечевого пояса вниз.','Moving the shoulder girdle downward.'],
  trunkFlex:['Наклон туловища вперёд в сагиттальной плоскости.','Forward bending of the trunk in the sagittal plane.'],
  trunkExtend:['Разгибание туловища назад в сагиттальной плоскости.','Backward extension of the trunk in the sagittal plane.'],
  trunkRotateLeft:['Поворот туловища вокруг продольной оси влево.','Rotation of the trunk around its longitudinal axis to the left.'],
  trunkRotateRight:['Поворот туловища вокруг продольной оси вправо.','Rotation of the trunk around its longitudinal axis to the right.'],
  superior:['Направление к голове.','Toward the head.'],
  inferior:['Направление к стопам.','Toward the feet.'],
  anterior:['Направление к передней поверхности тела.','Toward the front of the body.'],
  posterior:['Направление к задней поверхности тела.','Toward the back of the body.'],
  medial:['Направление к срединной линии тела.','Toward the body midline.'],
  lateral:['Направление от срединной линии тела.','Away from the body midline.'],
  proximal:['Ближе к месту прикрепления конечности к туловищу.','Closer to the limb attachment to the trunk.'],
  distal:['Дальше от места прикрепления конечности к туловищу.','Farther from the limb attachment to the trunk.'],
  superficial:['Ближе к поверхности тела.','Closer to the body surface.'],
  deep:['Дальше от поверхности тела, вглубь.','Farther from the body surface, inward.'],
  sagittal:['Разделяет тело на правую и левую части.','Divides the body into right and left parts.'],
  frontal:['Разделяет тело на переднюю и заднюю части.','Divides the body into front and back parts.'],
  transverse:['Разделяет тело на верхнюю и нижнюю части.','Divides the body into upper and lower parts.']
};

Object.assign(movementNames,compoundNames);
Object.assign(descriptions,compoundDescriptions);
const compoundTwoIds=['cranioMedial','cranioLateral','caudoMedial','caudoLateral','cranioVentral','cranioDorsal','caudoVentral','caudoDorsal'];
const compoundThreeIds=['cranioLateroVentral','cranioMedioVentral','caudoLateroDorsal','caudoMedioDorsal'];
const compoundIds=[...compoundTwoIds,...compoundThreeIds];
const combinationNames={
  comboShoulderFlexAbduct:["Флексия + абдукция плеча","Shoulder flexion + abduction"],
  comboShoulderFlexExternal:["Флексия + наружная ротация плеча","Shoulder flexion + external rotation"],
  comboElbowFlexSupinate:["Флексия локтя + супинация предплечья","Elbow flexion + forearm supination"],
  comboHipFlexAbduct:["Флексия + абдукция бедра","Hip flexion + abduction"],
  comboHipFlexExternal:["Флексия + наружная ротация бедра","Hip flexion + external rotation"],
  comboHipFlexKneeFlex:["Флексия бедра + флексия колена","Hip flexion + knee flexion"],
  comboAnklePlantarInvert:["Подошвенная флексия + инверсия стопы","Plantarflexion + inversion"],
  comboAnkleDorsiEvert:["Тыльная флексия + эверсия стопы","Dorsiflexion + eversion"],
  comboTrunkFlexRotateLeft:["Флексия туловища + ротация влево","Trunk flexion + left rotation"],
  comboTrunkExtendRotateRight:["Экстензия туловища + ротация вправо","Trunk extension + right rotation"]
};
const combinationDescriptions={
  comboShoulderFlexAbduct:["Правая рука движется вперёд и латерально.","The right arm moves forward and laterally."],
  comboShoulderFlexExternal:["Правое плечо сгибается и вращается наружу.","The right shoulder flexes and externally rotates."],
  comboElbowFlexSupinate:["Правый локоть сгибается, предплечье супинируется.","The right elbow flexes and the forearm supinates."],
  comboHipFlexAbduct:["Правое бедро движется вперёд и латерально.","The right thigh moves forward and laterally."],
  comboHipFlexExternal:["Правое бедро сгибается и вращается наружу.","The right hip flexes and externally rotates."],
  comboHipFlexKneeFlex:["Правое бедро и колено одновременно сгибаются.","The right hip and knee flex together."],
  comboAnklePlantarInvert:["Правая стопа направляется вниз и инвертируется.","The right foot points down and inverts."],
  comboAnkleDorsiEvert:["Правая стопа направляется вверх и эвертируется.","The right foot dorsiflexes and everts."],
  comboTrunkFlexRotateLeft:["Туловище сгибается и поворачивается влево.","The trunk flexes and rotates left."],
  comboTrunkExtendRotateRight:["Туловище разгибается и поворачивается вправо.","The trunk extends and rotates right."]
};
// 2.9.4: additional combined-movement quiz items.
const addedCombinations={
  extrashoulderFlexelbowFlex:["Флексия плеча + флексия локтя","Shoulder flexion + elbow flexion"],
  extrashoulderFlexelbowExtend:["Флексия плеча + экстензия локтя","Shoulder flexion + elbow extension"],
  extrashoulderFlexwristFlex:["Флексия плеча + флексия кисти","Shoulder flexion + wrist flexion"],
  extrashoulderFlexwristExtend:["Флексия плеча + экстензия кисти","Shoulder flexion + wrist extension"],
  extrashoulderFlexsupinate:["Флексия плеча + супинация предплечья","Shoulder flexion + forearm supination"],
  extrashoulderFlexpronate:["Флексия плеча + пронация предплечья","Shoulder flexion + forearm pronation"],
  extrashoulderExtendelbowFlex:["Экстензия плеча + флексия локтя","Shoulder extension + elbow flexion"],
  extrashoulderExtendelbowExtend:["Экстензия плеча + экстензия локтя","Shoulder extension + elbow extension"],
  extrashoulderExtendwristFlex:["Экстензия плеча + флексия кисти","Shoulder extension + wrist flexion"],
  extrashoulderExtendwristExtend:["Экстензия плеча + экстензия кисти","Shoulder extension + wrist extension"],
  extrashoulderExtendsupinate:["Экстензия плеча + супинация предплечья","Shoulder extension + forearm supination"],
  extrashoulderExtendpronate:["Экстензия плеча + пронация предплечья","Shoulder extension + forearm pronation"],
  extrahipFlexkneeExtend:["Флексия бедра + экстензия колена","Hip flexion + knee extension"],
  extrahipExtendkneeFlex:["Экстензия бедра + флексия колена","Hip extension + knee flexion"],
  extrahipExtendkneeExtend:["Экстензия бедра + экстензия колена","Hip extension + knee extension"],
  extrahipAbductkneeFlex:["Абдукция бедра + флексия колена","Hip abduction + knee flexion"],
  extrahipAbductkneeExtend:["Абдукция бедра + экстензия колена","Hip abduction + knee extension"],
  extrahipAdductkneeFlex:["Аддукция бедра + флексия колена","Hip adduction + knee flexion"],
  extrahipAdductkneeExtend:["Аддукция бедра + экстензия колена","Hip adduction + knee extension"],
  extrahipFlexankleDorsi:["Флексия бедра + тыльная флексия стопы","Hip flexion + ankle dorsiflexion"],
  extrahipFlexanklePlantar:["Флексия бедра + подошвенная флексия стопы","Hip flexion + ankle plantarflexion"],
  extrahipExtendankleDorsi:["Экстензия бедра + тыльная флексия стопы","Hip extension + ankle dorsiflexion"],
  extrahipExtendanklePlantar:["Экстензия бедра + подошвенная флексия стопы","Hip extension + ankle plantarflexion"],
  extraankleDorsiinvert:["Тыльная флексия стопы + инверсия стопы","Ankle dorsiflexion + foot inversion"],
  extraanklePlantarevert:["Подошвенная флексия стопы + эверсия стопы","Ankle plantarflexion + foot eversion"],
  extrakneeFlexankleDorsi:["Флексия колена + тыльная флексия стопы","Knee flexion + ankle dorsiflexion"],
  extrakneeFlexanklePlantar:["Флексия колена + подошвенная флексия стопы","Knee flexion + ankle plantarflexion"],
  extrakneeExtendankleDorsi:["Экстензия колена + тыльная флексия стопы","Knee extension + ankle dorsiflexion"],
  extrakneeExtendanklePlantar:["Экстензия колена + подошвенная флексия стопы","Knee extension + ankle plantarflexion"],
  extratrunkFlexrotateRight:["Флексия туловища + ротация вправо","Trunk flexion + right rotation"],
  extratrunkExtendrotateLeft:["Экстензия туловища + ротация влево","Trunk extension + left rotation"],
  extratrunkSideLeftrotateLeft:["Латерофлексия туловища влево + ротация влево","Trunk left lateral flexion + left rotation"],
  extratrunkSideLeftrotateRight:["Латерофлексия туловища влево + ротация вправо","Trunk left lateral flexion + right rotation"],
  extratrunkSideRightrotateLeft:["Латерофлексия туловища вправо + ротация влево","Trunk right lateral flexion + left rotation"],
  extratrunkSideRightrotateRight:["Латерофлексия туловища вправо + ротация вправо","Trunk right lateral flexion + right rotation"],
  extraneckLefttrunkFlex:["Ротация головы влево + флексия туловища","Head left rotation + trunk flexion"],
  extraneckLefttrunkExtend:["Ротация головы влево + экстензия туловища","Head left rotation + trunk extension"],
  extraneckRighttrunkFlex:["Ротация головы вправо + флексия туловища","Head right rotation + trunk flexion"],
  extraneckRighttrunkExtend:["Ротация головы вправо + экстензия туловища","Head right rotation + trunk extension"],
  extrashoulderAbductelbowFlex:["Абдукция плеча + флексия локтя","Shoulder abduction + elbow flexion"]
};
Object.assign(combinationNames,addedCombinations);
for(const [id,names] of Object.entries(addedCombinations))combinationDescriptions[id]=[names[0]+'.',names[1]+'.'];
const combinationIds=Object.keys(combinationNames);
Object.assign(movementNames,combinationNames);
Object.assign(descriptions,combinationDescriptions);

const allQuestions=Object.keys(movementNames);
const directionIds=['superior','inferior','anterior','posterior','medial','lateral','proximal','distal','superficial','deep',...compoundIds];
const planeIds=['sagittal','frontal','transverse'];
const movementIds=['abduction','adduction','shoulderFlex','shoulderExtend','elbowFlex','elbowExtend','kneeFlex','kneeExtend','hipFlex','hipExtend','hipAbduction','hipAdduction','ankleDorsi','anklePlantar','wristFlex','wristExtend','neckRotateLeft','neckRotateRight','trunkSideLeft','trunkSideRight','scapElevate','scapDepress','trunkFlex','trunkExtend','trunkRotateLeft','trunkRotateRight'];

function shuffle(array){
  const a=[...array];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

let language='ru';
let questions=shuffle(allQuestions);
const topicLabels={
  ru:{all:'Все темы',movements:'Движения суставов',directions:'Анатомические направления',planes:'Анатомические плоскости',compound:'Составные направления',combinations:'Комбинированные движения',count:'Вопросов:',allCount:'Все'},
  en:{all:'All topics',movements:'Joint movements',directions:'Anatomical directions',planes:'Anatomical planes',compound:'Compound directions',combinations:'Combined movements',count:'Questions:',allCount:'All'}
};
function selectedQuestions(){
  const topic=$('topic').value;
  const pool=topic==='movements'?movementIds:
    topic==='directions'?directionIds:
    topic==='planes'?planeIds:topic==='compound'?compoundIds:topic==='combinations'?combinationIds:allQuestions;
  const count=$('questionCount').value;
  return shuffle(pool).slice(0,count==='all'?pool.length:Number(count));
}
function updateSettingsLanguage(){
  const lang=language==='en'?'en':'ru';
  const labels=topicLabels[lang];
  for(const option of $('topic').options)option.textContent=labels[option.value];
  $('questionCount').previousElementSibling.textContent=labels.count;
  $('questionCount').options[0].textContent=labels.allCount;
}
let index=0;
let score=0;
let mistakes=[];
let answered=false;
let finished=false;
let clockStart=performance.now();

function tr(key){
  return dictionary[language==='en'?'en':'ru'][key];
}

function term(id){
  const pair=movementNames[id];
  if(language==='en')return pair[1];
  if(language==='both')return pair[0]+' / '+pair[1];
  return pair[0];
}

function explanation(id){
  const pair=descriptions[id];
  if(language==='en')return pair[1];
  if(language==='both')return pair[0]+' '+pair[1];
  return pair[0];
}

function choicesFor(correct){
  const pool=combinationIds.includes(correct)?combinationIds:planeIds.includes(correct)?planeIds:
    compoundTwoIds.includes(correct)?compoundTwoIds:
    compoundThreeIds.includes(correct)?compoundThreeIds:
    directionIds.includes(correct)?directionIds:movementIds;
  const opposites={
    abduction:'adduction', adduction:'abduction',
    shoulderFlex:'shoulderExtend', shoulderExtend:'shoulderFlex',
    wristFlex:'wristExtend', wristExtend:'wristFlex',
    neckRotateLeft:'neckRotateRight', neckRotateRight:'neckRotateLeft',
    trunkSideLeft:'trunkSideRight', trunkSideRight:'trunkSideLeft',
    scapElevate:'scapDepress', scapDepress:'scapElevate',
    trunkFlex:'trunkExtend', trunkExtend:'trunkFlex',
    trunkRotateLeft:'trunkRotateRight', trunkRotateRight:'trunkRotateLeft',
    elbowFlex:'elbowExtend', elbowExtend:'elbowFlex',
    kneeFlex:'kneeExtend', kneeExtend:'kneeFlex',
    hipFlex:'hipExtend', hipExtend:'hipFlex',
    hipAbduction:'hipAdduction', hipAdduction:'hipAbduction',
    ankleDorsi:'anklePlantar', anklePlantar:'ankleDorsi',
    superior:'inferior', inferior:'superior',
    anterior:'posterior', posterior:'anterior',
    medial:'lateral', lateral:'medial',
    proximal:'distal', distal:'proximal',
    superficial:'deep', deep:'superficial',
    cranioMedial:'cranioLateral',cranioLateral:'cranioMedial',
    caudoMedial:'caudoLateral',caudoLateral:'caudoMedial',
    cranioVentral:'cranioDorsal',cranioDorsal:'cranioVentral',
    caudoVentral:'caudoDorsal',caudoDorsal:'caudoVentral',
    cranioLateroVentral:'cranioMedioVentral',cranioMedioVentral:'cranioLateroVentral',
    caudoLateroDorsal:'caudoMedioDorsal',caudoMedioDorsal:'caudoLateroDorsal'
  };
  const chosen=[correct];
  if(opposites[correct]) chosen.push(opposites[correct]);
  const remaining=shuffle(pool.filter(id=>!chosen.includes(id)));
  chosen.push(...remaining.slice(0,Math.min(4,pool.length)-chosen.length));
  return shuffle(chosen);
}

function showQuestion(){
  finished=false;
  answered=false;

  const id=questions[index];
  $('counter').textContent=
    `${index+1} / ${questions.length} · ✓ ${score}`;
  $('question').textContent=tr(planeIds.includes(id)?'planeQuestion':directionIds.includes(id)?'directionQuestion':'question');
  $('feedback').textContent='';
  $('answers').innerHTML='';
  $('next').disabled=true;
  $('next').textContent=tr('next');
  $('resultTools').classList.add('hidden');

  resetCompound();
  model.clearCompound();
  const visual=vectors.specs[id];
  const isCompound=Boolean(compoundDirections[id]);
  const isCombination=combinationIds.includes(id);
  if(isCompound){
    vectors.show(null);
    const limb = 'arm';
    model.setCompound(id,limb);
    clockStart=performance.now();
    setView(compoundDirections[id][2] ? 'oblique' : 'front');
  }else if(visual){
    model.setPlaying(false);
    vectors.show(isCompound?null:id);
    clockStart=performance.now();
    setView(visual.view);
  }else{
    vectors.show(null);
    model.setMovement(id);
    model.setPlaying(true);
    clockStart=performance.now();
    setView(model.movements[id].view);
  }
  $('status').textContent=isCompound
    ? (language==='en'?'Identify the direction of the highlighted limb.':'Определи направление движения подсвеченной конечности.')
    : visual
    ? (visual.type==='plane'
      ? (language==='en'?'Identify the highlighted anatomical plane.':'Определи выделенную анатомическую плоскость.')
      : (language==='en'?'Identify the arrow direction.':'Определи направление жёлтой стрелки.'))
    : isCombination
    ? (language==='en'?'Identify the combined movement.':'Определи сочетание движений.')
    : (language==='en'?'Identify the movement from the animation.':'Определи движение по анимации.');

  for(const choice of choicesFor(id)){
    const button=document.createElement('button');
    button.className='answer';
    button.textContent=term(choice);
    button.dataset.answer=choice;

    button.onclick=()=>{
      if(answered)return;
      answered=true;

      const correct=choice===id;
      if(correct)score++;
      else mistakes.push(id);

      document.querySelectorAll('.answer').forEach(b=>{
        b.disabled=true;
        if(b.dataset.answer===id){
          b.classList.add('correct');
        }else if(b===button){
          b.classList.add('wrong');
        }
      });

      $('feedback').textContent=
        (correct?tr('correct'):tr('wrong'))+
        ' '+term(id)+'. '+explanation(id);

      $('next').disabled=false;
    };

    $('answers').appendChild(button);
  }
}

function showResult(){
  finished=true;
  model.setPlaying(false);
  vectors.show(null);
  resetCompound();
  model.clearCompound();
  $('counter').textContent=tr('finished');
  $('question').textContent=
    `${tr('result')}: ${score} / ${questions.length}`;
  $('answers').innerHTML='';
  $('feedback').textContent=
    language==='en'
      ?`Mistakes: ${mistakes.length}`
      :`Ошибок: ${mistakes.length}`;
  $('next').classList.add('hidden');
  $('resultTools').classList.remove('hidden');
  $('repeat').disabled=mistakes.length===0;
}

function beginTest(ids){
  questions=shuffle(ids);
  index=0;
  score=0;
  mistakes=[];
  finished=false;
  $('next').classList.remove('hidden');
  showQuestion();
}

$('next').onclick=()=>{
  index++;
  if(index>=questions.length)showResult();
  else showQuestion();
};

$('restart').onclick=()=>beginTest(selectedQuestions());
$('topic').onchange=()=>beginTest(selectedQuestions());
$('questionCount').onchange=()=>beginTest(selectedQuestions());
$('repeat').onclick=()=>beginTest(mistakes);

$('language').onchange=e=>{
  language=e.target.value;
  // Новый тест, чтобы переключение языка
  // не меняло варианты во время ответа.
  updateSettingsLanguage();
  translateInterface();
  if(muscleMode)renderMuscle();else beginTest(selectedQuestions());
};


function renderMuscle(){
 if(muscleStudy)muscleStudy.draw();
}
function activateMode(enabled){
 if(!enabled)muscleStudy?.stopSpeech?.();
 muscleMode=enabled;
 document.body.classList.toggle('muscle-mode',enabled);
 translateInterface();
 controls.enablePan=enabled;
 controls.touches.TWO=enabled?THREE.TOUCH.PAN:THREE.TOUCH.DOLLY_PAN;
 $('muscleTools').classList.toggle('hidden',!enabled);
 $('muscleGlobalSearch').classList.toggle('hidden',!enabled);
 $('muscleGestureHint').classList.toggle('hidden',!enabled);
 $('muscleBtn').classList.toggle('active',enabled);
 $('digitalBtn').classList.toggle('active',!enabled);
 $('quizPanel').classList.toggle('hidden',enabled);
 $('musclePanel').classList.toggle('hidden',!enabled);
 model.group.visible=!enabled;
 ecorche.root.visible=enabled;
 vectors.group.visible=false;
 reference.visible=false;
 if(enabled){
   lastMuscleFocusBounds=null;
   model.setPlaying(false);
   model.clearCompound();
   model.setNeutralPose();
   if(!muscleStudy)muscleStudy=setupMuscleQuiz($('musclePanel'),ecorche,()=>language,focusQuizAnswer);
   renderMuscle();
   if(muscleLoadError)muscleStudy.setInfo((language==='en'?'Model loading error: ':'Ошибка загрузки модели: ')+muscleLoadError);
   else if(muscleReady)muscleStudy.setInfo((language==='en'?'Model loaded: ':'Модель загружена: ')+ecorche.meshes.length+(language==='en'?' objects':' объектов'));
   else muscleStudy.setInfo(language==='en'?'Loading 3D muscle model, please wait...':'Загрузка 3D-модели мышц, подождите...');
   setView('front');
   $('status').textContent=muscleLoadError?(language==='en'?'Muscle model loading error: ':'Ошибка загрузки мышечной модели: ')+muscleLoadError:(muscleReady?(language==='en'?'Muscle model loaded.':'Мышечная модель загружена.'):(language==='en'?'Loading original muscle model...':'Загрузка оригинальной модели мышц...'));
   $('status').classList.toggle('muscle-model-loaded',muscleReady&&!muscleLoadError);
 }else{
   ecorche.restore();
   beginTest(selectedQuestions());
 }
}
$('muscleBtn').onclick=()=>activateMode(true);
$('digitalBtn').onclick=()=>activateMode(false);

$('hideMuscleMesh').onclick=()=>{
 const ok=ecorche.hidePicked();
 if(muscleStudy)muscleStudy.setMeshInfo(language==='en'?(ok?'Selected surface hidden. Select another object.':'Select an object on the model first.'):(ok?'Выбранная поверхность скрыта. Можно выбрать следующую.':'Сначала нажмите на объект модели.'));
};
$('restoreMuscleMeshes').onclick=()=>{
 ecorche.showAll();
 if(muscleStudy)muscleStudy.setMeshInfo(language==='en'?'All surfaces restored.':'Все поверхности восстановлены.');
};
$('focusMuscleMesh').onclick=()=>{
 const bounds=lastMuscleFocusBounds||ecorche.getPickedBounds?.();
 if(!bounds){if(muscleStudy)muscleStudy.setMeshInfo(language==='en'?'Answer a question or select a muscle on the model first.':'Сначала ответьте на вопрос или выберите мышцу на модели.');return;}
 focusMuscleBounds(bounds,camera.position.z<controls.target.z?'back':'front');
};

let lastTime=performance.now();

function animate(now){
  requestAnimationFrame(animate);
  if(!finished && !muscleMode){
    if(!vectors.group.visible) model.update((now-clockStart)/1000);
  }
  controls.update();
  renderer.render(scene,camera);
  lastTime=now;
}

$('status').textContent=
  '3D-модель готова. Жёлтая стрелка показывает направление.';

resize();
updateSettingsLanguage();
translateInterface();
beginTest(selectedQuestions());
requestAnimationFrame(animate);
