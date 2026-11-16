
import * as THREE from 'three';
import {OrbitControls} from
  'three/addons/controls/OrbitControls.js';
import {createMovementModel} from './movement.js?v=292';
import {createVectorModel} from './vectors.js?v=292';

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
let touchRotate=false;
if(touchDevice){
  rotateBtn.hidden=false;
  controls.enabled=false;
  renderer.domElement.style.touchAction='pan-y';
  rotateBtn.onclick=()=>{
    touchRotate=!touchRotate;
    controls.enabled=touchRotate;
    renderer.domElement.style.touchAction=touchRotate?'none':'pan-y';
    rotateBtn.textContent=touchRotate?'Готово · прокрутка страницы':'Вращать 3D-модель';
    rotateBtn.classList.toggle('active',touchRotate);
    rotateBtn.setAttribute('aria-pressed',String(touchRotate));
  };
}
controls.enableDamping=true;
controls.enablePan=false;
controls.minDistance=2;
controls.maxDistance=12;

const model=createMovementModel(scene);
const vectors=createVectorModel(scene);
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
  $('viewLabel').textContent=viewNames[name];
  document.querySelectorAll('[data-view]').forEach(b=>{
    b.classList.toggle(
      'active',b.dataset.view===name
    );
  });
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

const compoundNames={
  cranioMedial:['Краниомедиально','Craniomedial'],
  cranioLateral:['Краниолатерально','Craniolateral'],
  caudoMedial:['Каудомедиально','Caudomedial'],
  caudoLateral:['Каудолатерально','Caudolateral'],
  cranioVentral:['Краниовентрально','Cranioventral'],
  cranioDorsal:['Краниодорсально','Craniodorsal'],
  caudoVentral:['Каудовентрально','Caudoventral'],
  caudoDorsal:['Каудодорсально','Caudodorsal'],
  cranioLateroVentral:['Краниолатеровентрально','Craniolateroventral'],
  cranioMedioVentral:['Краниомедиовентрально','Craniomedioventral'],
  caudoLateroDorsal:['Каудолатеродорсально','Caudolaterodorsal'],
  caudoMedioDorsal:['Каудомедиодорсально','Caudomediodorsal']
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
  scapElevate:['Подъём плечевого пояса','Shoulder girdle elevation'],
  scapDepress:['Опускание плечевого пояса','Shoulder girdle depression'],
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
  ru:{all:'Все темы',movements:'Движения суставов',directions:'Анатомические направления',planes:'Анатомические плоскости',compound:'Составные направления',count:'Вопросов:',allCount:'Все'},
  en:{all:'All topics',movements:'Joint movements',directions:'Anatomical directions',planes:'Anatomical planes',compound:'Compound directions',count:'Questions:',allCount:'All'}
};
function selectedQuestions(){
  const topic=$('topic').value;
  const pool=topic==='movements'?movementIds:
    topic==='directions'?directionIds:
    topic==='planes'?planeIds:topic==='compound'?compoundIds:allQuestions;
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
  const pool=planeIds.includes(correct)?planeIds:
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
  const visual=vectors.specs[id];
  const isCompound=Boolean(compoundDirections[id]);
  if(visual){
    model.setPlaying(false);
    vectors.show(isCompound?null:id);
    if(isCompound){
      activeCompound=id;
      reference.visible=true;
    }
    clockStart=performance.now();
    setView(visual.view);
  }else{
    vectors.show(null);
    model.setMovement(id);
    model.setPlaying(true);
    clockStart=performance.now();
    setView(model.movements[id].view);
  }
  $('status').textContent=visual
    ? (isCompound ? (language==='en'?'The figure moves relative to its original position.':'Фигура перемещается относительно исходного положения.') : visual.type==='plane'
      ? (language==='en'?'Identify the highlighted anatomical plane.':'Определи выделенную анатомическую плоскость.')
      : (language==='en'?'Identify the arrow direction.':'Определи направление жёлтой стрелки.'))
    : (language==='en'?'Identify the movement from the arrow.':'Определи движение по жёлтой стрелке.');

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
  beginTest(selectedQuestions());
};

let lastTime=performance.now();

function animate(now){
  requestAnimationFrame(animate);
  if(!finished){
    if(activeCompound) updateCompound((now-clockStart)/1000);
    else if(!vectors.group.visible) model.update((now-clockStart)/1000);
  }
  controls.update();
  renderer.render(scene,camera);
  lastTime=now;
}

$('status').textContent=
  '3D-модель готова. Жёлтая стрелка показывает направление.';

resize();
updateSettingsLanguage();
beginTest(selectedQuestions());
requestAnimationFrame(animate);
