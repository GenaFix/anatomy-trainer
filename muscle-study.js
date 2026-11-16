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
 let active=0,question=0,checked=new Set();
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 function draw(){
  section.replaceChildren();const english=language()==='en';
  const title=el('h3','',english?'Muscle learning':'Изучение мышц');section.append(title);
  const choose=el('select','muscle-dropdown');
  muscleNames.forEach((m,i)=>{const o=el('option','',english?m[1]:m[0]);o.value=i;choose.append(o);});
  choose.value=active;choose.onchange=()=>{active=+choose.value;checked.clear();draw();};section.append(choose);
  section.append(el('p','muscle-note',english?'The original 3D model is interactive. Click a visible part to inspect its actual GLB object name.':'Оригинальная 3D-модель интерактивна. Нажмите на мышцу, чтобы узнать имя объекта внутри GLB.'));
  const modelInfo=el('p','muscle-note','');modelInfo.id='ecorcheInfo';section.append(modelInfo);
  const meshInfo=el('p','muscle-note','');meshInfo.id='meshInfo';section.append(meshInfo);
  const search=el('input','muscle-search');search.placeholder=english?'Search GLB mesh name':'Поиск по имени объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);meshInfo.textContent=found.length?('GLB: '+found.length):'';};section.append(search);
  const qset=questions.filter(q=>q.focus===active);
  if(!qset.length){section.append(el('p','muscle-note',english?'Questions for this muscle are being prepared; no unverified answers are shown.':'Для этой мышцы вопросы пока готовятся. Непроверенные ответы не добавляем.'));return;}
  const q=qset[question%qset.length];
  section.append(el('h4','',english?(q.kind==='synergists'?'Select synergists':'Select antagonists')+': '+q.movement:(q.kind==='synergists'?'Выберите синергистов':'Выберите антагонистов')+': '+q.movement));
  const options=el('div','muscle-answers');
  muscleNames.forEach((m,i)=>{if(i===active)return;const label=el('label','muscle-choice');const box=el('input');box.type='checkbox';box.checked=checked.has(i);box.onchange=()=>{box.checked?checked.add(i):checked.delete(i);};label.append(box,document.createTextNode(' '+(english?m[1]:m[0])));options.append(label);});section.append(options);
  const result=el('p','muscle-note','');const submit=el('button','',english?'Check answers':'Проверить');submit.onclick=()=>{const expected=new Set(q.correct);const ok=expected.size===checked.size&&[...expected].every(x=>checked.has(x));result.textContent=(ok?'✓ ':'✗ ')+(ok?(english?'Correct. ':'Правильно. '):(english?'Review the answer. ':'Проверь ответ. '))+q.note;};section.append(submit,result);
  const next=el('button','',english?'Next task':'Следующее задание');next.onclick=()=>{question++;checked.clear();draw();};section.append(next);
 }
 model.setOnPick(mesh=>{const e=section.querySelector('#meshInfo');if(e)e.textContent='GLB: '+(mesh.name||'(без названия)');});
 return {draw,setInfo(message){const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;}};
}
