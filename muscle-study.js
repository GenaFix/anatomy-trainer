// Training list is independent of the GLB mesh names.
// Associations with model parts are not assumed without checking source metadata.
export const muscleNames=[
 ['Трапециевидная','Trapezius'],['Ромбовидная большая','Rhomboid major'],['Ромбовидная малая','Rhomboid minor'],
 ['Мышца, поднимающая лопатку','Levator scapulae'],['Передняя зубчатая','Serratus anterior'],
 ['Большая грудная','Pectoralis major'],['Малая грудная','Pectoralis minor'],['Дельтовидная','Deltoid'],
 ['Широчайшая мышца спины','Latissimus dorsi'],['Большая круглая','Teres major'],['Малая круглая','Teres minor'],
 ['Надостная','Supraspinatus'],['Подостная','Infraspinatus'],['Подлопаточная','Subscapularis'],
 ['Двуглавая мышца плеча','Biceps brachii'],['Трёхглавая мышца плеча','Triceps brachii'],
 ['Плечевая','Brachialis'],['Плечелучевая','Brachioradialis'],['Круглый пронатор','Pronator teres'],
 ['Квадратный пронатор','Pronator quadratus'],['Супинатор','Supinator'],
 ['Лучевой сгибатель запястья','Flexor carpi radialis'],['Локтевой сгибатель запястья','Flexor carpi ulnaris'],
 ['Длинный лучевой разгибатель запястья','Extensor carpi radialis longus'],
 ['Локтевой разгибатель запястья','Extensor carpi ulnaris'],
 ['Прямая мышца живота','Rectus abdominis'],['Наружная косая живота','External oblique'],
 ['Внутренняя косая живота','Internal oblique'],['Поперечная мышца живота','Transversus abdominis'],
 ['Мышца, выпрямляющая позвоночник','Erector spinae'],['Многораздельная','Multifidus'],
 ['Большая ягодичная','Gluteus maximus'],['Средняя ягодичная','Gluteus medius'],
 ['Малая ягодичная','Gluteus minimus'],['Грушевидная','Piriformis'],
 ['Подвздошно-поясничная','Iliopsoas'],['Напрягатель широкой фасции','Tensor fasciae latae'],
 ['Прямая мышца бедра','Rectus femoris'],['Латеральная широкая бедра','Vastus lateralis'],
 ['Медиальная широкая бедра','Vastus medialis'],['Промежуточная широкая бедра','Vastus intermedius'],
 ['Двуглавая мышца бедра','Biceps femoris'],['Полусухожильная','Semitendinosus'],
 ['Полуперепончатая','Semimembranosus'],['Длинная приводящая','Adductor longus'],
 ['Большая приводящая','Adductor magnus'],['Икроножная','Gastrocnemius'],
 ['Камбаловидная','Soleus'],['Передняя большеберцовая','Tibialis anterior'],
 ['Задняя большеберцовая','Tibialis posterior']
];
// Small initial validated question bank. Each relationship refers to one action.
export const questions=[
 {focus:0,kind:'synergists',movement:'Приведение (ретракция) лопатки',correct:[1,2],note:'При ретракции лопатки ромбовидные мышцы действуют совместно со средними пучками трапециевидной мышцы.'},
 {focus:0,kind:'antagonists',movement:'Приведение (ретракция) лопатки',correct:[4],note:'Передняя зубчатая мышца участвует в протракции лопатки, противоположной ретракции.'},
 {focus:0,kind:'synergists',movement:'Подъём лопатки',correct:[3],note:'Мышца, поднимающая лопатку, содействует верхним пучкам трапециевидной мышцы при подъёме лопатки.'}
];
// Questions are scoped to a precise movement or attachment landmark.
const anatomyQuestions=[
 {topic:'relations',kind:'synergists',focus:0,movement:'Ретракция лопатки',correct:[1,2],note:'Ромбовидные мышцы участвуют в ретракции лопатки вместе со средними пучками трапециевидной мышцы.'},
 {topic:'relations',kind:'antagonists',focus:0,movement:'Ретракция лопатки',correct:[4],note:'Передняя зубчатая мышца способствует протракции лопатки.'},
 {topic:'relations',kind:'synergists',focus:0,movement:'Подъём лопатки',correct:[3],note:'Мышца, поднимающая лопатку, содействует верхним пучкам трапециевидной мышцы.'},
 {topic:'attachments',text:'Какая мышца начинается в надостной ямке лопатки?',correct:[11],note:'Надостная мышца начинается в надостной ямке лопатки.'},
 {topic:'attachments',text:'Какая мышца начинается в подостной ямке лопатки?',correct:[12],note:'Подостная мышца начинается в подостной ямке лопатки.'},
 {topic:'attachments',text:'Какая мышца начинается на передней поверхности лопатки в подлопаточной ямке?',correct:[13],note:'Подлопаточная мышца начинается в подлопаточной ямке.'},
 {topic:'attachments',text:'Какая мышца прикрепляется к малому бугорку плечевой кости?',correct:[13],note:'Подлопаточная мышца прикрепляется к малому бугорку плечевой кости.'},
 {topic:'attachments',text:'Какая мышца прикрепляется к большому бугорку плечевой кости?',correct:[11,12,10],note:'Надостная, подостная и малая круглая мышцы прикрепляются к фасеткам большого бугорка плечевой кости.'},
 {topic:'functions',text:'Какая мышца является главным пронатором предплечья в дистальном отделе?',correct:[19],note:'Квадратный пронатор выполняет пронацию предплечья.'},
 {topic:'functions',text:'Какая мышца разгибает локоть?',correct:[15],note:'Трёхглавая мышца плеча выполняет разгибание в локтевом суставе.'}
];
export function setupMuscleQuiz(container,model,language){
 let level='easy',topic='all',order=[],position=0,checked=new Set(),info='',meshInfo='',answered=false;
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 const shuffled=(arr)=>[...arr].sort(()=>Math.random()-.5);
 const active=()=>anatomyQuestions.filter(q=>topic==='all'||q.topic===topic);
 function reset(){order=shuffled(active());position=0;checked.clear();answered=false;}
 reset();
 function questionText(q){
  if(q.text)return q.text;
  return (q.kind==='synergists'?'Какая мышца является синергистом трапециевидной мышцы при движении «':'Какая мышца является антагонистом трапециевидной мышцы при движении «')+q.movement+'»?';
 }
 function options(q){
  const all=muscleNames.map((_,i)=>i).filter(i=>i!==q.focus);
  const wrong=shuffled(all.filter(i=>!q.correct.includes(i)));
  if(level==='expert')return all;
  if(level==='medium')return shuffled([...q.correct,...wrong.slice(0,Math.max(0,6-q.correct.length))]);
  return shuffled([q.correct[Math.floor(Math.random()*q.correct.length)],...wrong.slice(0,3)]);
 }
 function highlightAnswer(q){
  if(!model||typeof model.selectByName!=='function')return;
  // Only attempt lookup using explicit model metadata, never pretend the mesh has been identified.
  const found=q.correct.flatMap(i=>model.findByAnatomicalName?.(muscleNames[i][1])||[]);
  if(found.length&&model.highlight){model.highlight(found);return;}
  model.restore?.();
 }
 function draw(){
  section.replaceChildren();
  const english=language()==='en';
  const settings=el('div','muscle-compact-settings');section.append(settings);
  const categories=el('select','muscle-dropdown');categories.setAttribute('aria-label','Тема вопросов');
  for(const [v,ru,en] of [['all','Все вопросы','All questions'],['relations','Синергисты и антагонисты','Synergists and antagonists'],['attachments','Начало и прикрепление','Origins and insertions'],['functions','Функции мышц','Muscle functions']]){const o=el('option','',english?en:ru);o.value=v;categories.append(o);}
  categories.value=topic;categories.onchange=()=>{topic=categories.value;reset();draw();};settings.append(categories);
  const difficulty=el('select','muscle-dropdown');difficulty.setAttribute('aria-label','Сложность');
  for(const [v,ru,en] of [['easy','Начальный: 4 варианта','Beginner: 4 choices'],['medium','Средний: 6 вариантов','Intermediate: 6 choices'],['expert','Эксперт: все 50 мышц','Expert: all 50 muscles']]){const o=el('option','',english?en:ru);o.value=v;difficulty.append(o);}
  difficulty.value=level;difficulty.onchange=()=>{level=difficulty.value;checked.clear();answered=false;draw();};settings.append(difficulty);
  const details=el('details','muscle-diagnostics');details.append(el('summary','',english?'Model details':'Информация о модели'));
  const modelInfo=el('p','muscle-note',info);modelInfo.id='ecorcheInfo';details.append(modelInfo);
  const pickedInfo=el('p','muscle-note',meshInfo);pickedInfo.id='meshInfo';details.append(pickedInfo);section.append(details);
  const search=document.getElementById('muscleGlobalSearch');
  if(search){search.placeholder=english?'Find GLB object':'Поиск объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);meshInfo=found.length?'GLB: '+found.length:'';pickedInfo.textContent=meshInfo;};}
  if(!order.length){section.append(el('p','muscle-note','Вопросы готовятся.'));return;}
  if(position>=order.length){section.append(el('h4','muscle-question','Тест завершён'));const restart=el('button','','Новый тест');restart.onclick=()=>{reset();draw();};section.append(restart);return;}
  const q=order[position];const beginner=level==='easy';
  section.append(el('p','muscle-note',String(position+1)+' / '+order.length));
  section.append(el('h4','muscle-question',questionText(q)));
  const choices=options(q);const panel=el('div',beginner?'muscle-answers easy':'muscle-answers');
  choices.forEach(i=>{const label=el('label','muscle-choice');const box=el('input');box.type=beginner?'radio':'checkbox';box.name=beginner?'muscle-answer':undefined;box.checked=checked.has(i);box.onchange=()=>{if(beginner){checked.clear();checked.add(i);panel.querySelectorAll('input').forEach(x=>{if(x!==box)x.checked=false;});}else{box.checked?checked.add(i):checked.delete(i);}};label.append(box,document.createTextNode(' '+(english?muscleNames[i][1]:muscleNames[i][0])));label.dataset.index=String(i);panel.append(label);});
  section.append(panel);
  const result=el('p','muscle-note','');const check=el('button','',english?'Check':'Проверить');
  check.onclick=()=>{
   if(!checked.size)return;
   const expected=new Set(q.correct);
   const correct=beginner?checked.size===1&&expected.has([...checked][0]):checked.size===expected.size&&[...expected].every(i=>checked.has(i));
   result.textContent=(correct?'✓ ':'✗ ')+q.note;
   panel.querySelectorAll('label').forEach(label=>{const index=Number(label.dataset.index);if(expected.has(index))label.classList.add('correct');else if(checked.has(index))label.classList.add('wrong');label.querySelector('input').disabled=true;});
   check.disabled=true;answered=true;highlightAnswer(q);
  };
  section.append(check,result);
  const next=el('button','',english?'Next question':'Следующий вопрос');next.onclick=()=>{position++;checked.clear();answered=false;model.restore?.();draw();};section.append(next);
 }
 model.setOnPick(mesh=>{meshInfo='GLB: '+(mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
