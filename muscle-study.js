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
export function setupMuscleQuiz(container,model,language){
 let active=0,question=0,level='easy',checked=new Set(),info='',meshInfo='';
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 const pickOptions=(q)=>{
   const pool=muscleNames.map((_,i)=>i).filter(i=>i!==active&&!q.correct.includes(i));
   // Fixed question-specific order; no invented relationship labels.
   const shuffled=pool.map((v,i)=>({v,k:(i*37+question*17)%101})).sort((a,b)=>a.k-b.k).map(x=>x.v);
   if(level==='expert')return muscleNames.map((_,i)=>i).filter(i=>i!==active);
   if(level==='easy')return [q.correct[question%q.correct.length],...shuffled.slice(0,3)].sort((a,b)=>((a*17+question*11)%43)-((b*17+question*11)%43));
   return [...q.correct,...shuffled.slice(0,Math.max(0,6-q.correct.length))].sort((a,b)=>((a*17+question*11)%43)-((b*17+question*11)%43));
 };
 function draw(){
  section.replaceChildren();const english=language()==='en';
  section.append(el('h3','',english?'Muscle learning':'Изучение мышц'));
  const choose=el('select','muscle-dropdown');
  muscleNames.forEach((m,i)=>{const o=el('option','',english?m[1]:m[0]);o.value=i;choose.append(o);});
  choose.value=active;choose.onchange=()=>{active=+choose.value;question=0;checked.clear();draw();};section.append(choose);
  const label=el('label','muscle-note',english?'Difficulty':'Уровень сложности');section.append(label);
  const difficulty=el('select','muscle-dropdown');
  for(const [v,ru,en] of [['easy','Начальный: 4 варианта','Beginner: 4 choices'],['medium','Средний: 6 вариантов','Intermediate: 6 choices'],['expert','Эксперт: все 50 мышц','Expert: all 50 muscles']]){const o=el('option','',english?en:ru);o.value=v;difficulty.append(o);}
  difficulty.value=level;difficulty.onchange=()=>{level=difficulty.value;checked.clear();draw();};section.append(difficulty);
  section.append(el('p','muscle-note',english?'Tap the 3D model to select a mesh. Use the buttons above to hide or restore surfaces.':'Нажмите на 3D-модель для выбора объекта. Кнопки над моделью позволяют скрывать и восстанавливать поверхности.'));
  const modelInfo=el('p','muscle-note',info);modelInfo.id='ecorcheInfo';section.append(modelInfo);
  const pickedInfo=el('p','muscle-note',meshInfo);pickedInfo.id='meshInfo';section.append(pickedInfo);
  const search=el('input','muscle-search');search.placeholder=english?'Search GLB mesh name':'Поиск по имени объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);pickedInfo.textContent=found.length?'GLB: '+found.length:'';};section.append(search);
  const qset=questions.filter(q=>q.focus===active);
  if(!qset.length){section.append(el('p','muscle-note',english?'Questions for this muscle are being prepared.':'Для этой мышцы вопросы пока готовятся.'));return;}
  const q=qset[question%qset.length];
  const beginner=level==='easy';
  section.append(el('h4','',english?(beginner?'Select one '+(q.kind==='synergists'?'synergist':'antagonist'):'Select all '+(q.kind==='synergists'?'synergists':'antagonists'))+': '+q.movement:(beginner?'Выберите одного '+(q.kind==='synergists'?'синергиста':'антагониста'):'Выберите всех '+(q.kind==='synergists'?'синергистов':'антагонистов'))+': '+q.movement));
  const options=el('div',level==='easy'?'muscle-answers easy':'muscle-answers');
  const offered=pickOptions(q);
  for(const i of offered){const label=el('label','muscle-choice');const box=el('input');box.type=beginner?'radio':'checkbox';box.name=beginner?'muscle-answer':undefined;box.checked=checked.has(i);box.onchange=()=>{if(beginner){checked.clear();checked.add(i);options.querySelectorAll('input').forEach(x=>{if(x!==box)x.checked=false;});}else{box.checked?checked.add(i):checked.delete(i);}};label.append(box,document.createTextNode(' '+(english?muscleNames[i][1]:muscleNames[i][0])));options.append(label);}
  section.append(options);
  const result=el('p','muscle-note','');const submit=el('button','',english?'Check answers':'Проверить');
  submit.onclick=()=>{
    const expected=new Set(q.correct);
    const ok=beginner?checked.size===1&&expected.has([...checked][0]):expected.size===checked.size&&[...expected].every(x=>checked.has(x));
    result.textContent=(ok?'✓ ':'✗ ')+(ok?(english?'Correct. ':'Правильно. '):(english?'Review the answer. ':'Проверь ответ. '))+q.note;
    for(const label of options.querySelectorAll('label')){const input=label.querySelector('input');const index=offered[[...options.children].indexOf(label)];if(expected.has(index))label.classList.add('correct');else if(input.checked)label.classList.add('wrong');input.disabled=true;}
    submit.disabled=true;
  };
  section.append(submit,result);
  const next=el('button','',english?'Next task':'Следующее задание');next.onclick=()=>{question++;checked.clear();draw();};section.append(next);
 }
 model.setOnPick(mesh=>{meshInfo='GLB: '+(mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
