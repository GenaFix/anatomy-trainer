
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createMovementModel} from './movement.js';

const $=id=>document.getElementById(id);
const stage=$('stage');

const scene=new THREE.Scene();
scene.background=new THREE.Color('#0a192e');

const camera=new THREE.PerspectiveCamera(35,1,.1,100);
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
stage.prepend(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff,0x435675,2.3));

const light=new THREE.DirectionalLight(0xffffff,2.2);
light.position.set(3,6,6);
scene.add(light);

const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;
controls.target.set(0,1.65,0);
controls.minDistance=2.5;
controls.maxDistance=13;
controls.enablePan=false;

const movement=createMovementModel(scene);

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
  front:[0,1.65,7.6],
  back:[0,1.65,-7.6],
  right:[-7.6,1.65,0],
  left:[7.6,1.65,0]
};

function setView(name){
  if(!views[name])return;
  camera.position.set(...views[name]);
  controls.target.set(0,1.65,0);
  controls.update();

  const names={
    front:'Вид спереди',
    back:'Вид сзади',
    right:'Правая сторона человека',
    left:'Левая сторона человека'
  };

  $('viewLabel').textContent=names[name];

  document.querySelectorAll('[data-view]').forEach(button=>{
    button.classList.toggle(
      'active',button.dataset.view===name
    );
  });
}

document.querySelectorAll('[data-view]').forEach(button=>{
  button.onclick=()=>setView(button.dataset.view);
});

$('resetView').onclick=()=>setView('front');

function selectMovement(name){
  movement.setMovement(name);
  $('movement').value=name;
  setView(movement.movements[name].view);
}

$('movement').onchange=e=>selectMovement(e.target.value);

$('play').onclick=()=>{
  movement.setPlaying(!movement.playing);
  $('play').textContent=movement.playing
    ?'Анимация включена'
    :'Анимация остановлена';
};

$('status').textContent='Цифровой манекен готов';

const questions=[
  {
    movement:'elbow',
    question:'Как называется сгибание предплечья?',
    correct:'Флексия',
    answers:['Флексия','Экстензия','Абдукция','Пронация']
  },
  {
    movement:'shoulder',
    question:'Как называется отведение плеча от средней линии?',
    correct:'Абдукция',
    answers:['Аддукция','Флексия','Абдукция','Супинация']
  },
  {
    movement:'knee',
    question:'Как называется сгибание голени в коленном суставе?',
    correct:'Флексия',
    answers:['Экстензия','Флексия','Эверсия','Ротация']
  }
];

let index=0;
let score=0;
let answered=false;

function shuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

let quizOrder=shuffle(questions);

function showQuestion(){
  if(index>=quizOrder.length){
    $('counter').textContent='Тренировка завершена';
    $('question').textContent=
      `Результат: ${score} из ${quizOrder.length}`;
    $('answers').innerHTML='';
    $('feedback').textContent='';
    $('next').disabled=false;
    $('next').textContent='Начать заново';
    return;
  }

  const q=quizOrder[index];
  answered=false;

  $('counter').textContent=
    `Вопрос ${index+1} из ${quizOrder.length} · Правильно: ${score}`;
  $('question').textContent=q.question;
  $('feedback').textContent='';
  $('next').disabled=true;
  $('next').textContent='Следующий вопрос';
  $('answers').innerHTML='';

  selectMovement(q.movement);

  shuffle(q.answers).forEach(value=>{
    const button=document.createElement('button');
    button.className='answer';
    button.textContent=value;

    button.onclick=()=>{
      if(answered)return;
      answered=true;

      if(value===q.correct)score++;

      document.querySelectorAll('.answer').forEach(b=>{
        b.disabled=true;
        if(b.textContent===q.correct){
          b.classList.add('correct');
        }else if(b===button){
          b.classList.add('wrong');
        }
      });

      $('feedback').textContent=value===q.correct
        ?'Правильно. '+movement.movements[q.movement].description
        :'Неправильно. '+movement.movements[q.movement].description;

      $('next').disabled=false;
    };

    $('answers').appendChild(button);
  });
}

$('next').onclick=()=>{
  if(index>=quizOrder.length){
    index=0;
    score=0;
    quizOrder=shuffle(questions);
  }else{
    index++;
  }
  showQuestion();
};

let start=performance.now();

function animate(now){
  requestAnimationFrame(animate);
  movement.update((now-start)/1000);
  controls.update();
  renderer.render(scene,camera);
}

resize();
selectMovement('elbow');
showQuestion();
requestAnimationFrame(animate);
