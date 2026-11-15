
import * as THREE from 'three';
import {OrbitControls} from
  'three/addons/controls/OrbitControls.js';
import {createMovementModel} from './movement.js';

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
controls.enableDamping=true;
controls.enablePan=false;
controls.minDistance=2;
controls.maxDistance=12;

const model=createMovementModel(scene);

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
  left:[6.6,1.7,0]
};

const viewNames={
  front:'Вид спереди',
  back:'Вид сзади',
  right:'Правая сторона человека',
  left:'Левая сторона человека'
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
    next:'Next question',
    restart:'New test',
    repeat:'Retry mistakes',
    correct:'Correct.',
    wrong:'Incorrect.',
    result:'Result',
    finished:'Test completed'
  }
};

const movementNames={
  abduction:['Абдукция плеча','Shoulder abduction'],
  adduction:['Аддукция плеча','Shoulder adduction'],
  elbowFlex:['Флексия локтя','Elbow flexion'],
  elbowExtend:['Экстензия локтя','Elbow extension'],
  kneeFlex:['Флексия колена','Knee flexion'],
  kneeExtend:['Экстензия колена','Knee extension']
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
  ]
};

const allQuestions=Object.keys(movementNames);

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
  // Варианты включают противоположное движение,
  // чтобы проверять именно направление.
  const opposites={
    abduction:'adduction',
    adduction:'abduction',
    elbowFlex:'elbowExtend',
    elbowExtend:'elbowFlex',
    kneeFlex:'kneeExtend',
    kneeExtend:'kneeFlex'
  };
  const chosen=[correct,opposites[correct]];
  const remaining=shuffle(
    allQuestions.filter(id=>!chosen.includes(id))
  );
  chosen.push(...remaining.slice(0,2));
  return shuffle(chosen);
}

function showQuestion(){
  finished=false;
  answered=false;

  const id=questions[index];
  $('counter').textContent=
    `${index+1} / ${questions.length} · ✓ ${score}`;
  $('question').textContent=tr('question');
  $('feedback').textContent='';
  $('answers').innerHTML='';
  $('next').disabled=true;
  $('next').textContent=tr('next');
  $('resultTools').classList.add('hidden');

  model.setMovement(id);
  model.setPlaying(true);
  clockStart=performance.now();
  setView(model.movements[id].view);

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

$('restart').onclick=()=>beginTest(allQuestions);
$('repeat').onclick=()=>beginTest(mistakes);

$('language').onchange=e=>{
  language=e.target.value;
  // Новый тест, чтобы переключение языка
  // не меняло варианты во время ответа.
  beginTest(allQuestions);
};

let lastTime=performance.now();

function animate(now){
  requestAnimationFrame(animate);
  if(!finished){
    model.update((now-clockStart)/1000);
  }
  controls.update();
  renderer.render(scene,camera);
  lastTime=now;
}

$('status').textContent=
  '3D-модель готова. Жёлтая стрелка показывает направление.';

resize();
beginTest(allQuestions);
requestAnimationFrame(animate);
