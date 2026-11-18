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
 ['Передняя лестничная','Scalenus anterior'],
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
// Atlas-based questions for sections 2.2–2.20, printed pages 156–283.
// The question text paraphrases the atlas and keeps its Russian/English muscle names.
 {topic:"origins",text:"Откуда начинается малая ромбовидная мышца?",textEn:"Where does rhomboid minor originate?",correct:[2],note:"Малая ромбовидная мышца начинается от нижней части выйной связки и остистых отростков C7–T1.",noteEn:"Rhomboid minor originates from the lower nuchal ligament and the spinous processes of C7–T1."},
 {topic:"insertions",text:"Куда прикрепляется малая ромбовидная мышца?",textEn:"Where does rhomboid minor attach?",correct:[2],note:"Она прикрепляется к медиальному краю лопатки на уровне корня ости.",noteEn:"It attaches to the medial border of the scapula at the level of the spine root."},
 {topic:"functions",text:"Какое движение лопатки выполняет малая ромбовидная мышца совместно с большой ромбовидной?",textEn:"Which scapular movement does rhomboid minor perform with rhomboid major?",correct:[2],note:"Ромбовидные мышцы смещают лопатку краниально и медиально, то есть участвуют в её подъёме и приведении.",noteEn:"The rhomboids move the scapula cranially and medially, contributing to elevation and retraction."},
 {topic:"functions",text:"Какая группа мышц в атласе включает большую грудную, переднюю часть дельтовидной и клювовидно-плечевую мышцы как сгибатели плеча?",textEn:"Which muscles does the atlas include among shoulder flexors?",correct:[5],note:"В тестах на сгибание плеча участвуют, среди прочих, ключичная часть большой грудной, передняя часть дельтовидной и клювовидно-плечевая мышцы. Длинная головка бицепса также участвует в сгибании плеча.",noteEn:"Shoulder flexion tests include, among others, the clavicular part of pectoralis major, anterior deltoid, and coracobrachialis. The long head of biceps also contributes to shoulder flexion."},
 {topic:"functions",text:"Какие мышцы атлас относит к экстензорам плеча?",textEn:"Which muscles does the atlas group as shoulder extensors?",correct:[8],note:"К экстензорам плеча относятся широчайшая мышца спины, большая круглая, задняя часть дельтовидной и длинная головка трёхглавой мышцы плеча.",noteEn:"Shoulder extensors include latissimus dorsi, teres major, posterior deltoid, and the long head of triceps brachii."},
 {topic:'functions',text:'Какие мышцы участвуют в разгибании плеча согласно разделу атласа об экстензорах?',textEn:'Which muscles contribute to shoulder extension in the atlas section on extensors?',correct:[8,9,7,15],note:'Атлас относит к экстензорам широчайшую мышцу спины, большую круглую, заднюю часть дельтовидной и длинную головку трёхглавой мышцы плеча.',noteEn:'The atlas groups latissimus dorsi, teres major, posterior deltoid, and the long head of triceps brachii as shoulder extensors.'},
 {topic:"origins",text:"Какая мышца начинается от затылочной кости, выйной связки и остистых отростков шейных позвонков?",textEn:"Which muscle originates from the occipital bone, nuchal ligament, and cervical spinous processes?",correct:[0],note:"Нисходящая часть трапециевидной мышцы начинается от наружного затылочного выступа, верхней выйной линии, выйной связки и верхних шейных остистых отростков.",noteEn:"The descending part of trapezius originates from the external occipital protuberance, superior nuchal line, nuchal ligament, and upper cervical spinous processes."},
 {topic:"insertions",text:"Куда прикрепляется трапециевидная мышца?",textEn:"Where does the trapezius attach?",correct:[0],note:"Её части прикрепляются к латеральной трети ключицы, акромиону и ости лопатки.",noteEn:"The clavicular and sternocostal parts attach to the crest of the greater tubercle and the intertubercular sulcus. The abdominal part attaches to the crest of the lesser tubercle."},
 {topic:"functions",text:"Какая мышца поднимает и вращает лопатку вверх, а её средняя часть участвует в ретракции?",textEn:"Which muscle elevates and upwardly rotates the scapula, while its middle part contributes to retraction?",correct:[0],note:"Эти действия выполняют разные части трапециевидной мышцы.",noteEn:"Different parts of the trapezius perform these actions."},
 {topic:"origins",text:"Какая мышца начинается от медиальной половины ключицы, грудины и хрящей верхних рёбер?",textEn:"Which muscle originates from the medial clavicle, sternum, and upper costal cartilages?",correct:[5],note:"Это места начала большой грудной мышцы, включая её ключичную, грудино-рёберную и брюшную части.",noteEn:"These are the origins of pectoralis major, including its clavicular, sternocostal, and abdominal parts."},
 {topic:"insertions",text:"Куда прикрепляются ключичная и грудино-рёберная порции большой грудной мышцы?",textEn:"Where do the clavicular and sternocostal parts of pectoralis major attach?",correct:[5],note:"К гребню большого бугорка плечевой кости и межбугорковой борозде. Брюшная порция прикрепляется к гребню малого бугорка.",noteEn:"The clavicular and sternocostal parts attach to the crest of the greater tubercle and intertubercular sulcus. The abdominal part attaches to the crest of the lesser tubercle."},
 {topic:"functions",text:"Какая мышца приводит и внутренне вращает плечо, а также участвует в сгибании плеча?",textEn:"Which muscle adducts and internally rotates the arm and also contributes to shoulder flexion?",correct:[5],note:"Это основные действия большой грудной мышцы в плечевом суставе.",noteEn:"These are principal actions of pectoralis major at the shoulder."},
 {topic:"origins",text:"Какая мышца начинается от передней поверхности III–V рёбер и прикрепляется к клювовидному отростку лопатки?",textEn:"Which muscle originates from the anterior surfaces of ribs 3–5 and attaches to the coracoid process of the scapula?",correct:[6],note:"Это малая грудная мышца.",noteEn:"This is pectoralis minor."},
 {topic:"functions",text:"Какая мышца смещает лопатку каудально и способствует её отведению (абдукции)?",textEn:"Which muscle draws the scapula caudally and contributes to scapular abduction?",correct:[6],note:"Это действия малой грудной мышцы, перечисленные в атласе.",noteEn:"This is an action of pectoralis minor."},
 {topic:"origins",text:"От каких позвонков начинаются большая и малая ромбовидные мышцы?",textEn:"From which vertebrae do the rhomboid major and minor originate?",correct:[1],note:"Большая ромбовидная начинается от верхних грудных остистых отростков, малая — от нижней выйной связки и остистых отростков C7–T1.",noteEn:"Rhomboid major originates from upper thoracic spinous processes. Rhomboid minor originates from the lower nuchal ligament and C7–T1 spinous processes."},
 {topic:"insertions",text:"К какому краю лопатки прикрепляются ромбовидные мышцы?",textEn:"Which scapular border do the rhomboid muscles attach to?",correct:[1],note:"Большая и малая ромбовидные прикрепляются к медиальному краю лопатки.",noteEn:"Rhomboid major and minor attach to the medial border of the scapula."},
 {topic:"functions",text:"Какую мышцу следует выбрать для ретракции и подъёма лопатки с вращением её нижнего угла медиально?",textEn:"Which muscle should be selected for scapular retraction and elevation with medial rotation of its inferior angle?",correct:[1],note:"Ромбовидные мышцы приближают лопатку к позвоночнику и участвуют в её подъёме и вращении вниз.",noteEn:"The rhomboids move the scapula cranially and medially, contributing to elevation and retraction."},
 {topic:"origins",text:"От каких поперечных отростков шейных позвонков начинается мышца, поднимающая лопатку?",textEn:"From which cervical transverse processes does levator scapulae originate?",correct:[3],note:"Она начинается от задних бугорков поперечных отростков C1–C4.",noteEn:"It originates from the posterior tubercles of the transverse processes of C1–C4."},
 {topic:"insertions",text:"Куда прикрепляется мышца, поднимающая лопатку?",textEn:"Where does levator scapulae attach?",correct:[3],note:"Она прикрепляется к верхнему углу и прилегающему медиальному краю лопатки.",noteEn:"It attaches to the superior angle and adjacent medial border of the scapula."},
 {topic:"functions",text:"Какая мышца поднимает лопатку и помогает вращать её вниз?",textEn:"Which muscle elevates the scapula and assists downward rotation?",correct:[3],note:"Это мышца, поднимающая лопатку.",noteEn:"This is levator scapulae."},
 {topic:"origins",text:"Сколько верхних рёбер охватывает зубцами передняя зубчатая мышца в описании атласа?",textEn:"How many upper ribs does serratus anterior arise from in the atlas description?",correct:[4],note:"Атлас указывает 8–9 зубцов от наружной поверхности I–IX рёбер с вариацией числа зубцов.",noteEn:"The atlas describes 8–9 slips from the outer surfaces of ribs I–IX, with variation in the number of slips."},
 {topic:"insertions",text:"Куда прикрепляется передняя зубчатая мышца?",textEn:"Where does serratus anterior attach?",correct:[4],note:"Она прикрепляется к передней поверхности медиального края и нижнего угла лопатки.",noteEn:"It attaches to the anterior surface of the medial border and inferior angle of the scapula."},
 {topic:"functions",text:"Какая мышца обеспечивает протракцию и верхнюю ротацию лопатки, удерживая её у грудной клетки?",textEn:"Which muscle protracts and upwardly rotates the scapula while holding it against the thorax?",correct:[4],note:"Это функция передней зубчатой мышцы.",noteEn:"This is an action of serratus anterior."},
 {topic:"origins",text:"От какой структуры начинается подключичная мышца?",textEn:"What is the origin of subclavius?",correct:[66],note:"Подключичная мышца начинается от I ребра и его хряща.",noteEn:"Subclavius originates from the first rib and its costal cartilage."},
 {topic:"insertions",text:"Куда прикрепляется подключичная мышца?",textEn:"Where does subclavius attach?",correct:[66],note:"Она прикрепляется к нижней поверхности акромиального конца ключицы.",noteEn:"It attaches to the inferior surface of the acromial end of the clavicle."},
 {topic:"functions",text:"Какая мышца стабилизирует ключицу и смещает её вниз?",textEn:"Which muscle stabilizes the clavicle and draws it downward?",correct:[66],note:"Эти действия выполняет подключичная мышца.",noteEn:"Subclavius performs these actions."},
 {topic:"origins",text:"От какого отростка лопатки начинается клювовидно-плечевая мышца?",textEn:"From which scapular process does coracobrachialis originate?",correct:[65],note:"Она начинается от верхушки клювовидного отростка.",noteEn:"It originates from the tip of the coracoid process."},
 {topic:"insertions",text:"Куда прикрепляется клювовидно-плечевая мышца?",textEn:"Where does coracobrachialis attach?",correct:[65],note:"К средней трети медиальной поверхности плечевой кости.",noteEn:"It attaches to the middle third of the medial humerus."},
 {topic:"functions",text:"Какая мышца сгибает и приводит плечо в плечевом суставе?",textEn:"Which muscle flexes and adducts the arm at the shoulder?",correct:[65],note:"Это клювовидно-плечевая мышца.",noteEn:"This is coracobrachialis."},
 {topic:"origins",text:"В какой ямке лопатки начинается надостная мышца?",textEn:"In which scapular fossa does supraspinatus originate?",correct:[11],note:"Надостная мышца начинается в надостной ямке и от надостной фасции.",noteEn:"Supraspinatus originates from the supraspinous fossa and fascia."},
 {topic:"insertions",text:"Куда прикрепляется надостная мышца?",textEn:"Where does supraspinatus attach?",correct:[11],note:"К верхней фасетке большого бугорка плечевой кости.",noteEn:"It attaches to the superior facet of the greater tubercle of the humerus."},
 {topic:"functions",text:"Какая мышца начинает отведение плеча и стабилизирует головку плечевой кости?",textEn:"Which muscle initiates arm abduction and stabilizes the humeral head?",correct:[11],note:"Это надостная мышца.",noteEn:"This is supraspinatus."},
 {topic:"origins",text:"В какой ямке лопатки начинается подостная мышца?",textEn:"In which scapular fossa does infraspinatus originate?",correct:[12],note:"Подостная мышца начинается в подостной ямке и от подостной фасции.",noteEn:"Infraspinatus originates from the infraspinous fossa and fascia."},
 {topic:"insertions",text:"Куда прикрепляется подостная мышца?",textEn:"Where does infraspinatus attach?",correct:[12],note:"К средней фасетке большого бугорка плечевой кости.",noteEn:"It attaches to the middle facet of the greater tubercle of the humerus."},
 {topic:"functions",text:"Какая мышца выполняет наружную ротацию плеча и стабилизирует его головку?",textEn:"Which muscle externally rotates the arm and stabilizes the humeral head?",correct:[12],note:"Это подостная мышца.",noteEn:"This is infraspinatus."},
 {topic:"origins",text:"В какой ямке лопатки начинается подлопаточная мышца?",textEn:"In which scapular fossa does subscapularis originate?",correct:[13],note:"Подлопаточная мышца начинается в подлопаточной ямке.",noteEn:"Subscapularis originates from the subscapular fossa."},
 {topic:"insertions",text:"Куда прикрепляется подлопаточная мышца?",textEn:"Where does subscapularis attach?",correct:[13],note:"К малому бугорку плечевой кости.",noteEn:"It attaches to the lesser tubercle of the humerus."},
 {topic:"functions",text:"Какая мышца внутренне вращает плечо и стабилизирует головку плечевой кости?",textEn:"Which muscle internally rotates the arm and stabilizes the humeral head?",correct:[13],note:"Это подлопаточная мышца.",noteEn:"This is subscapularis."},
 {topic:"origins",text:"От какого бугорка лопатки начинается длинная головка двуглавой мышцы плеча?",textEn:"From which scapular tubercle does the long head of biceps brachii originate?",correct:[14],note:"От надсуставного бугорка лопатки.",noteEn:"From the supraglenoid tubercle of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется двуглавая мышца плеча?",textEn:"Where does biceps brachii attach?",correct:[14],note:"К бугристости лучевой кости и через апоневроз к фасции предплечья.",noteEn:"To the radial tuberosity and, through its aponeurosis, to the forearm fascia."},
 {topic:"functions",text:"Какие основные действия выполняет двуглавая мышца плеча в локтевом суставе?",textEn:"What are the main actions of biceps brachii at the elbow?",correct:[14],note:"Сгибание в локтевом суставе и супинация предплечья.",noteEn:"Elbow flexion and forearm supination."},
 {topic:"origins",text:"От какого бугорка лопатки начинается длинная головка трёхглавой мышцы плеча?",textEn:"From which scapular tubercle does the long head of triceps brachii originate?",correct:[15],note:"От подсуставного бугорка лопатки.",noteEn:"From the infraglenoid tubercle of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется трёхглавая мышца плеча?",textEn:"Where does triceps brachii attach?",correct:[15],note:"Общее сухожилие прикрепляется к локтевому отростку локтевой кости.",noteEn:"Its common tendon attaches to the olecranon of the ulna."},
 {topic:"functions",text:"Какое основное действие выполняет трёхглавая мышца плеча в локтевом суставе?",textEn:"What is the main action of triceps brachii at the elbow?",correct:[15],note:"Разгибание предплечья в локтевом суставе.",noteEn:"Extension of the forearm at the elbow."},
 {topic:"origins",text:"К каким костным ориентирам прикрепляются три части дельтовидной мышцы в области плечевого пояса?",textEn:"Which shoulder-girdle landmarks give origin to the three parts of deltoid?",correct:[7],note:"К латеральной трети ключицы, акромиону и ости лопатки.",noteEn:"The lateral third of the clavicle, acromion, and spine of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется дельтовидная мышца на плечевой кости?",textEn:"Where does deltoid attach on the humerus?",correct:[7],note:"К дельтовидной бугристости плечевой кости.",noteEn:"To the deltoid tuberosity of the humerus."},
 {topic:"functions",text:"Какая мышца преимущественно отводит плечо, а её передняя и задняя части помогают сгибанию и разгибанию?",textEn:"Which muscle primarily abducts the arm, with anterior and posterior parts assisting flexion and extension?",correct:[7],note:"Это дельтовидная мышца.",noteEn:"This is deltoid."},
 {topic:"origins",text:"От каких частей лопатки начинается большая круглая мышца?",textEn:"From which parts of the scapula does teres major originate?",correct:[9],note:"От задней поверхности нижнего угла лопатки и прилегающей части латерального края.",noteEn:"From the posterior surface of the inferior angle and adjacent lateral border of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется большая круглая мышца?",textEn:"Where does teres major attach?",correct:[9],note:"К гребню малого бугорка плечевой кости.",noteEn:"To the crest of the lesser tubercle of the humerus."},
 {topic:"functions",text:"Какая мышца разгибает, приводит и внутренне вращает плечевую кость?",textEn:"Which muscle extends, adducts, and internally rotates the humerus?",correct:[9],note:"Это большая круглая мышца.",noteEn:"This is teres major."},
 {topic:"origins",text:"От какого участка лопатки начинается малая круглая мышца?",textEn:"From which scapular region does teres minor originate?",correct:[10],note:"От верхних двух третей латерального края лопатки.",noteEn:"From the upper two thirds of the lateral border of the scapula."},
 {topic:"insertions",text:"К какой части большого бугорка прикрепляется малая круглая мышца?",textEn:"To which part of the greater tubercle does teres minor attach?",correct:[10],note:"К нижней части большого бугорка, ниже места прикрепления подостной мышцы.",noteEn:"To the inferior part of the greater tubercle, below the infraspinatus attachment."},
 {topic:"functions",text:"Какое основное вращательное действие выполняет малая круглая мышца?",textEn:"What is the principal rotational action of teres minor?",correct:[10],note:"Наружная ротация плечевой кости.",noteEn:"External rotation of the humerus."},
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
// Reclassify existing attachment-bank items whose wording asks for an origin.
for(const question of anatomyQuestions){
 if(question.topic==='attachments'&&/начинается|начинаются/.test(question.text||''))question.topic='origins';
}
const legacyQuestionOffset=anatomyQuestions.filter(question=>question.textEn).length;
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
  if(language()==='en')return q.textEn||englishQuestionTexts[anatomyQuestions.indexOf(q)-legacyQuestionOffset]||q.text||'Identify the muscle.';
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
  for(const [v,ru,en] of [['all','Все вопросы','All questions'],['relations','Синергисты и антагонисты','Synergists and antagonists'],['origins','Начало мышцы','Muscle origins'],['attachments','Прикрепление мышцы','Muscle insertions'],['functions','Функции мышц','Muscle functions']]){const o=el('option','',english?en:ru);o.value=v;categories.append(o);}
  categories.value=topic;categories.onchange=()=>{topic=categories.value;reset();draw();};settings.append(categories);
  const difficulty=el('select','muscle-dropdown');difficulty.setAttribute('aria-label','Сложность');
  for(const [v,ru,en] of [['easy','Начальный: 4 варианта','Beginner: 4 choices'],['medium','Средний: 6 вариантов','Intermediate: 6 choices'],['expert','Эксперт: все '+muscleNames.length+' мышц','Expert: all '+muscleNames.length+' muscles']]){const o=el('option','',english?en:ru);o.value=v;difficulty.append(o);}
  difficulty.value=level;difficulty.onchange=()=>{level=difficulty.value;checked.clear();answered=false;draw();};settings.append(difficulty);
  const details=el('details','muscle-diagnostics');details.append(el('summary','',english?'Model details':'Информация о модели'));
  const modelInfo=el('p','muscle-note',info);modelInfo.id='ecorcheInfo';details.append(modelInfo);
  details.append(el('p','muscle-note',(english?'Sample GLB object names: ':'Примеры названий объектов GLB: ')+(model.getNameSamples?.(8).join(' | ')||(english?'not available yet':'пока недоступны'))));
  const pickedInfo=el('p','muscle-note',meshInfo);pickedInfo.id='meshInfo';details.append(pickedInfo);
  const mapper=el('div','muscle-mapping-tools');
  const mappingLabel=el('p','muscle-note',english?'Manual GLB mapping: select a 3D object, then associate it with an anatomical muscle. Stored in this browser.':'Сопоставление GLB: выберите объект на 3D-модели, затем укажите мышцу. Связь сохраняется в этом браузере.');mapper.append(mappingLabel);
  const mapSelect=el('select','muscle-dropdown');mapSelect.id='muscleMapTarget';
  for(let i=0;i<muscleNames.length;i++){const opt=el('option','',english?muscleNames[i][1]:muscleNames[i][0]+' / '+muscleNames[i][1]);opt.value=String(i);mapSelect.append(opt);}mapper.append(mapSelect);
  const mapButton=el('button','',english?'Associate selected object':'Связать выбранный объект');mapButton.onclick=()=>{const picked=model.getPicked?.();if(!picked){mappingLabel.textContent=english?'First tap a 3D object.':'Сначала выберите объект на 3D-модели.';return;}const name=muscleNames[Number(mapSelect.value)][1];model.mapSelected?.(name);mappingLabel.textContent=(english?'Saved mapping: ':'Связь сохранена: ')+name+' ← '+(model.getPickedPath?.()||picked.name);};mapper.append(mapButton);
  const mappingCount=el('p','muscle-note',(english?'Saved mappings: ':'Сохранено связей: ')+(model.getMappingCount?.()||0));mapper.append(mappingCount);
  details.append(mapper);section.append(details);
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
   result.textContent=(correct?'✓ ':'✗ ')+(english?q.noteEn||englishNotes[anatomyQuestions.indexOf(q)-legacyQuestionOffset]||q.note:q.note);
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
 model.setOnPick(mesh=>{meshInfo='GLB: '+(model.getPickedPath?.()||mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
