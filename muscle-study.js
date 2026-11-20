Warning: truncated output (original token count: 33267)
Total output lines: 680

import {muscleChoiceAdditions, anatomyQuestionAdditions} from './muscle-question-bank-7-12.js?v=29501';
import {muscleDescriptions, buildMuscleDescriptionFromQuiz} from './data/muscle-descriptions.js?v=29503';
// Training list is independent of the GLB mesh names.
// Associations with model parts are not assumed without checking source metadata.
export const muscleNames=[
 ['Трапециевидная мышца','Trapezius'],['Большая ромбовидная мышца','Rhomboid major'],['Малая ромбовидная мышца','Rhomboid minor'],
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
 ['Прямая мышца живота','Rectus abdominis'],['Наружная косая мышца живота','External oblique'],
 ['Внутренняя косая мышца живота','Internal oblique'],['Поперечная мышца живота','Transversus abdominis'],
 ['Мышца, выпрямляющая позвоночник','Erector spinae'],['Многораздельная','Multifidus'],
 ['Большая ягодичная мышца','Gluteus maximus'],['Средняя ягодичная мышца','Gluteus medius'],
 ['Малая ягодичная мышца','Gluteus minimus'],['Грушевидная мышца','Piriformis'],
 ['Подвздошно-поясничная','Iliopsoas'],['Напрягатель широкой фасции','Tensor fasciae latae'],
 ['Прямая мышца бедра','Rectus femoris'],['Латеральная широкая мышца бедра','Vastus lateralis'],
 ['Медиальная широкая мышца бедра','Vastus medialis'],['Промежуточная широкая мышца бедра','Vastus intermedius'],
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
 ['Передняя лестничная мышца','Anterior scalene'],
 ['Длинная мышца шеи','Longus colli'],
 ['Клювовидно-плечевая','Coracobrachialis'],
 ['Подключичная','Subclavius'],
 // Additional muscles named in atlas sections 2.24–2.52.
 ['Длинная мышца головы','Longus capitis'],['Средняя лестничная мышца','Middle scalene'],
 ['Задняя лестничная мышца','Posterior scalene'],['Большая задняя прямая мышца головы','Rectus capitis posterior major'],
 ['Малая задняя прямая мышца головы','Rectus capitis posterior minor'],['Верхняя косая мышца головы','Obliquus capitis superior'],
 ['Нижняя косая мышца головы','Obliquus capitis inferior'],['Ременная мышца головы','Splenius capitis'],
 ['Ременная мышца шеи','Splenius cervicis'],['Полуостистая мышца шеи','Semispinalis cervicis'],
 ['Полуостистая мышца головы','Semispinalis capitis'],['Мышца, поднимающая задний проход','Levator ani'],
 ['Лобково-копчиковая','Pubococcygeus'],['Лобково-прямокишечная','Puborectalis'],
 ['Подвздошно-копчиковая','Iliococcygeus'],['Лобково-влагалищная','Pubovaginalis'],
 ['Лобково-предстательная','Puboprostaticus'],['Седалищно-копчиковая','Coccygeus'],
 ['Наружный сфинктер заднего прохода','External anal sphincter'],
 ['Глубокая поперечная мышца промежности','Deep transverse perineal'],
 ['Поверхностная поперечная мышца промежности','Superficial transverse perineal'],
 ['Седалищно-пещеристая','Ischiocavernosus'],['Луковично-губчатая','Bulbospongiosus'],
 ['Сфинктер мочеиспускательного канала','External urethral sphincter'],
 ['Короткий разгибатель большого пальца стопы','Extensor hallucis brevis'],
 ['Короткая приводящая мышца','Adductor brevis'],
 ['Передняя прямая мышца головы','Rectus capitis anterior'],
 ['Латеральная прямая мышца головы','Rectus capitis lateralis']
];
// Small initial validated question bank. Each relationship refers to one action.
export const questions=[
 {focus:0,kind:'synergists',movement:'Приведение (ретракция) лопатки',correct:[1,2],note:'При ретракции лопатки ромбовидные мышцы действуют совместно со средними пучками трапециевидной мышцы.'},
 {focus:0,kind:'antagonists',movement:'Приведение (ретракция) лопатки',correct:[4],note:'Передняя зубчатая мышца участвует в протракции лопатки, противоположной ретракции.'},
 {focus:0,kind:'synergists',movement:'Подъём лопатки',textEn:"Which muscle assists the trapezius in elevating the scapula?",correct:[3],note:'Мышца, поднимающая лопатку, содействует верхним пучкам трапециевидной мышцы при подъёме лопатки.',noteEn:"Levator scapulae assists the upper fibers of the trapezius in elevating the scapula."},
];
// Questions are scoped to a precise movement or attachment landmark.
const anatomyQuestions=[
// Atlas-based questions for sections 2.2–2.20, printed pages 156–283.
// The question text paraphrases the atlas and keeps its Russian/English muscle names.
 {topic:"origins",text:"Откуда начинается малая ромбовидная мышца?",textEn:"Where does rhomboid minor originate?",correct:[2],note:"Малая ромбовидная мышца начинается от нижней части выйной связки и остистых отростков C7–T1.",noteEn:"Rhomboid minor originates from the lower nuchal ligament and the spinous processes of C7–T1."},
 {topic:"insertions",text:"Куда прикрепляется малая ромбовидная мышца?",textEn:"Where does rhomboid minor attach?",correct:[2],note:"Она прикрепляется к медиальному краю лопатки на уровне корня ости.",noteEn:"It attaches to the medial border of the scapula at the level of the spine root."},
 {topic:"functions",text:"Какое движение лопатки выполняет малая ромбовидная мышца совместно с большой ромбовидной?",textEn:"Which scapular movement does rhomboid minor perform with rhomboid major?",correct:[2],note:"Ромбовидные мышцы смещают лопатку краниально и медиально, то есть участвуют в её подъёме и приведении.",noteEn:"The rhomboids move the scapula cranially and medially, contributing to elevation and retraction."},
 {topic:"functions",text:"Какая группа мышц в атласе включает большую грудную, переднюю часть дельтовидной и клювовидно-плечевую мышцы как сгибатели плеча?",textEn:"Which muscles does the atlas include among shoulder flexors?",correct:[5,7,65,14],note:"В тестах на сгибание плеча участвуют, среди прочих, ключичная часть большой грудной, передняя часть дельтовидной и клювовидно-плечевая мышцы. Длинная головка бицепса также участвует в сгибании плеча.",noteEn:"Shoulder flexion tests include, among others, the clavicular part of pectoralis major, anterior deltoid, and coracobrachialis. The long head of biceps also contributes to shoulder flexion."},
 {topic:"functions",text:"Какие мышцы атлас относит к экстензорам плеча?",textEn:"Which muscles does the atlas group as shoulder extensors?",correct:[8,9,7,50],note:"К экстензорам плеча относятся широчайшая мышца спины, большая круглая, задняя часть дельтовидной и длинная головка трёхглавой мышцы плеча.",noteEn:"Shoulder extensors include latissimus dorsi, teres major, posterior deltoid, and the long head of triceps brachii."},
 {topic:'functions',text:'Какие мышцы участвуют в разгибании плеча согласно разделу атласа об экстензорах?',textEn:'Which muscles contribute to shoulder extension in the atlas section on extensors?',correct:[8,9,7,50],note:'Атлас относит к экстензорам широчайшую мышцу спины, большую круглую, заднюю часть дельтовидной и длинную головку трёхглавой мышцы плеча.',noteEn:'The atlas groups latissimus dorsi, teres major, posterior deltoid, and the long head of triceps brachii as shoulder extensors.'},
 {topic:"origins",text:"Какая мышца начинается от затылочной кости, выйной связки и остистых отростков шейных позвонков?",textEn:"Which muscle originates from the occipital bone, nuchal ligament, and cervical spinous processes?",correct:[0],note:"Нисходящая часть трапециевидной мышцы начинается от наружного затылочного выступа, верхней выйной линии, выйной связки и верхних шейных остистых отростков.",noteEn:"The descending part of trapezius originates from the external occipital protuberance, superior nuchal line, nuchal ligament, and upper cervical spinous processes."},
 {topic:"insertions",text:"Куда прикрепляется трапециевидная мышца?",textEn:"Where does the trapezius attach?",correct:[0],note:"Её части прикрепляются к латеральной трети ключицы, акромиону и ости лопатки.",noteEn:"The clavicular and sternocostal parts attach to the crest of the greater tubercle and the intertubercular sulcus. The abdominal part attaches to the crest of the lesser tubercle."},
 {topic:"functions",text:"Какая мышца поднимает и вращает лопатку вверх, а её средняя часть участвует в ретракции?",textEn:"Which muscle elevates and upwardly rotates the scapula, while its middle part contributes to retraction?",correct:[0],note:"Эти действия выполняют разные части трапециевидной мышцы.",noteEn:"Different parts of the trapezius perform these actions."},
 {topic:"origins",text:"Какая мышца начинается от медиальной половины ключицы, грудины и хрящей верхних рёбер?",textEn:"Which muscle originates from the medial clavicle, sternum, and upper costal cartilages?",correct:[5],note:"Это места начала большой грудной мышцы, включая её ключичную, грудино-рёберную и брюшную части.",noteEn:"These are the origins of pectoralis major, including its clavicular, sternocostal, and abdominal parts."},
 {topic:"insertions",text:"Куда прикрепляются ключичная и грудино-рёберная порции большой грудной мышцы?",textEn:"Where do the clavicular and sternocostal parts of pectoralis major attach?",correct:[5],note:"К гребню большого бугорка плечевой кости и межбугорковой борозде. Брюшная порция прикрепляется к гребню малого бугорка.",noteEn:"The clavicular and sternocostal parts attach to the crest of the greater tubercle and intertubercular sulcus. The abdominal part attaches to the crest of the lesser tubercle."},
 {topic:"functions",text:"Какая мышца приводит и внутренне вращает плечо, а также участвует в сгибании плеча?",textEn:"Which muscle adducts and internally rotates the arm and also contributes to shoulder flexion?",correct:[5],note:"Это основные действия большой грудной мышцы в плечевом суставе.",noteEn:"These are principal actions of pectoralis major at the shoulder."},
 {topic:"origins",text:"Какая мышца начинается от передней поверхности III–V рёбер и прикрепляется к клювовидному отростку лопатки?",textEn:"Which muscle originates from the anterior surfaces of ribs 3–5 and attaches to the coracoid process of the scapula?",correct:[6],note:"Это малая грудная мышца.",noteEn:"This is pectoralis minor."},
 {topic:"functions",text:"Какая мышца смещает лопатку каудально и способствует её отведению (абдукции)?",textEn:"Which muscle draws the scapula caudally and contributes to scapular abduction?",correct:[6],note:"Это действия малой грудной мышцы, перечисленные в атласе.",noteEn:"This is an action of pectoralis minor."},
 {topic:"origins",text:"От каких позвонков начинаются большая и малая ромбовидные мышцы?",textEn:"From which vertebrae do the rhomboid major and minor originate?",correct:[1],note:"Большая ромбовидная начинается от верхних грудных остистых отростков, малая — от нижней выйной связки и остистых отростков C7–T1.",noteEn:"Rhomboid major originates from upper thoracic spinous processes. Rhomboid minor originates from the lower nuchal ligament and C7–T1 spinous processes."},
 {topic:"insertions",text:"Какие мышцы прикрепляются к медиальному краю лопатки?",textEn:"Which muscles attach to the medial border of the scapula?",correct:[1,2],note:"Большая и малая ромбовидные прикрепляются к медиальному краю лопатки.",noteEn:"Rhomboid major and minor attach to the medial border of the scapula."},
 {topic:"functions",text:"Какую мышцу следует выбрать для ретракции и подъёма лопатки с вращением её нижнего угла медиально?",textEn:"Which muscle should be selected for scapular retraction and elevation with medial rotation of its inferior angle?",correct:[1],note:"Ромбовидные мышцы приближают лопатку к позвоночнику и участвуют в её подъёме и вращении вниз.",noteEn:"The rhomboids move the scapula cranially and medially, contributing to elevation and retraction."},
 {topic:"origins",text:"От каких поперечных отростков шейных позвонков начинается мышца, поднимающая лопатку?",textEn:"From which cervical transverse processes does levator scapulae originate?",correct:[3],note:"Она начинается от задних бугорков поперечных отростков C1–C4.",noteEn:"It originates from the posterior tubercles of the transverse processes of C1–C4."},
 {topic:"insertions",text:"Куда прикрепляется мышца, поднимающая лопатку?",textEn:"Where does levator scapulae attach?",correct:[3],note:"Она прикрепляется к верхнему углу и прилегающему медиальному краю лопатки.",noteEn:"It attaches to the superior angle and adjacent medial border of the scapula."},
 {topic:"functions",text:"Какая мышца поднимает лопатку и помогает вращать её вниз?",textEn:"Which muscle elevates the scapula and assists downward rotation?",correct:[3],note:"Это мышца, поднимающая лопатку.",noteEn:"This is levator scapulae."},
 {topic:"origins",text:"Какая мышца начинается от наружных поверхностей I–IX рёбер, образуя обычно 8–9 зубцов?",textEn:"Which muscle originates by usually 8–9 slips from the outer surfaces of ribs I–IX?",correct:[4],note:"Передняя зубчатая мышца начинается от наружных поверхностей I–IX рёбер; число зубцов обычно составляет 8–9 и может варьировать.",noteEn:"Serratus anterior originates by slips from the outer surfaces of ribs I–IX; the number is usually 8–9 and can vary."},
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
 {topic:"origins",text:"От какого бугорка лопатки начинается длинная головка трёхглавой мышцы плеча?",textEn:"From which scapular tubercle does the long head of triceps brachii originate?",correct:[50],note:"От подсуставного бугорка лопатки.",noteEn:"From the infraglenoid tubercle of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется трёхглавая мышца плеча?",textEn:"Where does triceps brachii attach?",correct:[15],note:"Общее сухожилие прикрепляется к локтевому отростку локтевой кости.",noteEn:"Its common tendon attaches to the olecranon of the ulna."},
 {topic:"functions",text:"Какое основное действие выполняет трёхглавая мышца плеча в локтевом суставе?",textEn:"What is the main action of triceps brachii at the elbow?",correct:[15],note:"Разгибание предплечья в локтевом суставе.",noteEn:"Extension of the forearm at the elbow."},
 {topic:"origins",text:"Какая мышца начинается от латеральной трети ключицы, акромиона и ости лопатки?",textEn:"Which muscle originates from the lateral third of the clavicle, the acromion, and the spine of the scapula?",correct:[7],note:"Это места начала дельтовидной мышцы: ключичная часть начинается от латеральной трети ключицы, акромиальная — от акромиона, а остистая — от ости лопатки.",noteEn:"These are the origins of the deltoid: its clavicular part arises from the lateral third of the clavicle, the acromial part from the acromion, and the spinal part from the scapular spine."},
 {topic:"insertions",text:"Куда прикрепляется дельтовидная мышца на плечевой кости?",textEn:"Where does deltoid attach on the humerus?",correct:[7],note:"К дельтовидной бугристости плечевой кости.",noteEn:"To the deltoid tuberosity of the humerus."},
 {topic:"functions",text:"Какая мышца преимущественно отводит плечо, а её передняя и задняя части помогают сгибанию и разгибанию?",textEn:"Which muscle primarily abducts the arm, with anterior and posterior parts assisting flexion and extension?",correct:[7],note:"Это дельтовидная мышца.",noteEn:"This is deltoid."},
 {topic:"origins",text:"От каких частей лопатки начинается большая круглая мышца?",textEn:"From which parts of the scapula does teres major originate?",correct:[9],note:"От задней поверхности нижнего угла лопатки и прилегающей части латерального края.",noteEn:"From the posterior surface of the inferior angle and adjacent lateral border of the scapula."},
 {topic:"insertions",text:"Куда прикрепляется большая круглая мышца?",textEn:"Where does teres major attach?",correct:[9],note:"К гребню малого бугорка плечевой кости.",noteEn:"To the crest of the lesser tubercle of the humerus."},
 {topic:"functions",text:"Какие мышцы разгибают, приводят и внутренне вращают плечевую кость?",textEn:"Which muscles extend, adduct, and internally rotate the humerus?",correct:[9],note:"Широчайшая мышца спины и большая круглая мышца разгибают, приводят и внутренне вращают плечевую кость.",noteEn:"Latissimus dorsi and teres major extend, adduct, and internally rotate the humerus."},
 {topic:"origins",text:"От какого участка лопатки начинается малая круглая мышца?",textEn:"From which scapular region does teres minor originate?",correct:[10],note:"От верхних двух третей латерального края лопатки.",noteEn:"From the upper two thirds of the lateral border of the scapula."},
 {topic:"insertions",text:"К какой части большого бугорка прикрепляется малая круглая мышца?",textEn:"To which part of the greater tubercle does teres minor attach?",correct:[10],note:"К нижней части большого бугорка, ниже места прикрепления подостной мышцы.",noteEn:"To the inferior part of the greater tubercle, below the infraspinatus attachment."},
 {topic:"functions",text:"Какое основное вращательное действие выполняет малая круглая мышца?",textEn:"What is the principal rotational action of teres minor?",correct:[10],note:"Наружная ротация плечевой кости.",noteEn:"External rotation of the humerus."},
 {topic:'relations',kind:'synergists',focus:0,movement:'Ретракция лопатки',textEn:"Which muscles assist the trapezius during scapular retraction?",correct:[1,2],note:'Ромбовидные мышцы участвуют в ретракции лопатки вместе со средними пучками трапециевидной мышцы.',noteEn:"The rhomboid major and minor assist the middle fibers of the trapezius in retracting the scapula."},
 {topic:'relations',kind:'antagonists',focus:0,movement:'Ретракция лопатки',textEn:"Which muscle protracts the scapula, opposing the trapezius during retraction?",correct:[4],note:'Передняя зубчатая мышца способствует протракции лопатки.',noteEn:"Serratus anterior protracts the scapula, opposing retraction."},
 {topic:'relations',kind:'synergists',focus:0,movement:'Подъём лопатки',textEn:'Which muscle assists the trapezius in elevating the scapula?',correct:[3],note:'Мышца, поднимающая лопатку, содействует верхним пучкам трапециевидной мышцы.',noteEn:'Levator scapulae assists the upper fibers of the trapezius in elevating the scapula.'},
 {topic:'attachments',text:'Какая мышца начинается в надостной ямке лопатки?',textEn:"Which muscle originates in the supraspinous fossa of the scapula?",correct:[11],note:'Надостная мышца начинается в надостной ямке лопатки.',noteEn:"Supraspinatus originates in the supraspinous fossa of the scapula."},
 {topic:'attachments',text:'Какая мышца начинается в подостной ямке лопатки?',textEn:"Which muscle originates in the infraspinous fossa of the scapula?",correct:[12],note:'Подостная мышца начинается в подостной ямке лопатки.',noteEn:"Infraspinatus originates in the infraspinous fossa of the scapula."},
 {topic:'attachments',text:'Какая мышца прикрепляется к малому бугорку плечевой кости?',textEn:"Which muscle attaches to the lesser tubercle of the humerus?",correct:[13],note:'Подлопаточная мышца прикрепляется к малому бугорку плечевой кости.',noteEn:"Subscapularis attaches to the lesser tubercle of the humerus."},
 {topic:'attachments',text:"Какие мышцы прикрепляются к фасеткам большого бугорка плечевой кости?",textEn:"Which muscles attach to the facets of the greater tubercle of the humerus?",correct:[11,12,10],note:'Надостная, подостная и малая круглая мышцы прикрепляются к фасеткам большого бугорка плечевой кости.',noteEn:"Supraspinatus, infraspinatus, and teres minor attach to the facets of the greater tubercle of the humerus."},
 {topic:'functions',text:"Какая мышца является главным пронатором предплечья в дистальном отделе?",textEn:"Which muscle is the principal pronator of the distal forearm?",correct:[19],note:'Квадратный пронатор выполняет пронацию предплечья.',noteEn:"Pronator quadratus is the principal pronator of the distal forearm."},
 {topic:'functions',text:'Какая мышца разгибает локоть?',textEn:"Which muscle extends the elbow?",correct:[15],note:'Трёхглавая мышца плеча выполняет разгибание в локтевом суставе.',noteEn:"Triceps brachii extends the forearm at the elbow."},
 {topic:'attachments',text:"Какая мышца начинается от подсуставного бугорка лопатки?",textEn:"Which muscle originates from the infraglenoid tubercle of the scapula?",correct:[50],note:"Длинная головка трёхглавой мышцы плеча начинается от подсуставного бугорка лопатки.",noteEn:"The long head of triceps brachii originates from the infraglenoid tubercle of the scapula."},
 {topic:'attachments',text:"Какая мышца начинается от надсуставного бугорка лопатки?",textEn:"Which muscle originates from the supraglenoid tubercle of the scapula?",correct:[14],note:"Длинная головка двуглавой мышцы плеча начинается от надсуставного бугорка лопатки.",noteEn:"The long head of biceps brachii originates from the supraglenoid tubercle of the scapula."},
 {topic:'attachments',text:"Какая мышца прикрепляется к дельтовидной бугристости плечевой кости?",textEn:"Which muscle attaches to the deltoid tuberosity of the humerus?",correct:[7],note:"Дельтовидная мышца прикрепляется к дельтовидной бугристости плечевой кости.",noteEn:"Deltoid attaches to the deltoid tuberosity of the humerus."},
 {topic:'attachments',text:"Какая мышца прикрепляется к бугристости лучевой кости?",textEn:"Which muscle attaches to the radial tuberosity?",correct:[14],note:"Двуглавая мышца плеча прикрепляется к бугристости лучевой кости.",noteEn:"Biceps brachii attaches to the radial tuberosity; its aponeurosis blends with the forearm fascia."},
 {topic:'attachments',text:"Какая мышца прикрепляется к локтевому отростку?",textEn:"Which muscle attaches to the olecranon of the ulna?",correct:[15],note:"Трёхглавая мышца плеча прикрепляется к локтевому отростку локтевой кости.",noteEn:"Triceps brachii attaches to the olecranon of the ulna."},
 {topic:'attachments',text:"Какая мышца начинается от латеральной поверхности подвздошной кости и отводит бедро?",textEn:"Which muscle originates from the lateral surface of the ilium and abducts the thigh?",correct:[32],note:"Средняя ягодичная мышца начинается от наружной поверхности подвздошной кости.",noteEn:"Gluteus medius originates from the lateral surface of the ilium and abducts the thigh."},
 {topic:'attachments',text:"Какие мышцы прикрепляются к пяточной кости через общее пяточное сухожилие?",textEn:"Which muscles attach to the calcaneus through the common calcaneal tendon?",correct:[46,47],note:"Икроножная и камбаловидная мышцы прикрепляются к пяточной кости через общее пяточное сухожилие.",noteEn:"Gastrocnemius and soleus attach to the calcaneus through the common calcaneal tendon."},
 {topic:'functions',text:"Какая мышца преимущественно выполняет тыльное сгибание стопы и её инверсию?",textEn:"Which muscle primarily dorsiflexes and inverts the foot?",correct:[48],note:"Передняя большеберцовая мышца участвуе…13267 tokens truncated…y extend the hip and flex the knee; with the knee flexed, biceps femoris laterally rotates the leg, while semitendinosus and semimembranosus medially rotate it.'},
 {topic:'origins',muscles:['Sartorius'],text:'Откуда начинается портняжная мышца?',textEn:'Where does sartorius originate?',note:'От передней верхней подвздошной ости.',noteEn:'From the anterior superior iliac spine.'},
 {topic:'insertions',muscles:['Sartorius'],text:'Куда прикрепляется портняжная мышца?',textEn:'Where does sartorius insert?',note:'К верхней медиальной поверхности большеберцовой кости в составе «гусиной лапки».',noteEn:'To the proximal medial tibia as part of the pes anserinus.'},
 {topic:'functions',muscles:['Sartorius'],text:'Какие движения сочетает портняжная мышца в тазобедренном суставе?',textEn:'Which hip actions does sartorius combine?',note:'Сгибание, отведение и наружное вращение бедра; также сгибает колено.',noteEn:'Hip flexion, abduction, and external rotation; it also flexes the knee.'},
 {topic:'origins',muscles:['Popliteus'],text:'Откуда начинается подколенная мышца?',textEn:'Where does popliteus originate?',note:'От латерального мыщелка бедренной кости и капсулы коленного сустава.',noteEn:'From the lateral femoral condyle and knee-joint capsule.'},
 {topic:'insertions',muscles:['Popliteus'],text:'Куда прикрепляется подколенная мышца?',textEn:'Where does popliteus insert?',note:'К задней поверхности большеберцовой кости выше линии камбаловидной мышцы.',noteEn:'To the posterior tibia above the soleal line.'},
 {topic:'functions',muscles:['Popliteus'],text:'Какую функцию выполняет подколенная мышца в начале сгибания колена?',textEn:'What does popliteus do at the initiation of knee flexion?',note:'«Отпирает» колено, вращая бедро кнаружи при фиксированной голени или голень кнутри при свободной стопе.',noteEn:'It unlocks the knee by laterally rotating the femur on a fixed tibia or medially rotating the free leg.'},
 {topic:'origins',muscles:['Gastrocnemius'],text:'Откуда начинаются головки икроножной мышцы?',textEn:'Where do the heads of gastrocnemius originate?',note:'От медиального и латерального мыщелков бедренной кости.',noteEn:'From the medial and lateral femoral condyles.'},
 {topic:'insertions',muscles:['Gastrocnemius'],text:'Куда прикрепляется икроножная мышца?',textEn:'Where does gastrocnemius insert?',note:'Через пяточное сухожилие к пяточному бугру.',noteEn:'Through the calcaneal tendon to the calcaneal tuberosity.'},
 {topic:'functions',muscles:['Gastrocnemius'],text:'Какие суставы пересекает икроножная мышца и какие движения выполняет?',textEn:'Which joints does gastrocnemius cross, and what actions does it perform?',note:'Пересекает коленный и голеностопный суставы, сгибает колено и выполняет подошвенное сгибание стопы.',noteEn:'It crosses the knee and ankle, flexes the knee, and plantarflexes the foot.'},
 {topic:'origins',muscles:['Tibialis anterior'],text:'Откуда начинается передняя большеберцовая мышца?',textEn:'Where does tibialis anterior originate?',note:'От латерального мыщелка и верхней части латеральной поверхности большеберцовой кости, а также от межкостной перепонки.',noteEn:'From the lateral condyle and upper lateral surface of the tibia and the interosseous membrane.'},
 {topic:'insertions',muscles:['Tibialis anterior'],text:'Куда прикрепляется передняя большеберцовая мышца?',textEn:'Where does tibialis anterior insert?',note:'К медиальной клиновидной кости и основанию I плюсневой кости.',noteEn:'To the medial cuneiform and base of the first metatarsal.'},
 {topic:'functions',muscles:['Tibialis anterior'],text:'Какие движения стопы выполняет передняя большеберцовая мышца?',textEn:'What foot actions does tibialis anterior perform?',note:'Тыльное сгибание и супинацию (инверсию) стопы.',noteEn:'Dorsiflexion and supination (inversion) of the foot.'},
 {topic:'origins',muscles:['Tibialis posterior'],text:'От каких костей начинается задняя большеберцовая мышца?',textEn:'Which bones give origin to tibialis posterior?',note:'От задних поверхностей большеберцовой и малоберцовой костей и межкостной перепонки.',noteEn:'From the posterior surfaces of the tibia and fibula and the interosseous membrane.'},
 {topic:'insertions',muscles:['Tibialis posterior'],text:'К каким костям предплюсны прикрепляется задняя большеберцовая мышца?',textEn:'Which tarsal bones receive tibialis posterior insertions?',note:'Главное прикрепление — бугристость ладьевидной кости; пучки также направляются к клиновидным, кубовидной и основаниям некоторых плюсневых костей.',noteEn:'Its principal insertion is the navicular tuberosity; slips also reach the cuneiforms, cuboid, and bases of some metatarsals.'},
 {topic:'functions',muscles:['Tibialis posterior'],text:'Какие движения выполняет задняя большеберцовая мышца?',textEn:'What actions does tibialis posterior perform?',note:'Подошвенно сгибает и инвертирует стопу, поддерживает медиальный продольный свод.',noteEn:'It plantarflexes and inverts the foot and supports the medial longitudinal arch.'},
 {topic:'insertions',muscles:['Tibialis anterior','Fibularis longus','Fibularis brevis'],text:'Какие мышцы из списка прикрепляются к основанию I или V плюсневой кости?',textEn:'Which of the listed muscles insert on the base of metatarsal I or V?',note:'Передняя большеберцовая и длинная малоберцовая мышцы прикрепляются к основанию I плюсневой кости; короткая малоберцовая — к бугристости основания V плюсневой кости.',noteEn:'Tibialis anterior and fibularis longus insert on the base of metatarsal I; fibularis brevis inserts on the tuberosity at the base of metatarsal V.'},
 {topic:'functions',muscles:['Fibularis longus','Fibularis brevis'],text:'Какие мышцы выполняют эверсию стопы и помогают её подошвенному сгибанию?',textEn:'Which muscles evert the foot and assist plantarflexion?',note:'Длинная и короткая малоберцовые мышцы.',noteEn:'Fibularis longus and fibularis brevis.'},
 {topic:'origins',muscles:['Extensor hallucis longus'],text:'Откуда начинается длинный разгибатель большого пальца стопы?',textEn:'Where does extensor hallucis longus originate?',note:'От средней части передней поверхности малоберцовой кости и межкостной перепонки.',noteEn:'From the middle anterior fibula and interosseous membrane.'},
 {topic:'insertions',muscles:['Extensor hallucis longus'],text:'Куда прикрепляется длинный разгибатель большого пальца стопы?',textEn:'Where does extensor hallucis longus insert?',note:'К основанию дистальной фаланги большого пальца стопы.',noteEn:'To the base of the distal phalanx of the great toe.'},
 {topic:'functions',muscles:['Extensor hallucis longus'],text:'Какое действие выполняет длинный разгибатель большого пальца стопы?',textEn:'What does extensor hallucis longus do?',note:'Разгибает большой палец и помогает тыльному сгибанию стопы.',noteEn:'It extends the great toe and assists ankle dorsiflexion.'},
 {topic:'origins',muscles:['Extensor hallucis brevis'],text:'Откуда начинается короткий разгибатель большого пальца стопы?',textEn:'Where does extensor hallucis brevis originate?',note:'От верхней поверхности пяточной кости и нижнего удерживателя разгибателей.',noteEn:'From the superior surface of the calcaneus and inferior extensor retinaculum.'},
 {topic:'insertions',muscles:['Extensor hallucis brevis'],text:'Куда прикрепляется короткий разгибатель большого пальца стопы?',textEn:'Where does extensor hallucis brevis insert?',note:'К основанию проксимальной фаланги большого пальца.',noteEn:'To the base of the proximal phalanx of the great toe.'},
 {topic:'functions',muscles:['Extensor hallucis brevis'],text:'Какое движение выполняет короткий разгибатель большого пальца стопы?',textEn:'What movement does extensor hallucis brevis perform?',note:'Разгибает большой палец в плюснефаланговом суставе.',noteEn:'It extends the great toe at the metatarsophalangeal joint.'}
];
const legacyQuestionOffset=anatomyQuestions.filter(question=>question.textEn).length;
for(const item of atlasContinuation){
 const correct=item.muscles.map(name=>muscleNames.findIndex(([,english])=>english===name));
 if(correct.some(index=>index<0))throw new Error('Missing muscle choice: '+item.muscles.join(', '));
 anatomyQuestions.push({topic:item.topic,text:item.text,textEn:item.textEn,correct,note:item.note,noteEn:item.noteEn});
}
// Add the checked muscle records and clean, single-topic questions from batches 7–12.
for(const entry of muscleChoiceAdditions){
 if(!muscleNames.some(([,english])=>english===entry[1]))muscleNames.push(entry);
}
for(const item of anatomyQuestionAdditions){
 const correct=item.muscles.map(name=>muscleNames.findIndex(([,english])=>english===name));
 if(correct.some(index=>index<0))throw new Error('Missing supplemental muscle choice: '+item.muscles.join(', '));
 anatomyQuestions.push({topic:item.topic,text:item.text,textEn:item.textEn,correct,note:item.note,noteEn:item.noteEn});
}
// Reclassify existing attachment-bank items whose wording asks for an origin.
for(const question of anatomyQuestions){
 if(question.topic==='attachments')question.topic=/начинается|начинаются/.test(question.text||'')?'origins':'insertions';
}
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
const sourceReviewRequired=question=>/требует(?: редакторской)? сверки|requires (?:editorial )?review/i.test((question.note||'')+' '+(question.noteEn||''));
const escapeRegExp=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function russianMusclePattern(name){
 const words=name.toLowerCase().replace(/[(),]/g,' ').split(/\s+/).filter(Boolean);
 const hasNoun=words.includes('мышца');
 const parts=words.map(word=>{
  if(word==='мышца')return 'мышц[а-яё]*';
  const stem=word.length>5?word.slice(0,-2):word.slice(0,-1);
  return escapeRegExp(stem)+'[а-яё]*';
 });
 let pattern=parts.join('[\s,–-]+');
 if(!hasNoun)pattern+='(?:\s+мышц[а-яё]*)?';
 pattern+='(?=$|[\s,;:.!?])';
 if(!hasNoun)pattern+='(?!\s+(?:ямк|фасц|поверхност|отрост|бугор|кра[йяею]|ребр|кости|кост|лини|сустав|губер|головк|хрящ|фаланг)[а-яё]*)';
 return new RegExp(pattern,'giu');
}
function maskedFact(question,english){
 const index=question._sourceIndex??anatomyQuestions.indexOf(question);
 let fact=english?(question.noteEn||englishNotes[index-legacyQuestionOffset]||question.note||''):(question.note||'');
 for(const muscleIndex of question.correct||[]){
  const name=muscleNames[muscleIndex]?.[english?1:0];
  if(!name)continue;
  const pattern=english?new RegExp('\\b'+escapeRegExp(name)+'\\b','gi'):russianMusclePattern(name);
  fact=fact.replace(pattern,'__________');
 }
 return fact.replace(/\s+/g,' ').replace(/\s+([,.;:])/g,'$1').replace(/([,;])\s*([,;])/g,'$2').trim();
}
function baseQuestionText(question,english){
 const index=question._sourceIndex??anatomyQuestions.indexOf(question);
 let prompt=english?question.textEn||englishQuestionTexts[index-legacyQuestionOffset]||question.text||'Identify the muscle.':question.text||((question.kind==='synergists'?'Какая мышца является синергистом трапециевидной мышцы при движении «':'Какая мышца является антагонистом трапециевидной мышцы при движении «')+question.movement+'»?');
 const asksForMuscle=english?(/\bwhich muscles?\b/i.test(prompt)||/\bwhich part of\b/i.test(prompt)):(/какая мышца|какие мышцы|какая часть мышцы/i.test(prompt));
 const genericDescriptionPrompt=english?/matches? the .*description|according to this description/i.test(prompt):/соответствует описанию|по описанию места/i.test(prompt);
 if(['origins','insertions','attachments','functions'].includes(question.topic)&&(!asksForMuscle||genericDescriptionPrompt)){
  const plural=question.correct.length>1;
  const description=maskedFact(question,english);
  if(question.topic==='functions'){
   const action=description.replace(/^(?:она|эта мышца|they|this muscle|it)\s+/i,'');
   const cleanAction=action.replace(/[.;]+\s*$/,'');
   if(english)prompt=plural?'Which muscles perform these actions: “'+cleanAction+'”?':'Which muscle '+cleanAction.charAt(0).toLowerCase()+cleanAction.slice(1)+'?';
   else prompt=plural?'Какие мышцы выполняют эти действия: «'+cleanAction+'»?':'Какая мышца '+cleanAction.charAt(0).toLowerCase()+cleanAction.slice(1)+'?';
  }else if(question.topic==='origins'&&!english&&/^от\s/i.test(description)){
   const origin=description.replace(/^от\s+/i,'').replace(/[.;]+$/,'');
   prompt=plural?'Какие мышцы начинаются от '+origin+'?':'Какая мышца начинается от '+origin+'?';
  }else if(question.topic==='origins'&&english&&/^from\s/i.test(description)){
   const origin=description.replace(/^from\s+/i,'').replace(/[.;]+$/,'');
   prompt=plural?'Which muscles originate from '+origin+'?':'Which muscle originates from '+origin+'?';
  }else if(['insertions','attachments'].includes(question.topic)){
   let attachment=english
    ?description.replace(/^(?:it|they|the common tendon|its parts)\s+(?:attaches?|inserts?)\s*/i,'')
    :description.replace(/^(?:она|они|её части|ее части|общее сухожилие|сухожилие)\s+прикрепля(?:ется|ются)\s*/i,'');
   attachment=attachment.replace(/^\s*[—–-]\s*/,'').replace(/;\s*[—–-]\s*/g,'; ').replace(/[.;]+\s*$/,'').trim();
   const lower=attachment.charAt(0).toLowerCase()+attachment.slice(1);
   if(english){
    if(/^to\s/i.test(attachment))prompt=plural?'Which muscles attach to these sites: '+attachment.replace(/^to\s+/i,'')+'?':'Which muscle attaches '+lower+'?';
    else if(/^through\s/i.test(attachment))prompt=plural?'Which muscles attach through these structures: '+lower+'?':'Which muscle attaches '+lower+'?';
    else prompt=plural?'Which muscles attach at these sites: '+lower+'?':'Which muscle has its insertion at: '+lower+'?';
   }else{
    if(/^(?:к|ко)\s/i.test(attachment))prompt=plural?'Какие мышцы прикрепляются '+lower+'?':'Какая мышца прикрепляется '+lower+'?';
    else if(/^через\s/i.test(attachment))prompt=plural?'Какие мышцы прикрепляются '+lower+'?':'Какая мышца прикрепляется '+lower+'?';
    else prompt=plural?'Какие мышцы прикрепляются в указанных местах: '+lower+'?':'Какая мышца имеет место прикрепления: '+lower+'?';
   }
  }else if(english)prompt=(plural?'Which muscles have their origins at':'Which muscle has its origin at')+': “'+description.replace(/[.;]+$/,'')+'”?';
  else prompt=(plural?'Какие мышцы имеют начало в указанных местах':'Какая мышца имеет начало в')+': «'+description.replace(/[.;]+$/,'')+'»?';
 }
 return prompt;
}
export function setupMuscleQuiz(container,model,language,onAnswerFocus=()=>{}){
 let answerCount='4',topic='all',testSize='all',order=[],position=0,checked=new Set(),info='',meshInfo='',answered=false,settingsExpanded=false,currentChoices=[];
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 const shuffled=(arr)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const active=()=>{
  const english=language()==='en',unique=[],byPrompt=new Map();
  for(const source of anatomyQuestions){
   if(sourceReviewRequired(source))continue;
   const key=source.topic+'|'+baseQuestionText(source,false).toLocaleLowerCase().replace(/[ё]/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
   const existing=byPrompt.get(key);
   if(existing){
    existing.correct=[...new Set([...existing.correct,...source.correct])];
    for(const field of ['note','noteEn'])if(source[field]&&existing[field]!==source[field])existing[field]=[existing[field],source[field]].filter(Boolean).join(' ');
   }else{
    const item={...source,correct:[...source.correct],_sourceIndex:anatomyQuestions.indexOf(source)};
    byPrompt.set(key,item);unique.push(item);
   }
  }
  return unique.filter(q=>topic==='all'||q.topic===topic);
 };
 function reset(){order=shuffled(active());if(testSize!=='all')order=order.slice(0,Number(testSize));position=0;checked.clear();answered=false;currentChoices=[];}
 reset();
 function bilingualMuscleNames(prompt){
  const words=[...prompt.matchAll(/[\p{L}\p{N}]+/gu)].map(m=>({text:m[0],start:m.index,end:m.index+m[0].length,stem:stem(m[0])}));
  const candidates=muscleNames.map(([ru,en])=>({en,roots:ru.split(/[\s,]+/).map(stem).filter(x=>x&&x!=='мышц')}))
   .sort((a,b)=>b.roots.length-a.roots.length);
  const matches=[];
  for(const candidate of candidates){
   const anchors=candidate.roots;
   for(let i=0;i<words.length;i++){
    if(words[i].stem!==anchors[0])continue;
    const positions=[i];let previous=i;
    for(const anchor of anchors.slice(1)){
     let found=-1;
     for(let j=previous+1;j<Math.min(words.length,previous+3);j++)if(words[j].stem===anchor){found=j;break;}
     if(found<0)break;
     positions.push(found);previous=found;
    }
    if(positions.length!==anchors.length)continue;
    if(anchors.length===1&&!words.some((w,j)=>w.stem==='мышц'&&Math.abs(j-i)<=2))continue;
    const start=words[positions[0]].start,end=words[positions.at(-1)].end;
    if(matches.some(m=>start<m.end&&end>m.start))continue;
    matches.push({start,end,en:candidate.en});
    break;
   }
  }
  for(const match of matches.sort((a,b)=>b.start-a.start))
   prompt=prompt.slice(0,match.end)+' ('+match.en+')'+prompt.slice(match.end);
  return prompt;
 }
 function stem(value){
  let token=value.toLocaleLowerCase().replace(/ё/g,'е');
  for(const ending of ['иями','ями','ами','ого','его','ому','ему','ыми','ими','ая','яя','ое','ее','ые','ие','ый','ий','ой','ую','юю','ых','их','ым','им','ом','ем','ах','ях','ам','ям','ью','а','я','ы','и','у','ю','е','о'])
   if(token.endsWith(ending)&&token.length-ending.length>=3){token=token.slice(0,-ending.length);break;}
  return token;
 }
 function questionText(q){
  const english=language()==='en',bilingual=language()==='both';
  let prompt=baseQuestionText(q,english);
  if(bilingual)prompt=bilingualMuscleNames(prompt);
  if(q.correct.length>1)prompt=(english?'Select all correct options shown. ':'Отметьте все правильные варианты из показанных. ')+prompt;
  return prompt;
 }
 function options(q){
  const all=muscleNames.map((_,i)=>i).filter(i=>i!==q.focus);
  const region=index=>{
   const [ru,en]=muscleNames[index],name=(ru+' '+en).toLocaleLowerCase();
   if(/neck|head|capitis|cervicis|scalene|splenius|longus colli|sternocleidomastoid|шеи|головы|лестнич|ременная|грудино-ключично-сосцевид/.test(name))return 'head';
   if(/hand|wrist|finger|pollicis|palmar|interossei of hand|brachii|forearm|кисти|запясть|пальц.*кисти|плеча|предплеч/.test(name))return 'upper';
   if(/foot|toe|hallucis|digiti|minimi|fibular|tibialis|femoris|glute|hamstring|soleus|gastrocnemius|plantar|межкостн.*стоп|стопы|бедра|голен|ягодич|икронож|камбал|малоберц|большеберц|подколен/.test(name))return 'lower';
   return 'trunk';
  };
  const sameRegion=all.filter(i=>region(i)===region(q.correct[0]));
  const wrong=[...shuffled(sameRegion.filter(i=>!q.correct.includes(i))),...shuffled(all.filter(i=>region(i)!==region(q.correct[0])&&!q.correct.includes(i)))];
  const eligible=q.correct.filter(i=>i!==q.focus);
  if(answerCount==='all')return muscleNames.map((_,i)=>i);
  if(answerCount==='4'&&q.correct.length===1)return shuffled([eligible[Math.floor(Math.random()*eligible.length)],...wrong.slice(0,3)]);
  const requested=Number(answerCount);
  const correctLimit=Math.min(q.correct.length,Math.max(1,requested-1));
  const visibleCorrect=q.correct.length<=correctLimit?q.correct:shuffled(q.correct).slice(0,correctLimit);
  const count=Math.max(requested,visibleCorrect.length);
  return shuffled([...visibleCorrect,...wrong.slice(0,Math.max(0,count-visibleCorrect.length))]);
 }
 let visualStatus='';
 function stopQuestionSpeech(button){
   if('speechSynthesis' in window)window.speechSynthesis.cancel();
   button?.classList.remove('speaking');
   if(button)button.setAttribute('aria-pressed','false');
 }
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
 function highlightAnswer(indices){showHighlight(indices);onAnswerFocus(indices);}
 function draw(){
  if('speechSynthesis' in window)window.speechSynthesis.cancel();
  section.replaceChildren();
  const english=language()==='en',bilingual=language()==='both';
  const settingsDetails=el('details','muscle-settings-details');
  const settingsSummary=el('summary','');
  const settings=el('div','muscle-compact-settings');
  settingsDetails.append(settingsSummary,settings);
  settingsDetails.open=window.matchMedia('(min-width: 801px)').matches||settingsExpanded;
  settingsDetails.addEventListener('toggle',()=>{settingsExpanded=settingsDetails.open;});
  const updateSettingsSummary=()=>{
   const english=language()==='en';
   const categoryNames={all:english?'All topics':'Все темы',relations:english?'Muscle relations':'Связи мышц',origins:english?'Origins':'Начало',insertions:english?'Insertions':'Прикрепление',functions:english?'Functions':'Функции',details:english?'Muscle details':'Сведения о мышцах'};
   const answerName=answerCount==='all'?(english?'All '+muscleNames.length+' muscles':'Все мышцы ('+muscleNames.length+')'):(english?answerCount+' choices':answerCount+' вариантов');
   const selectedCount=testSize==='all'?active().length:Math.min(Number(testSize),active().length);
   const countName=testSize==='all'?(english?'All '+active().length+' questions':'Все вопросы ('+active().length+')'):(english?selectedCount+' questions':selectedCount+' вопросов');
   settingsSummary.textContent=(english?'Quiz settings: ':'Настройки теста: ')+(categoryNames[topic]||topic)+' · '+answerName+' · '+countName;
  };
  updateSettingsSummary();
  const categories=el('select','muscle-dropdown');categories.setAttribute('aria-label','Тема вопросов');
  for(const [v,ru,en] of [['all','Все вопросы','All questions'],['relations','Синергисты и антагонисты','Synergists and antagonists'],['origins','Начало мышцы','Muscle origins'],['insertions','Прикрепление мышцы','Muscle insertions'],['functions','Функции мышц','Muscle functions'],['details','Начало, прикрепление и иннервация','Origin, insertion and innervation']]){const o=el('option','',english?en:ru);o.value=v;categories.append(o);}
  categories.value=topic;categories.onchange=()=>{topic=categories.value;settingsExpanded=settingsDetails.open;reset();draw();};settings.append(categories);
  const answers=el('select','muscle-dropdown');answers.setAttribute('aria-label',english?'Number of answer choices':'Количество вариантов ответа');
  for(const value of ['4','6','10','20','30','50','70','all']){const option=el('option','',value==='all'?(english?'All muscles ('+muscleNames.length+')':'Все мышцы ('+muscleNames.length+')'):english?value+' choices':value+' вариантов');option.value=value;answers.append(option);}
  answers.value=answerCount;answers.onchange=()=>{answerCount=answers.value;settingsExpanded=settingsDetails.open;checked.clear();answered=false;currentChoices=[];draw();};settings.append(answers);
  const count=el('select','muscle-dropdown');count.setAttribute('aria-label',english?'Number of quiz questions':'Количество вопросов в тесте');
  for(const value of ['all','10','20','30','50','70','95']){const option=el('option','',value==='all'?(english?'All available questions':'Все вопросы'):english?value+' questions':value+' вопросов');option.value=value;count.append(option);}
  count.value=testSize;count.onchange=()=>{testSize=count.value;settingsExpanded=settingsDetails.open;reset();draw();};settings.append(count);
  const details=el('details','muscle-diagnostics');details.append(el('summary','',english?'3D model status':'Сведения о 3D-модели'));
  const modelInfo=el('p','muscle-note',info);modelInfo.id='ecorcheInfo';details.append(modelInfo);
  const namesDetails=el('details','muscle-model-names');namesDetails.append(el('summary','',english?'Example object names':'Примеры имён объектов'));namesDetails.append(el('p','muscle-note',(model.getNameSamples?.(8).join(' | ')||(english?'not available yet':'пока недоступны'))));details.append(namesDetails);
  const pickedInfo=el('p','muscle-note',meshInfo);pickedInfo.id='meshInfo';details.append(pickedInfo);
  const search=document.getElementById('muscleGlobalSearch');
  if(search){search.placeholder=english?'Find GLB object':'Поиск объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);meshInfo=found.length?'GLB: '+found.length:'';pickedInfo.textContent=meshInfo;};}
  if(!order.length){section.append(settingsDetails,details,el('p','muscle-note',english?'Questions are being prepared.':'Вопросы готовятся.'));return;}
  if(position>=order.length){section.append(settingsDetails,details,el('h4','muscle-question',english?'Quiz completed':'Тест завершён'));const restart=el('button','',english?'New quiz':'Новый тест');restart.onclick=()=>{reset();draw();};section.append(restart);return;}
  const q=order[position];const singleChoice=answerCount==='4'&&q.correct.length===1;
  model.restore?.();
  visualStatus='';
  const questionMeta=el('div','muscle-question-meta');
  questionMeta.append(el('p','muscle-question-progress',String(position+1)+' / '+order.length));
  const highlightStatus=el('p','muscle-note muscle-question-hint',visualStatus||(english?'Muscle highlights after your answer.':'Мышца подсветится после ответа.'));
  highlightStatus.id='muscleHighlightStatus';questionMeta.append(highlightStatus);section.append(questionMeta);
  const questionRow=el('div','muscle-question-row');
  questionRow.append(el('h4','muscle-question',questionText(q)));
  const speakButton=el('button','muscle-speak-button');
  speakButton.type='button';
  speakButton.setAttribute('aria-label',english?'Read question aloud':'Прочитать вопрос вслух');
  speakButton.setAttribute('title',english?'Read question aloud':'Прочитать вопрос вслух');
  speakButton.setAttribute('aria-pressed','false');
  speakButton.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4z"></path><path d="M16 9a5 5 0 0 1 0 6M18.5 6.5a9 9 0 0 1 0 11"></path></svg>';
  speakButton.onclick=()=>{
   if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){
    highlightStatus.textContent=english?'Speech playback is not available in this browser.':'В этом браузере озвучивание недоступно.';
    return;
   }
   if(speakButton.getAttribute('aria-pressed')==='true'){stopQuestionSpeech(speakButton);return;}
   window.speechSynthesis.cancel();
   const utterance=new window.SpeechSynthesisUtterance(questionText(q));
   utterance.lang=english?'en-US':'ru-RU';
   utterance.rate=.92;
   const voices=window.speechSynthesis.getVoices();
   const prefix=english?'en':'ru';
   const voice=voices.find(item=>item.lang?.toLowerCase()===utterance.lang.toLowerCase())||voices.find(item=>item.lang?.toLowerCase().startsWith(prefix));
   if(voice)utterance.voice=voice;
   const finish=()=>stopQuestionSpeech(speakButton);
   utterance.onend=finish;
   utterance.onerror=finish;
   speakButton.classList.add('speaking');
   speakButton.setAttribute('aria-pressed','true');
   window.speechSynthesis.speak(utterance);
  };
  questionRow.append(speakButton);section.append(questionRow);
  section.append(settingsDetails);
  if(!currentChoices.length)currentChoices=options(q);
  const choices=currentChoices;const panel=el('div',singleChoice?'muscle-answers easy':'muscle-answers');
  const result=el('p','muscle-note','');
  const anatomyCard=el('details','muscle-anatomy-details');
  const anatomySummary=el('summary','',english?'Muscle information':'Информация о мышце');anatomyCard.append(anatomySummary);
  const anatomyBody=el('div','muscle-anatomy-body');anatomyCard.append(anatomyBody);
  const renderAnatomy=()=>{
   anatomyBody.replaceChildren();
   const indices=[...new Set(q.correct)];
   for(const index of indices){
    const [ru,en]=muscleNames[index],entry=muscleDescriptions[en]||buildMuscleDescriptionFromQuiz(index,anatomyQuestions,english?'en':'ru');
    const title=el('h5','muscle-anatomy-title',english?en:ru);anatomyBody.append(title);
    if(!entry){anatomyBody.append(el('p','muscle-anatomy-empty',english?'A reference description is not available yet.':'Описание этой мышцы пока не добавлено.'));continue;}
    const fields=[['origin','Начало','Origin'],['insertion','Прикрепление','Insertion'],['actions','Функция','Function'],['innervation','Иннервация','Innervation'],['topography','Топография','Topography'],['clinical','Клинические особенности','Clinical notes'],['additional','Дополнительные сведения','Additional information']];
    for(const [key,labelRu,labelEn] of fields){const value=entry[key];if(!value)continue;const block=el('section','muscle-anatomy-field');block.append(el('h6','',english?labelEn:labelRu));for(const text of (Array.isArray(value)?value:[value]))block.append(el('p','',Array.isArray(text)?text[english?1:0]:text));anatomyBody.append(block);}
   }
  };
  renderAnatomy();
  const next=el('button','',english?'Next question':'Следующий вопрос');
  next.onclick=()=>{onAnswerFocus([]);position++;checked.clear();answered=false;currentChoices=[];model.restore?.();draw();};
  function restoreAnswerFeedback(){
   const expected=new Set(choices.filter(i=>q.correct.includes(i)));
   const correct=singleChoice?checked.size===1&&expected.has([...checked][0]):checked.size===expected.size&&[...expected].every(i=>checked.has(i));
   result.textContent=(correct?'✓ ':'✗ ')+(english?q.noteEn||englishNotes[(q._sourceIndex??anatomyQuestions.indexOf(q))-legacyQuestionOffset]||q.note:q.note);
   panel.querySelectorAll('label').forEach(label=>{
    const index=Number(label.dataset.index);
    if(expected.has(index))label.classList.add('correct');
    else if(checked.has(index))label.classList.add('wrong');
    label.querySelector('input').disabled=true;
   });
   if(!singleChoice)check.disabled=true;
   next.disabled=false;
   anatomyCard.hidden=false;
  }
  function evaluate(){
   if(answered||!checked.size)return;
   const expected=choices.filter(i=>q.correct.includes(i));
   answered=true;
   restoreAnswerFeedback();
   highlightAnswer([...expected]);
  }
  choices.forEach(i=>{
   const label=el('label','muscle-choice');
   const box=el('input');
   box.type=singleChoice?'radio':'checkbox';
   if(singleChoice)box.name='muscle-answer';
   box.checked=checked.has(i);
   box.onchange=()=>{
    if(answered)return;
    if(singleChoice){
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
  if(!singleChoice)section.append(check);
  section.append(result);
  anatomyCard.hidden=!answered;section.append(anatomyCard);
  if(answered){const expected=choices.filter(i=>q.correct.includes(i));restoreAnswerFeedback();showHighlight(expected);onAnswerFocus(expected);}
  section.append(details);
  next.disabled=!answered;
  section.append(next);
 }
 model.setOnPick(mesh=>{meshInfo='GLB: '+(model.getPickedPath?.()||mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,stopSpeech(){if('speechSynthesis' in window)window.speechSynthesis.cancel();},getMuscleNames:()=>muscleNames,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
