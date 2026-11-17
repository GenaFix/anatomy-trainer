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
 ['Задняя большеберцовая','Tibialis posterior'],
 ['Длинная головка трёхглавой мышцы плеча','Long head of triceps brachii'],
 ['Плечевая мышца','Brachialis'],
 ['Подколенная','Popliteus'],
 ['Длинный разгибатель большого пальца стопы','Extensor hallucis longus'],
 ['Длинный сгибатель большого пальца стопы','Flexor hallucis longus'],
 ['Длинный разгибатель пальцев стопы','Extensor digitorum longus'],
 ['Длинный сгибатель пальцев стопы','Flexor digitorum longus'],
 ['Короткая малоберцовая','Fibularis brevis'],
 ['Длинная малоберцовая','Fibularis longus'],
 ['Гребенчатая','Pectineus'],
 ['Тонкая','Gracilis'],
 ['Портняжная','Sartorius'],
 ['Квадратная мышца поясницы','Quadratus lumborum'],
 ['Грудино-ключично-сосцевидная','Sternocleidomastoid'],
 ['Лестничная передняя','Scalenus anterior'],
 ['Длинная мышца шеи','Longus colli'],
 ['Клювовидно-плечевая','Coracobrachialis'],
 ['Подключичная','Subclavius']
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
 {topic:'functions',text:'Какая мышца разгибает локоть?',correct:[15],note:'Трёхглавая мышца плеча выполняет разгибание в локтевом суставе.'},
 {topic:'attachments',text:"Какая мышца начинается от подсуставного бугорка лопатки?",correct:[15],note:"Длинная головка трёхглавой мышцы плеча начинается от подсуставного бугорка лопатки."},
 {topic:'attachments',text:"Какая мышца начинается от надсуставного бугорка лопатки?",correct:[14],note:"Длинная головка двуглавой мышцы плеча начинается от надсуставного бугорка лопатки."},
 {topic:'attachments',text:"Какая мышца прикрепляется к дельтовидной бугристости плечевой кости?",correct:[7],note:"Дельтовидная мышца прикрепляется к дельтовидной бугристости плечевой кости."},
 {topic:'attachments',text:"Какая мышца прикрепляется к бугристости лучевой кости?",correct:[14],note:"Двуглавая мышца плеча прикрепляется к бугристости лучевой кости."},
 {topic:'attachments',text:"Какая мышца прикрепляется к локтевому отростку?",correct:[15],note:"Трёхглавая мышца плеча прикрепляется к локтевому отростку локтевой кости."},
 {topic:'attachments',text:"Какая мышца начинается от латеральной поверхности подвздошной кости и отводит бедро?",correct:[32],note:"Средняя ягодичная мышца начинается от наружной поверхности подвздошной кости."},
 {topic:'attachments',text:"Какая мышца прикрепляется к пяточной кости через ахиллово сухожилие?",correct:[46],note:"Икроножная мышца прикрепляется к пяточной кости через пяточное сухожилие совместно с камбаловидной."},
 {topic:'functions',text:"Какая мышца преимущественно выполняет тыльное сгибание стопы и её инверсию?",correct:[48],note:"Передняя большеберцовая мышца участвует в тыльном сгибании и инверсии стопы."},
 {topic:'functions',text:"Какая мышца преимущественно выполняет подошвенное сгибание стопы независимо от положения колена?",correct:[47],note:"Камбаловидная мышца выполняет подошвенное сгибание стопы и не пересекает коленный сустав."},
 {topic:'functions',text:"Какая мышца сгибает локоть независимо от положения предплечья?",correct:[16],note:"Плечевая мышца является мощным сгибателем локтя при пронации и супинации."},
 {topic:'functions',text:"Какая мышца разгибает колено и одновременно сгибает бедро?",correct:[37],note:"Прямая мышца бедра пересекает тазобедренный и коленный суставы."},
 {topic:'functions',text:"Какая мышца разгибает большой палец стопы?",correct:[53],note:"Длинный разгибатель большого пальца стопы разгибает большой палец."},
 {topic:'functions',text:"Какая мышца сгибает большой палец стопы?",correct:[54],note:"Длинный сгибатель большого пальца стопы сгибает большой палец."},
 {topic:'functions',text:"Какая мышца выполняет боковое сгибание поясничного отдела позвоночника?",correct:[62],note:"Квадратная мышца поясницы участвует в латерофлексии поясничного отдела."},
 {topic:'functions',text:"Какая мышца поворачивает голову в противоположную сторону при одностороннем сокращении?",correct:[63],note:"Грудино-ключично-сосцевидная мышца вращает голову в противоположную сторону."},
 {topic:'functions',text:"Какая мышца сгибает и приводит плечо в плечевом суставе?",correct:[66],note:"Клювовидно-плечевая мышца участвует в сгибании и приведении плеча."}
];
const englishQuestionTexts=[
 'Which muscle acts as a synergist of the trapezius during scapular retraction?',
 'Which muscle acts as an antagonist of the trapezius during scapular retraction?',
 'Which muscle assists the trapezius in elevating the scapula?',
 'Which muscle originates in the supraspinous fossa of the scapula?',
 'Which muscle originates in the infraspinous fossa of the scapula?',
 'Which muscle originates on the anterior surface of the scapula in the subscapular fossa?',
 'Which muscle inserts on the lesser tubercle of the humerus?',
 'Which muscle inserts on the greater tubercle of the humerus?',
 'Which muscle is the main pronator of the distal forearm?',
 'Which muscle extends the elbow?',
 "Which muscle originates from the infraglenoid tubercle of the scapula?",
 "Which muscle has a long head originating from the supraglenoid tubercle of the scapula?",
 "Which muscle inserts on the deltoid tuberosity of the humerus?",
 "Which muscle inserts on the radial tuberosity?",
 "Which muscle inserts on the olecranon?",
 "Which hip abductor originates from the outer surface of the ilium?",
 "Which muscle inserts into the calcaneus via the Achilles tendon?",
 "Which muscle dorsiflexes and inverts the foot?",
 "Which muscle plantarflexes the ankle regardless of knee position?",
 "Which muscle flexes the elbow in both pronation and supination?",
 "Which muscle extends the knee and flexes the hip?",
 "Which muscle extends the great toe?",
 "Which muscle flexes the great toe?",
 "Which muscle laterally flexes the lumbar spine?",
 "Which muscle rotates the head to the opposite side when contracting unilaterally?",
 "Which muscle flexes and adducts the arm at the shoulder?"
];
const englishNotes=[
 'The rhomboids assist the middle trapezius fibers during scapular retraction.',
 'Serratus anterior protracts the scapula, opposing retraction.',
 'Levator scapulae assists the upper trapezius fibers in scapular elevation.',
 'Supraspinatus originates in the supraspinous fossa.',
 'Infraspinatus originates in the infraspinous fossa.',
 'Subscapularis originates in the subscapular fossa.',
 'Subscapularis inserts on the lesser tubercle of the humerus.',
 'Supraspinatus, infraspinatus and teres minor insert on facets of the greater tubercle.',
 'Pronator quadratus pronates the forearm.',
 'Triceps brachii extends the elbow.',
 "The long head of triceps brachii originates from the infraglenoid tubercle.",
 "The long head of biceps brachii originates from the supraglenoid tubercle.",
 "The deltoid inserts on the deltoid tuberosity.",
 "Biceps brachii inserts on the radial tuberosity.",
 "Triceps brachii inserts on the olecranon.",
 "Gluteus medius originates from the external surface of the ilium.",
 "Gastrocnemius joins soleus in the calcaneal tendon.",
 "Tibialis anterior dorsiflexes and inverts the foot.",
 "Soleus plantarflexes the ankle and does not cross the knee.",
 "Brachialis flexes the elbow in either forearm position.",
 "Rectus femoris crosses both the hip and knee joints.",
 "Extensor hallucis longus extends the great toe.",
 "Flexor hallucis longus flexes the great toe.",
 "Quadratus lumborum contributes to lumbar lateral flexion.",
 "Sternocleidomastoid rotates the head contralaterally.",
 "Coracobrachialis flexes and adducts the arm."
];
export function setupMuscleQuiz(container,model,language){
 let level='easy',topic='all',order=[],position=0,checked=new Set(),info='',meshInfo='',answered=false;
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 const shuffled=(arr)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const active=()=>anatomyQuestions.filter(q=>topic==='all'||q.topic===topic);
 function reset(){order=shuffled(active());position=0;checked.clear();answered=false;}
 reset();
 function questionText(q){
  if(language()==='en')return englishQuestionTexts[anatomyQuestions.indexOf(q)]||q.text||'Identify the muscle.';
  if(q.text)return q.text;
  return (q.kind==='synergists'?'Какая мышца является синергистом трапециевидной мышцы при движении «':'Какая мышца является антагонистом трапециевидной мышцы при движении «')+q.movement+'»?';
 }
 function options(q){
  const all=muscleNames.map((_,i)=>i).filter(i=>i!==q.focus);
  const wrong=shuffled(all.filter(i=>!q.correct.includes(i)));
  const eligible=q.correct.filter(i=>i!==q.focus);
  if(level==='expert')return all;
  if(level==='medium')return shuffled([...q.correct,...wrong.slice(0,Math.max(0,6-q.correct.length))]);
  return shuffled([eligible[Math.floor(Math.random()*eligible.length)],...wrong.slice(0,3)]);
 }
 let visualStatus='';
 function findMuscles(indices){
   return [...new Set(indices.flatMap(i=>model.findByAnatomicalName?.(muscleNames[i][1])||[]))];
 }
 function showHighlight(indices){
   const found=findMuscles(indices);
   if(found.length){
     model.highlight(found);
     visualStatus=(language()==='en'?'3D: highlighted objects: ':'3D: выделено объектов: ')+found.length+'.';
   }else{
     model.restore?.();
     visualStatus=language()==='en'?'3D: no exact match found. Highlight disabled.':'3D: точное соответствие не найдено. Подсветка отключена.';
   }
   const status=section.querySelector('#muscleHighlightStatus');
   if(status)status.textContent=visualStatus;
 }
 function highlightAnswer(q){showHighlight(q.correct);}
 function draw(){
  section.replaceChildren();
  const english=language()==='en',bilingual=language()==='both';
  const settings=el('div','muscle-compact-settings');section.append(settings);
  const categories=el('select','muscle-dropdown');categories.setAttribute('aria-label','Тема вопросов');
  for(const [v,ru,en] of [['all','Все вопросы','All questions'],['relations','Синергисты и антагонисты','Synergists and antagonists'],['attachments','Начало и прикрепление','Origins and insertions'],['functions','Функции мышц','Muscle functions']]){const o=el('option','',english?en:ru);o.value=v;categories.append(o);}
  categories.value=topic;categories.onchange=()=>{topic=categories.value;reset();draw();};settings.append(categories);
  const difficulty=el('select','muscle-dropdown');difficulty.setAttribute('aria-label','Сложность');
  for(const [v,ru,en] of [['easy','Начальный: 4 варианта','Beginner: 4 choices'],['medium','Средний: 6 вариантов','Intermediate: 6 choices'],['expert','Эксперт: все '+muscleNames.length+' мышц','Expert: all '+muscleNames.length+' muscles']]){const o=el('option','',english?en:ru);o.value=v;difficulty.append(o);}
  difficulty.value=level;difficulty.onchange=()=>{level=difficulty.value;checked.clear();answered=false;draw();};settings.append(difficulty);
  const details=el('details','muscle-diagnostics');details.append(el('summary','',english?'Model details':'Информация о модели'));
  const modelInfo=el('p','muscle-note',info);modelInfo.id='ecorcheInfo';details.append(modelInfo);
  details.append(el('p','muscle-note',(english?'Sample GLB object names: ':'Примеры названий объектов GLB: ')+(model.getNameSamples?.(8).join(' | ')||(english?'not available yet':'пока недоступны'))));
  const pickedInfo=el('p','muscle-note',meshInfo);pickedInfo.id='meshInfo';details.append(pickedInfo);section.append(details);
  const search=document.getElementById('muscleGlobalSearch');
  if(search){search.placeholder=english?'Find GLB object':'Поиск объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);meshInfo=found.length?'GLB: '+found.length:'';pickedInfo.textContent=meshInfo;};}
  if(!order.length){section.append(el('p','muscle-note',english?'Questions are being prepared.':'Вопросы готовятся.'));return;}
  if(position>=order.length){section.append(el('h4','muscle-question',english?'Quiz completed':'Тест завершён'));const restart=el('button','',english?'New quiz':'Новый тест');restart.onclick=()=>{reset();draw();};section.append(restart);return;}
  const q=order[position];const beginner=level==='easy';
  model.restore?.();
  visualStatus='';
  if(Number.isInteger(q.focus))showHighlight([q.focus]);
  section.append(el('p','muscle-note',String(position+1)+' / '+order.length));
  const highlightStatus=el('p','muscle-note',visualStatus||(english?'3D: highlighting requires matching object names.':'3D: выделение доступно при совпадении названий объектов.'));
  highlightStatus.id='muscleHighlightStatus';section.append(highlightStatus);
  section.append(el('h4','muscle-question',questionText(q)));
  const choices=options(q);const panel=el('div',beginner?'muscle-answers easy':'muscle-answers');
  const result=el('p','muscle-note','');
  const next=el('button','',english?'Next question':'Следующий вопрос');
  next.onclick=()=>{position++;checked.clear();answered=false;model.restore?.();draw();};
  function evaluate(){
   if(answered||!checked.size)return;
   const expected=new Set(beginner?choices.filter(i=>q.correct.includes(i)):q.correct);
   const correct=beginner?checked.size===1&&expected.has([...checked][0]):checked.size===expected.size&&[...expected].every(i=>checked.has(i));
   result.textContent=(correct?'✓ ':'✗ ')+(english?englishNotes[anatomyQuestions.indexOf(q)]||q.note:q.note);
   panel.querySelectorAll('label').forEach(label=>{
    const index=Number(label.dataset.index);
    if(expected.has(index))label.classList.add('correct');
    else if(checked.has(index))label.classList.add('wrong');
    label.querySelector('input').disabled=true;
   });
   answered=true;
   if(!beginner)check.disabled=true;
   next.disabled=false;
   highlightAnswer(q);
  }
  choices.forEach(i=>{
   const label=el('label','muscle-choice');
   const box=el('input');
   box.type=beginner?'radio':'checkbox';
   if(beginner)box.name='muscle-answer';
   box.checked=checked.has(i);
   box.onchange=()=>{
    if(answered)return;
    if(beginner){
     checked.clear();checked.add(i);
     panel.querySelectorAll('input').forEach(x=>{if(x!==box)x.checked=false;});
     evaluate();
    }else{
     box.checked?checked.add(i):checked.delete(i);
    }
   };
   label.append(box);
   const name=el('span','muscle-choice-name');
   name.append(document.createTextNode(english?muscleNames[i][1]:muscleNames[i][0]));
   if(bilingual)name.append(el('small','muscle-choice-translation',muscleNames[i][1]));
   label.append(name);
   label.dataset.index=String(i);panel.append(label);
  });
  section.append(panel);
  const check=el('button','',english?'Check':'Проверить');
  check.onclick=evaluate;
  if(!beginner)section.append(check);
  section.append(result);
  next.disabled=true;
  section.append(next);
 }
 model.setOnPick(mesh=>{meshInfo='GLB: '+(mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
