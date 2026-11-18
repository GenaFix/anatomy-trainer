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
// Atlas sections 2.22–2.52, printed pages 294–544. Items are paraphrased from
// the atlas's muscle descriptions and grouped test functions; they are not a
// claim that every atlas chapter describes a single isolated muscle.
const atlasContinuation=[
 {topic:'origins',muscles:['Sternocleidomastoid'],text:'От каких костей и ориентиров начинается грудино-ключично-сосцевидная мышца?',textEn:'What are the bony origins of sternocleidomastoid?',note:'Грудинная головка начинается от рукоятки грудины, ключичная — от медиальной части ключицы.',noteEn:'The sternal head originates from the manubrium; the clavicular head originates from the medial clavicle.'},
 {topic:'insertions',muscles:['Sternocleidomastoid'],text:'Куда прикрепляется грудино-ключично-сосцевидная мышца?',textEn:'Where does sternocleidomastoid insert?',note:'К сосцевидному отростку височной кости и латеральной части верхней выйной линии.',noteEn:'To the mastoid process of the temporal bone and the lateral part of the superior nuchal line.'},
 {topic:'functions',muscles:['Sternocleidomastoid'],text:'Как действует грудино-ключично-сосцевидная мышца при одностороннем и двустороннем сокращении?',textEn:'What does sternocleidomastoid do during unilateral and bilateral contraction?',note:'Односторонне наклоняет голову в свою сторону и поворачивает лицо в противоположную; двусторонне сгибает шейный отдел.',noteEn:'Unilaterally it laterally flexes the neck ipsilaterally and rotates the face contralaterally; bilaterally it flexes the neck.'},
 {topic:'origins',muscles:['Anterior scalene'],text:'Откуда начинается передняя лестничная мышца?',textEn:'Where does anterior scalene originate?',note:'От передних бугорков поперечных отростков шейных позвонков C3–C6.',noteEn:'From the anterior tubercles of the transverse processes of C3–C6.'},
 {topic:'insertions',muscles:['Anterior scalene'],text:'Куда прикрепляется передняя лестничная мышца?',textEn:'Where does anterior scalene insert?',note:'К бугорку передней лестничной мышцы на I ребре, кпереди от борозды подключичной артерии.',noteEn:'To the scalene tubercle of the first rib, anterior to the groove for the subclavian artery.'},
 {topic:'functions',muscles:['Anterior scalene'],text:'Какое движение шеи выполняет передняя лестничная мышца при одностороннем сокращении?',textEn:'What neck movement does anterior scalene produce unilaterally?',note:'Наклоняет шею в свою сторону; также может поднимать I ребро при фиксированной шее.',noteEn:'It laterally flexes the neck to the same side and can elevate the first rib when the neck is fixed.'},
 {topic:'origins',muscles:['Longus colli'],text:'От каких отделов позвоночника начинается длинная мышца шеи?',textEn:'Which vertebral regions give origin to longus colli?',note:'По частям: от тел C5–T3, поперечных отростков C2–C5 и тел трёх верхних грудных позвонков.',noteEn:'By parts: from vertebral bodies C5–T3, transverse processes C2–C5, and the bodies of the upper three thoracic vertebrae.'},
 {topic:'insertions',muscles:['Longus colli'],text:'К каким позвонкам прикрепляются части длинной мышцы шеи?',textEn:'Where do the parts of longus colli insert?',note:'К телам C2–C3, переднему бугорку атланта C1 и передним бугоркам поперечных отростков трёх нижних шейных позвонков.',noteEn:'To the bodies of C2–C3, anterior tubercle of the atlas C1, and anterior tubercles of the three lower cervical transverse processes.'},
 {topic:'functions',muscles:['Longus colli'],text:'Какое основное действие выполняет длинная мышца шеи?',textEn:'What is the principal action of longus colli?',note:'Сгибает шейный отдел; одностороннее сокращение также участвует в ипсилатеральном наклоне.',noteEn:'It flexes the neck; unilateral contraction also contributes to ipsilateral lateral flexion.'},
 {topic:'origins',muscles:['Longus capitis'],text:'Откуда начинается длинная мышца головы?',textEn:'Where does longus capitis originate?',note:'От передних бугорков поперечных отростков C3–C6.',noteEn:'From the anterior tubercles of the transverse processes of C3–C6.'},
 {topic:'insertions',muscles:['Longus capitis'],text:'Куда прикрепляется длинная мышца головы?',textEn:'Where does longus capitis insert?',note:'К базилярной части затылочной кости.',noteEn:'To the basilar part of the occipital bone.'},
 {topic:'functions',muscles:['Longus capitis'],text:'Какое движение головы выполняет длинная мышца головы?',textEn:'What head movement does longus capitis produce?',note:'Сгибает голову и верхний шейный отдел.',noteEn:'It flexes the head and upper cervical spine.'},
 {topic:'insertions',muscles:['Middle scalene','Posterior scalene'],text:'К каким рёбрам прикрепляются средняя и задняя лестничные мышцы?',textEn:'Which ribs receive the insertions of middle and posterior scalene?',note:'Использована стандартная анатомическая номенклатура: средняя лестничная прикрепляется к I ребру, задняя — ко II ребру. В разделе 2.24 атласа русские подписи и отдельное описание места прикрепления задней лестничной расходятся с этим стандартом, поэтому этот пункт требует редакторской сверки с автором.',noteEn:'Standard anatomical nomenclature is used here: middle scalene inserts on rib 1 and posterior scalene on rib 2. In section 2.24, the Russian labels and the posterior scalene insertion description in the atlas conflict with this standard, so this point needs editorial verification against the author.'},
 {topic:'origins',muscles:['Middle scalene','Posterior scalene'],text:'От каких поперечных отростков начинаются средняя и задняя лестничные мышцы?',textEn:'Which transverse processes give origin to middle and posterior scalene?',note:'Средняя лестничная начинается от поперечных отростков C2–C7; задняя — от задних бугорков поперечных отростков C4–C6.',noteEn:'Middle scalene originates from the transverse processes of C2–C7; posterior scalene from the posterior tubercles of C4–C6.'},
 {topic:'functions',muscles:['Anterior scalene','Middle scalene','Posterior scalene'],text:'Какие лестничные мышцы могут поднимать рёбра при фиксированной шее?',textEn:'Which scalene muscles can elevate ribs when the neck is fixed?',note:'Лестничные мышцы участвуют во вдохе, поднимая I и II рёбра.',noteEn:'The scalene muscles assist inspiration by elevating the first and second ribs.'},
 {topic:'origins',muscles:['Rectus capitis posterior major','Rectus capitis posterior minor','Obliquus capitis superior','Obliquus capitis inferior'],text:'Какие подзатылочные мышцы начинаются от атланта или осевого позвонка?',textEn:'Which suboccipital muscles originate from the atlas or axis?',note:'Все четыре подзатылочные мышцы начинаются от C1 или C2: большая задняя прямая и нижняя косая — от C2; малая задняя прямая и верхняя косая — от C1.',noteEn:'All four suboccipital muscles originate from C1 or C2: rectus capitis posterior major and obliquus capitis inferior from C2; rectus capitis posterior minor and obliquus capitis superior from C1.'},
 {topic:'insertions',muscles:['Rectus capitis posterior major','Rectus capitis posterior minor','Obliquus capitis superior'],text:'Какие подзатылочные мышцы прикрепляются к затылочной кости?',textEn:'Which suboccipital muscles insert on the occipital bone?',note:'Большая и малая задние прямые, а также верхняя косая мышцы головы прикрепляются к нижней выйной линии затылочной кости.',noteEn:'Rectus capitis posterior major, rectus capitis posterior minor, and obliquus capitis superior insert along the inferior nuchal line of the occipital bone.'},
 {topic:'functions',muscles:['Rectus capitis posterior major','Rectus capitis posterior minor','Obliquus capitis superior','Obliquus capitis inferior'],text:'Какие подзатылочные мышцы разгибают голову при двустороннем сокращении?',textEn:'Which suboccipital muscles extend the head bilaterally?',note:'Подзатылочные мышцы односторонне поворачивают голову в свою сторону, двусторонне разгибают её.',noteEn:'The suboccipital muscles rotate the head ipsilaterally when unilateral and extend it when bilateral.'},
 {topic:'functions',muscles:['Splenius capitis','Splenius cervicis'],text:'Какие ременные мышцы при одностороннем сокращении поворачивают голову или шею в свою сторону?',textEn:'Which splenius muscles rotate the head or neck ipsilaterally when unilateral?',note:'Ременные мышцы двусторонне разгибают голову и шею, односторонне поворачивают их в свою сторону.',noteEn:'The splenius muscles extend the head and neck bilaterally and rotate them ipsilaterally when unilateral.'},
 {topic:'origins',muscles:['Splenius capitis','Splenius cervicis','Semispinalis cervicis','Semispinalis capitis'],text:'Какие мышцы входят в группу длинных экстензоров шеи по атласу?',textEn:'Which muscles does the atlas include in the long neck extensor group?',note:'Ременные мышцы головы и шеи, полуостистые мышцы головы и шеи.',noteEn:'Splenius capitis and cervicis, and semispinalis capitis and cervicis.'},
 {topic:'insertions',muscles:['Splenius capitis','Splenius cervicis','Semispinalis cervicis','Semispinalis capitis'],text:'Куда прикрепляются мышцы длинных экстензоров шеи?',textEn:'Where do the long neck extensors insert?',note:'Ременная мышца шеи прикрепляется к задним бугоркам поперечных отростков C1–C2; ременная мышца головы — к верхней выйной линии и сосцевидному отростку; полуостистые мышцы — к позвонкам или выйной площадке затылочной кости.',noteEn:'Splenius cervicis inserts on the posterior tubercles of C1–C2; splenius capitis on the superior nuchal line and mastoid process; the semispinalis muscles insert on vertebrae or the occipital nuchal plane.'},
 {topic:'functions',muscles:['Splenius capitis','Splenius cervicis','Semispinalis cervicis','Semispinalis capitis'],text:'Какие мышцы длинных экстензоров участвуют в разгибании головы или шеи?',textEn:'Which long neck extensors contribute to head or neck extension?',note:'Двустороннее сокращение ременных и полуостистых мышц разгибает шею и голову; одностороннее сокращение ременных поворачивает в свою сторону.',noteEn:'Bilateral contraction of the splenius and semispinalis muscles extends the neck and head; unilateral splenius contraction rotates ipsilaterally.'},
 {topic:'origins',muscles:['External oblique'],text:'Откуда начинается наружная косая мышца живота?',textEn:'Where does external oblique originate?',note:'От наружных поверхностей и нижних краёв V–XII рёбер.',noteEn:'From the external surfaces and inferior borders of ribs 5–12.'},
 {topic:'insertions',muscles:['External oblique'],text:'К каким структурам прикрепляется наружная косая мышца живота?',textEn:'Where does external oblique insert?',note:'К белой линии живота, лобковому бугорку, подвздошному гребню и паховой связке.',noteEn:'To the linea alba, pubic tubercle, iliac crest, and inguinal ligament.'},
 {topic:'functions',muscles:['External oblique'],text:'Какую ротацию туловища выполняет наружная косая мышца при одностороннем сокращении?',textEn:'Which trunk rotation does external oblique produce unilaterally?',note:'Поворачивает туловище в противоположную сторону; двустороннее сокращение сгибает туловище и напрягает брюшную стенку.',noteEn:'It rotates the trunk contralaterally; bilateral contraction flexes the trunk and tensions the abdominal wall.'},
 {topic:'origins',muscles:['Internal oblique'],text:'От каких структур начинается внутренняя косая мышца живота?',textEn:'Which structures give origin to internal oblique?',note:'От грудопоясничной фасции, подвздошного гребня и латеральной части паховой связки.',noteEn:'From the thoracolumbar fascia, iliac crest, and lateral part of the inguinal ligament.'},
 {topic:'insertions',muscles:['Internal oblique'],text:'Куда прикрепляется внутренняя косая мышца живота?',textEn:'Where does internal oblique insert?',note:'К нижним краям рёбер X–XII, белой линии живота и лобковой кости через совместное сухожилие.',noteEn:'To the inferior borders of ribs 10–12, linea alba, and pubis via the conjoint tendon.'},
 {topic:'functions',muscles:['Internal oblique'],text:'В какую сторону поворачивает туловище внутренняя косая мышца при одностороннем сокращении?',textEn:'Which way does internal oblique rotate the trunk unilaterally?',note:'В свою сторону; двустороннее сокращение сгибает туловище и напрягает брюшную стенку.',noteEn:'Ipsilaterally; bilateral contraction flexes the trunk and tensions the abdominal wall.'},
 {topic:'origins',muscles:['Rectus abdominis'],text:'Откуда начинается прямая мышца живота?',textEn:'Where does rectus abdominis originate?',note:'От лобкового гребня и симфиза.',noteEn:'From the pubic crest and pubic symphysis.'},
 {topic:'insertions',muscles:['Rectus abdominis'],text:'Куда прикрепляется прямая мышца живота?',textEn:'Where does rectus abdominis insert?',note:'К мечевидному отростку и хрящам V–VII рёбер.',noteEn:'To the xiphoid process and costal cartilages 5–7.'},
 {topic:'functions',muscles:['Rectus abdominis'],text:'Какую функцию выполняет прямая мышца живота при двустороннем сокращении?',textEn:'What does rectus abdominis do bilaterally?',note:'Сгибает туловище и напрягает переднюю брюшную стенку.',noteEn:'It flexes the trunk and tensions the anterior abdominal wall.'},
 {topic:'origins',muscles:['Transversus abdominis'],text:'От каких структур начинается поперечная мышца живота?',textEn:'Which structures give origin to transversus abdominis?',note:'От внутренних поверхностей нижних рёберных хрящей, грудопоясничной фасции, подвздошного гребня и паховой связки.',noteEn:'From the inner surfaces of the lower costal cartilages, thoracolumbar fascia, iliac crest, and inguinal ligament.'},
 {topic:'insertions',muscles:['Transversus abdominis'],text:'Куда прикрепляется поперечная мышца живота?',textEn:'Where does transversus abdominis insert?',note:'К белой линии живота, лобковому гребню и гребенчатой линии через апоневроз и совместное сухожилие.',noteEn:'To the linea alba, pubic crest, and pecten pubis through its aponeurosis and conjoint tendon.'},
 {topic:'functions',muscles:['Transversus abdominis'],text:'Какое основное действие выполняет поперечная мышца живота?',textEn:'What is the principal action of transversus abdominis?',note:'Сжимает содержимое живота и напрягает брюшную стенку; не является основным сгибателем туловища.',noteEn:'It compresses the abdominal contents and tensions the abdominal wall; it is not a primary trunk flexor.'},
 {topic:'origins',muscles:['Quadratus lumborum'],text:'Откуда начинается квадратная мышца поясницы?',textEn:'Where does quadratus lumborum originate?',note:'От подвздошного гребня и подвздошно-поясничной связки.',noteEn:'From the iliac crest and iliolumbar ligament.'},
 {topic:'insertions',muscles:['Quadratus lumborum'],text:'Куда прикрепляется квадратная мышца поясницы?',textEn:'Where does quadratus lumborum insert?',note:'К XII ребру и поперечным отросткам верхних поясничных позвонков.',noteEn:'To the twelfth rib and transverse processes of the upper lumbar vertebrae.'},
 {topic:'functions',muscles:['Quadratus lumborum'],text:'Какое действие выполняет квадратная мышца поясницы при одностороннем сокращении?',textEn:'What does quadratus lumborum do unilaterally?',note:'Наклоняет поясничный отдел в свою сторону и фиксирует XII ребро при дыхании.',noteEn:'It laterally flexes the lumbar spine ipsilaterally and fixes the twelfth rib during breathing.'},
 {topic:'origins',muscles:['Iliopsoas'],text:'Из каких мышц образуется подвздошно-поясничная мышца и где они начинаются?',textEn:'Which muscles form iliopsoas, and where do they originate?',note:'Большая поясничная начинается от тел и поперечных отростков поясничных позвонков; подвздошная — от подвздошной ямки.',noteEn:'Psoas major originates from lumbar vertebral bodies and transverse processes; iliacus originates from the iliac fossa.'},
 {topic:'insertions',muscles:['Iliopsoas'],text:'Куда прикрепляется подвздошно-поясничная мышца?',textEn:'Where does iliopsoas insert?',note:'К малому вертелу бедренной кости.',noteEn:'To the lesser trochanter of the femur.'},
 {topic:'functions',muscles:['Iliopsoas'],text:'Какое основное движение выполняет подвздошно-поясничная мышца?',textEn:'What is the principal action of iliopsoas?',note:'Сгибает бедро в тазобедренном суставе; при фиксированных ногах может сгибать туловище.',noteEn:'It flexes the hip; with the legs fixed it can flex the trunk.'},
 {topic:'origins',muscles:['Latissimus dorsi'],text:'От каких областей начинается широчайшая мышца спины?',textEn:'Which regions give origin to latissimus dorsi?',note:'От нижних грудных остистых отростков через грудопоясничную фасцию, пояснично-крестцовой области, подвздошного гребня и нижних рёбер.',noteEn:'From lower thoracic spinous processes via the thoracolumbar fascia, the lumbosacral region, iliac crest, and lower ribs.'},
 {topic:'insertions',muscles:['Latissimus dorsi'],text:'Куда прикрепляется широчайшая мышца спины?',textEn:'Where does latissimus dorsi insert?',note:'К дну межбугорковой борозды плечевой кости.',noteEn:'To the floor of the intertubercular sulcus of the humerus.'},
 {topic:'functions',muscles:['Latissimus dorsi'],text:'Какие движения плеча выполняет широчайшая мышца спины?',textEn:'What shoulder actions does latissimus dorsi perform?',note:'Разгибает, приводит и внутренне вращает плечевую кость.',noteEn:'It extends, adducts, and internally rotates the humerus.'},
 {topic:'origins',muscles:['Levator ani'],text:'Откуда начинается мышца, поднимающая задний проход?',textEn:'Where does levator ani originate?',note:'От лобковой кости и сухожильной дуги мышцы, поднимающей задний проход, доходящей до седалищной ости.',noteEn:'From the pubis and the tendinous arch of levator ani extending to the ischial spine.'},
 {topic:'insertions',muscles:['Levator ani'],text:'К каким структурам прикрепляется мышца, поднимающая задний проход?',textEn:'Where does levator ani insert?',note:'К сухожильному центру промежности, стенкам прямой кишки и влагалища, а также к копчику.',noteEn:'To the perineal body, walls of the rectum and vagina, and coccyx.'},
 {topic:'functions',muscles:['Levator ani'],text:'Какова основная функция мышцы, поднимающей задний проход?',textEn:'What is the principal function of levator ani?',note:'Поддерживает и фиксирует органы малого таза.',noteEn:'It supports and stabilizes the pelvic organs.'},
 {topic:'origins',muscles:['Pubococcygeus'],text:'Откуда начинается лобково-копчиковая мышца?',textEn:'Where does pubococcygeus originate?',note:'От внутренней поверхности лобковой кости и сухожильной дуги мышцы, поднимающей задний проход.',noteEn:'From the inner surface of the pubis and the tendinous arch of levator ani.'},
 {topic:'insertions',muscles:['Pubococcygeus'],text:'Куда прикрепляется лобково-копчиковая мышца?',textEn:'Where does pubococcygeus insert?',note:'К копчику и сухожильному центру промежности.',noteEn:'To the coccyx and perineal body.'},
 {topic:'functions',muscles:['Pubococcygeus'],text:'Какую функцию выполняет лобково-копчиковая мышца?',textEn:'What does pubococcygeus do?',note:'Поддерживает органы малого таза; у женщин также суживает влагалище.',noteEn:'It supports the pelvic organs and, in women, also narrows the vagina.'},
 {topic:'origins',muscles:['Puborectalis'],text:'Откуда начинается лобково-прямокишечная мышца?',textEn:'Where does puborectalis originate?',note:'От внутренней поверхности лобковой кости.',noteEn:'From the inner surface of the pubis.'},
 {topic:'insertions',muscles:['Puborectalis'],text:'Куда прикрепляется лобково-прямокишечная мышца?',textEn:'Where does puborectalis insert?',note:'Окружает нижнюю часть прямой кишки.',noteEn:'It loops around the lower part of the rectum.'},
 {topic:'functions',muscles:['Puborectalis'],text:'Какую функцию выполняет лобково-прямокишечная мышца?',textEn:'What does puborectalis do?',note:'Сдавливает прямую кишку и способствует закрытию заднего прохода; при дефекации расслабляется.',noteEn:'It compresses the rectum and helps close the anal opening; it relaxes during defecation.'},
 {topic:'origins',muscles:['Iliococcygeus'],text:'Откуда начинается подвздошно-копчиковая мышца?',textEn:'Where does iliococcygeus originate?',note:'От сухожильной дуги мышцы, поднимающей задний проход.',noteEn:'From the tendinous arch of levator ani.'},
 {topic:'insertions',muscles:['Iliococcygeus'],text:'Куда прикрепляется подвздошно-копчиковая мышца?',textEn:'Where does iliococcygeus insert?',note:'К копчику.',noteEn:'To the coccyx.'},
 {topic:'functions',muscles:['Iliococcygeus'],text:'Какую функцию выполняет подвздошно-копчиковая мышца?',textEn:'What does iliococcygeus do?',note:'Поддерживает органы малого таза и поднимает тазовое дно.',noteEn:'It supports the pelvic organs and elevates the pelvic floor.'},
 {topic:'origins',muscles:['Pubovaginalis','Puboprostaticus'],text:'Откуда начинаются лобково-влагалищная и лобково-предстательная мышцы?',textEn:'Where do pubovaginalis and puboprostaticus originate?',note:'От внутренней поверхности лобковой кости и сухожильной дуги мышцы, поднимающей задний проход.',noteEn:'From the inner surface of the pubis and the tendinous arch of levator ani.'},
 {topic:'insertions',muscles:['Pubovaginalis','Puboprostaticus'],text:'Куда, согласно описанию атласа, прикрепляются лобково-влагалищная и лобково-предстательная мышцы?',textEn:'Where does the atlas say pubovaginalis and puboprostaticus insert?',note:'В разделе атласа указаны копчик и сухожильный центр промежности. Это место прикрепления требует сверки: рядом атлас описывает действие этих мышц на влагалище и предстательную железу.',noteEn:'The atlas section lists the coccyx and perineal body. This insertion needs verification: nearby text describes these muscles as acting on the vagina and prostate.'},
 {topic:'functions',muscles:['Pubovaginalis','Puboprostaticus'],text:'Как различаются функции лобково-влагалищной и лобково-предстательной мышц?',textEn:'How do the functions of pubovaginalis and puboprostaticus differ?',note:'По атласу, лобково-влагалищная мышца смещает и сжимает влагалище; лобково-предстательная поднимает предстательную железу.',noteEn:'According to the atlas, pubovaginalis shifts and compresses the vagina; puboprostaticus elevates the prostate.'},
 {topic:'origins',muscles:['Coccygeus'],text:'Откуда начинается седалищно-копчиковая (копчиковая) мышца?',textEn:'Where does coccygeus originate?',note:'От внутренней поверхности седалищной ости.',noteEn:'From the inner surface of the ischial spine.'},
 {topic:'insertions',muscles:['Coccygeus'],text:'Куда прикрепляется седалищно-копчиковая мышца?',textEn:'Where does coccygeus insert?',note:'К нижнелатеральному краю крестца и копчику.',noteEn:'To the inferolateral sacrum and coccyx.'},
 {topic:'functions',muscles:['Coccygeus'],text:'Какую функцию выполняет седалищно-копчиковая мышца?',textEn:'What does coccygeus do?',note:'Поддерживает и фиксирует органы малого таза.',noteEn:'It supports and stabilizes the pelvic organs.'},
 {topic:'origins',muscles:['External anal sphincter'],text:'Откуда начинается наружный сфинктер заднего прохода?',textEn:'Where does the external anal sphincter originate?',note:'От дермы кожи вокруг заднего прохода и сухожильного центра промежности.',noteEn:'From the dermis around the anus and the perineal body.'},
 {topic:'insertions',muscles:['External anal sphincter'],text:'Куда прикрепляется наружный сфинктер заднего прохода?',textEn:'Where does the external anal sphincter insert?',note:'К коже и подкожной клетчатке вокруг заднего прохода и к анально-копчиковой связке.',noteEn:'To the skin and subcutaneous tissue around the anus and the anococcygeal ligament.'},
 {topic:'functions',muscles:['External anal sphincter'],text:'Какую функцию выполняет наружный сфинктер заднего прохода?',textEn:'What does the external anal sphincter do?',note:'Сжимает и закрывает заднепроходное отверстие.',noteEn:'It compresses and closes the anal opening.'},
 {topic:'origins',muscles:['Deep transverse perineal','Superficial transverse perineal'],text:'Откуда начинаются глубокая и поверхностная поперечные мышцы промежности?',textEn:'Where do the deep and superficial transverse perineal muscles originate?',note:'От нижней ветви лобковой кости и ветви седалищной кости; глубокая также может начинаться от седалищного бугра.',noteEn:'From the inferior pubic ramus and ischial ramus; the deep muscle may also arise from the ischial tuberosity.'},
 {topic:'insertions',muscles:['Deep transverse perineal','Superficial transverse perineal'],text:'К каким структурам прикрепляются поперечные мышцы промежности по атласу?',textEn:'Where do the transverse perineal muscles insert according to the atlas?',note:'Атлас указывает область отверстия мочеиспускательного канала, а у женщин также влагалища; для глубокой мышцы место включает их окружение.',noteEn:'The atlas describes attachment around the urethral opening and, in women, the vagina; the deep muscle surrounds these openings.'},
 {topic:'functions',muscles:['Deep transverse perineal','Superficial transverse perineal'],text:'Какую функцию выполняют поперечные мышцы промежности?',textEn:'What do the transverse perineal muscles do?',note:'Глубокая укрепляет тазовое дно и поддерживает мышцу, поднимающую задний проход; поверхностная укрепляет шов промежности и фиксирует наружные половые структуры.',noteEn:'The deep muscle reinforces the pelvic floor and supports levator ani; the superficial muscle stabilizes the perineal raphe and anchors external genital structures.'},
 {topic:'origins',muscles:['Ischiocavernosus'],text:'Откуда начинается седалищно-пещеристая мышца?',textEn:'Where does ischiocavernosus originate?',note:'От ветви седалищной кости.',noteEn:'From the ramus of the ischium.'},
 {topic:'insertions',muscles:['Ischiocavernosus'],text:'Куда прикрепляется седалищно-пещеристая мышца?',textEn:'Where does ischiocavernosus insert?',note:'К белочной оболочке пещеристого тела клитора или полового члена.',noteEn:'To the tunica albuginea of the corpus cavernosum of the clitoris or penis.'},
 {topic:'functions',muscles:['Ischiocavernosus'],text:'Какую функцию выполняет седалищно-пещеристая мышца?',textEn:'What does ischiocavernosus do?',note:'Поднимает половой член или клитор и помогает механизму эрекции.',noteEn:'It elevates the penis or clitoris and assists the erectile mechanism.'},
 {topic:'origins',muscles:['Bulbospongiosus'],text:'Откуда начинается луковично-губчатая мышца?',textEn:'Where does bulbospongiosus originate?',note:'От сухожильного центра промежности.',noteEn:'From the perineal body.'},
 {topic:'insertions',muscles:['Bulbospongiosus'],text:'Куда прикрепляется луковично-губчатая мышца?',textEn:'Where does bulbospongiosus insert?',note:'У мужчин — к нижней мочеполовой фасции и спинке полового члена; у женщин — к губчатому телу клитора.',noteEn:'In men, to the inferior urogenital fascia and dorsum of the penis; in women, to the corpus spongiosum of the clitoris.'},
 {topic:'functions',muscles:['Bulbospongiosus'],text:'Как различается функция луковично-губчатой мышцы у мужчин и женщин?',textEn:'How does bulbospongiosus function differ between men and women?',note:'У мужчин сжимает луковицу полового члена; у женщин сжимает вход во влагалище и шов промежности.',noteEn:'In men it compresses the bulb of the penis; in women it compresses the vaginal opening and perineal raphe.'},
 {topic:'origins',muscles:['External urethral sphincter'],text:'Откуда начинается сфинктер мочеиспускательного канала?',textEn:'Where does the urethral sphincter originate?',note:'От сухожильного центра промежности.',noteEn:'From the perineal body.'},
 {topic:'insertions',muscles:['External urethral sphincter'],text:'Куда прикрепляется сфинктер мочеиспускательного канала?',textEn:'Where does the urethral sphincter insert?',note:'К ветвям лобковых костей и перепончатой части мочеиспускательного канала.',noteEn:'To the pubic rami and membranous part of the urethra.'},
 {topic:'functions',muscles:['External urethral sphincter'],text:'Какую функцию выполняет сфинктер мочеиспускательного канала?',textEn:'What does the urethral sphincter do?',note:'Сжимает мочеиспускательный канал.',noteEn:'It compresses the urethra.'},
 {topic:'functions',muscles:['Levator ani','Pubococcygeus','Puborectalis','Iliococcygeus','Pubovaginalis','Puboprostaticus','Coccygeus','External anal sphincter','Deep transverse perineal','Superficial transverse perineal','Ischiocavernosus','Bulbospongiosus','External urethral sphincter'],text:'Какие мышцы атлас относит к тазовому дну?',textEn:'Which muscles does the atlas include in the pelvic floor?',note:'Атлас описывает мышцы тазовой и мочеполовой диафрагм: levator ani и её части, coccygeus, наружный сфинктер заднего прохода, поперечные мышцы промежности, ischiocavernosus, bulbospongiosus и сфинктер мочеиспускательного канала.',noteEn:'The atlas describes the pelvic and urogenital diaphragm muscles: levator ani and its parts, coccygeus, external anal sphincter, transverse perineal muscles, ischiocavernosus, bulbospongiosus, and the urethral sphincter.'},
 {topic:'origins',muscles:['Gluteus maximus'],text:'От каких костей начинается большая ягодичная мышца?',textEn:'Which bones give origin to gluteus maximus?',note:'От подвздошной кости позади задней ягодичной линии, крестца и копчика, а также от крестцово-бугорной связки.',noteEn:'From the ilium posterior to the posterior gluteal line, sacrum and coccyx, and the sacrotuberous ligament.'},
 {topic:'insertions',muscles:['Gluteus maximus'],text:'Куда прикрепляется большая ягодичная мышца?',textEn:'Where does gluteus maximus insert?',note:'К ягодичной бугристости бедренной кости и подвздошно-большеберцовому тракту.',noteEn:'To the gluteal tuberosity of the femur and the iliotibial tract.'},
 {topic:'functions',muscles:['Gluteus maximus'],text:'Какое основное действие выполняет большая ягодичная мышца?',textEn:'What is the principal action of gluteus maximus?',note:'Разгибает и наружу вращает бедро; верхние волокна также отводят, нижние приводят бедро.',noteEn:'It extends and externally rotates the hip; upper fibers also abduct and lower fibers adduct the thigh.'},
 {topic:'origins',muscles:['Piriformis'],text:'Откуда начинается грушевидная мышца?',textEn:'Where does piriformis originate?',note:'От передней поверхности крестца.',noteEn:'From the anterior surface of the sacrum.'},
 {topic:'insertions',muscles:['Piriformis'],text:'Куда прикрепляется грушевидная мышца?',textEn:'Where does piriformis insert?',note:'К верхушке большого вертела бедренной кости.',noteEn:'To the apex of the greater trochanter of the femur.'},
 {topic:'functions',muscles:['Piriformis'],text:'Какое вращательное действие выполняет грушевидная мышца при разогнутом бедре?',textEn:'What rotational action does piriformis perform with the hip extended?',note:'Наружно вращает бедро; при согнутом бедре может участвовать в отведении.',noteEn:'It externally rotates the hip; with the hip flexed it can contribute to abduction.'},
 {topic:'origins',muscles:['Gluteus medius'],text:'Откуда начинается средняя ягодичная мышца?',textEn:'Where does gluteus medius originate?',note:'От наружной поверхности подвздошной кости между передней и задней ягодичными линиями.',noteEn:'From the external surface of the ilium between the anterior and posterior gluteal lines.'},
 {topic:'insertions',muscles:['Gluteus medius'],text:'Куда прикрепляется средняя ягодичная мышца?',textEn:'Where does gluteus medius insert?',note:'К латеральной поверхности большого вертела.',noteEn:'To the lateral surface of the greater trochanter.'},
 {topic:'functions',muscles:['Gluteus medius'],text:'Какую важную функцию выполняет средняя ягодичная мышца при опоре на одну ногу?',textEn:'What important function does gluteus medius perform during single-leg stance?',note:'Отводит бедро и стабилизирует таз, препятствуя его опусканию на противоположной стороне.',noteEn:'It abducts the hip and stabilizes the pelvis, preventing contralateral pelvic drop.'},
 {topic:'origins',muscles:['Tensor fasciae latae'],text:'Откуда начинается напрягатель широкой фасции бедра?',textEn:'Where does tensor fasciae latae originate?',note:'От передней верхней подвздошной ости и передней части подвздошного гребня.',noteEn:'From the anterior superior iliac spine and anterior iliac crest.'},
 {topic:'insertions',muscles:['Tensor fasciae latae'],text:'Через какую структуру напрягатель широкой фасции бедра передаёт усилие к голени?',textEn:'Through which structure does tensor fasciae latae transmit force to the leg?',note:'Через подвздошно-большеберцовый тракт к латеральной поверхности большеберцовой кости.',noteEn:'Through the iliotibial tract to the lateral tibia.'},
 {topic:'functions',muscles:['Tensor fasciae latae'],text:'Какие движения выполняет напрягатель широкой фасции бедра?',textEn:'What actions does tensor fasciae latae perform?',note:'Сгибает, отводит и внутренне вращает бедро; натягивает подвздошно-большеберцовый тракт.',noteEn:'It flexes, abducts, and internally rotates the hip and tensions the iliotibial tract.'},
 {topic:'origins',muscles:['Rectus femoris'],text:'Откуда начинается прямая мышца бедра?',textEn:'Where does rectus femoris originate?',note:'От передней нижней подвздошной ости и области над вертлужной впадиной.',noteEn:'From the anterior inferior iliac spine and the region superior to the acetabulum.'},
 {topic:'insertions',muscles:['Rectus femoris','Vastus lateralis','Vastus medialis','Vastus intermedius'],text:'Куда прикрепляются головки четырёхглавой мышцы бедра?',textEn:'Where do the heads of quadriceps femoris insert?',note:'Через общее сухожилие к надколеннику, далее через связку надколенника к бугристости большеберцовой кости.',noteEn:'Through the common tendon to the patella, then via the patellar ligament to the tibial tuberosity.'},
 {topic:'functions',muscles:['Rectus femoris','Vastus lateralis','Vastus medialis','Vastus intermedius'],text:'Какую функцию выполняют все четыре головки четырёхглавой мышцы бедра?',textEn:'What action do all four heads of quadriceps femoris perform?',note:'Разгибают голень в коленном суставе; прямая мышца бедра дополнительно сгибает бедро.',noteEn:'They extend the leg at the knee; rectus femoris also flexes the hip.'},
 {topic:'origins',muscles:['Adductor brevis'],text:'Откуда начинается короткая приводящая мышца?',textEn:'Where does adductor brevis originate?',note:'От тела и нижней ветви лобковой кости.',noteEn:'From the body and inferior ramus of the pubis.'},
 {topic:'insertions',muscles:['Adductor brevis'],text:'Куда прикрепляется короткая приводящая мышца?',textEn:'Where does adductor brevis insert?',note:'К гребенчатой линии и проксимальной части шероховатой линии бедренной кости.',noteEn:'To the pectineal line and proximal linea aspera of the femur.'},
 {topic:'functions',muscles:['Adductor brevis'],text:'Какое основное движение бедра выполняет короткая приводящая мышца?',textEn:'What is the principal hip action of adductor brevis?',note:'Приводит бедро; также участвует в его сгибании.',noteEn:'It adducts the thigh and also assists hip flexion.'},
 {topic:'functions',muscles:['Pectineus','Adductor brevis','Adductor longus','Adductor magnus','Gracilis'],text:'Какие мышцы входят в приводящую группу бедра, описанную в атласе?',textEn:'Which muscles are included in the atlas section on thigh adductors?',note:'В группе рассматриваются гребенчатая, тонкая, короткая, длинная и большая приводящие мышцы; их общее действие — приведение бедра.',noteEn:'The section covers pectineus, gracilis, adductor brevis, adductor longus, and adductor magnus; their shared action is thigh adduction.'},
 {topic:'origins',muscles:['Biceps femoris','Semitendinosus','Semimembranosus'],text:'Откуда начинаются длинная головка двуглавой мышцы бедра и две другие мышцы задней группы бедра?',textEn:'Where do the long head of biceps femoris and the other two hamstrings originate?',note:'Длинная головка двуглавой мышцы бедра, полусухожильная и полуперепончатая мышцы начинаются от седалищного бугра.',noteEn:'The long head of biceps femoris, semitendinosus, and semimembranosus originate from the ischial tuberosity.'},
 {topic:'insertions',muscles:['Biceps femoris','Semitendinosus','Semimembranosus'],text:'Куда прикрепляются мышцы задней группы бедра?',textEn:'Where do the hamstring muscles insert?',note:'Двуглавая мышца бедра — к головке малоберцовой кости; полусухожильная — к верхней медиальной поверхности большеберцовой кости; полуперепончатая — к задней части медиального мыщелка большеберцовой кости.',noteEn:'Biceps femoris inserts on the head of the fibula; semitendinosus on the proximal medial tibia; semimembranosus on the posterior medial tibial condyle.'},
 {topic:'functions',muscles:['Biceps femoris','Semitendinosus','Semimembranosus'],text:'Какие движения выполняет группа хамстрингов?',textEn:'What actions do the hamstrings perform?',note:'Разгибают бедро и сгибают колено; при согнутом колене двуглавая мышца бедра вращает голень кнаружи, полусухожильная и полуперепончатая — кнутри.',noteEn:'They extend the hip and flex the knee; with the knee flexed, biceps femoris laterally rotates the leg, while semitendinosus and semimembranosus medially rotate it.'},
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
 {topic:'insertions',muscles:['Fibularis longus','Fibularis brevis'],text:'Куда прикрепляются длинная и короткая малоберцовые мышцы?',textEn:'Where do fibularis longus and brevis insert?',note:'Длинная — к медиальной клиновидной кости и основанию I плюсневой; короткая — к бугристости основания V плюсневой.',noteEn:'Fibularis longus inserts on the medial cuneiform and base of the first metatarsal; brevis on the tuberosity at the base of the fifth.'},
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
export function setupMuscleQuiz(container,model,language,onAnswerFocus=()=>{}){
 let level='easy',topic='all',testSize='all',order=[],position=0,checked=new Set(),info='',meshInfo='',answered=false,settingsExpanded=false;
 const el=(tag,cls,txt)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x;};
 const section=el('div','muscle-study');container.append(section);
 const shuffled=(arr)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const active=()=>anatomyQuestions.filter(q=>topic==='all'||q.topic===topic);
 function reset(){order=shuffled(active());if(testSize!=='all')order=order.slice(0,Number(testSize));position=0;checked.clear();answered=false;}
 reset();
 function questionText(q){
  const english=language()==='en';
  let prompt=english?q.textEn||englishQuestionTexts[anatomyQuestions.indexOf(q)-legacyQuestionOffset]||q.text||'Identify the muscle.':q.text||((q.kind==='synergists'?'Какая мышца является синергистом трапециевидной мышцы при движении «':'Какая мышца является антагонистом трапециевидной мышцы при движении «')+q.movement+'»?');
  if(q.correct.length>1)prompt=(english?(level==='easy'?'Choose one correct option. ':'Select all correct options shown. '):(level==='easy'?'Выберите один правильный вариант. ':'Отметьте все правильные варианты из показанных. '))+prompt;
  return prompt;
 }
 function options(q){
  const all=muscleNames.map((_,i)=>i).filter(i=>i!==q.focus);
  const wrong=shuffled(all.filter(i=>!q.correct.includes(i)));
  const eligible=q.correct.filter(i=>i!==q.focus);
  if(level==='expert')return all;
  if(level==='medium'){
   const visibleCorrect=q.correct.length>4?shuffled(q.correct).slice(0,3):q.correct;
   return shuffled([...visibleCorrect,...wrong.slice(0,Math.max(0,6-visibleCorrect.length))]);
  }
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
 function highlightAnswer(){const indices=[...checked];showHighlight(indices);onAnswerFocus(indices);}
 function draw(){
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
   const categoryNames={all:english?'All topics':'Все темы',relations:english?'Muscle relations':'Связи мышц',origins:english?'Origins':'Начало',insertions:english?'Insertions':'Прикрепление',functions:english?'Functions':'Функции'};
   const levelNames={easy:english?'Beginner':'Начальный',medium:english?'Intermediate':'Средний',expert:english?'Expert':'Эксперт'};
   const selectedCount=testSize==='all'?active().length:Math.min(Number(testSize),active().length);
   const countName=testSize==='all'?(english?'All '+active().length+' questions':'Все вопросы ('+active().length+')'):(english?selectedCount+' questions':selectedCount+' вопросов');
   settingsSummary.textContent=(english?'Quiz settings: ':'Настройки теста: ')+(categoryNames[topic]||topic)+' · '+(levelNames[level]||level)+' · '+countName;
  };
  updateSettingsSummary();
  const categories=el('select','muscle-dropdown');categories.setAttribute('aria-label','Тема вопросов');
  for(const [v,ru,en] of [['all','Все вопросы','All questions'],['relations','Синергисты и антагонисты','Synergists and antagonists'],['origins','Начало мышцы','Muscle origins'],['insertions','Прикрепление мышцы','Muscle insertions'],['functions','Функции мышц','Muscle functions']]){const o=el('option','',english?en:ru);o.value=v;categories.append(o);}
  categories.value=topic;categories.onchange=()=>{topic=categories.value;settingsExpanded=settingsDetails.open;reset();draw();};settings.append(categories);
  const difficulty=el('select','muscle-dropdown');difficulty.setAttribute('aria-label','Сложность');
  for(const [v,ru,en] of [['easy','Начальный: 4 варианта','Beginner: 4 choices'],['medium','Средний: 6 вариантов','Intermediate: 6 choices'],['expert','Эксперт: все '+muscleNames.length+' мышц','Expert: all '+muscleNames.length+' muscles']]){const o=el('option','',english?en:ru);o.value=v;difficulty.append(o);}
  difficulty.value=level;difficulty.onchange=()=>{level=difficulty.value;settingsExpanded=settingsDetails.open;checked.clear();answered=false;draw();};settings.append(difficulty);
  const count=el('select','muscle-dropdown');count.setAttribute('aria-label',english?'Number of quiz questions':'Количество вопросов в тесте');
  for(const value of ['all','10','20','30','50','70','95']){const option=el('option','',value==='all'?(english?'All available questions':'Все вопросы'):english?value+' questions':value+' вопросов');option.value=value;count.append(option);}
  count.value=testSize;count.onchange=()=>{testSize=count.value;settingsExpanded=settingsDetails.open;reset();draw();};settings.append(count);
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
  details.append(mapper);
  const search=document.getElementById('muscleGlobalSearch');
  if(search){search.placeholder=english?'Find GLB object':'Поиск объекта GLB';search.oninput=()=>{const found=model.selectByName(search.value);meshInfo=found.length?'GLB: '+found.length:'';pickedInfo.textContent=meshInfo;};}
  if(!order.length){section.append(settingsDetails,details,el('p','muscle-note',english?'Questions are being prepared.':'Вопросы готовятся.'));return;}
  if(position>=order.length){section.append(settingsDetails,details,el('h4','muscle-question',english?'Quiz completed':'Тест завершён'));const restart=el('button','',english?'New quiz':'Новый тест');restart.onclick=()=>{reset();draw();};section.append(restart);return;}
  const q=order[position];const beginner=level==='easy';
  model.restore?.();
  visualStatus='';
  const questionMeta=el('div','muscle-question-meta');
  questionMeta.append(el('p','muscle-question-progress',String(position+1)+' / '+order.length));
  const highlightStatus=el('p','muscle-note muscle-question-hint',visualStatus||(english?'Muscle highlights after your answer.':'Мышца подсветится после ответа.'));
  highlightStatus.id='muscleHighlightStatus';questionMeta.append(highlightStatus);section.append(questionMeta);
  section.append(el('h4','muscle-question',questionText(q)));
  section.append(settingsDetails);
  const choices=options(q);const panel=el('div',beginner?'muscle-answers easy':'muscle-answers');
  const result=el('p','muscle-note','');
  const next=el('button','',english?'Next question':'Следующий вопрос');
  next.onclick=()=>{onAnswerFocus([]);position++;checked.clear();answered=false;model.restore?.();draw();};
  function evaluate(){
   if(answered||!checked.size)return;
   const expected=new Set(beginner||level==='medium'?choices.filter(i=>q.correct.includes(i)):q.correct);
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
  section.append(details);
  next.disabled=true;
  section.append(next);
 }
 model.setOnPick(mesh=>{meshInfo='GLB: '+(model.getPickedPath?.()||mesh.name||'(без названия)');const e=section.querySelector('#meshInfo');if(e)e.textContent=meshInfo;});
 return {draw,getMuscleNames:()=>muscleNames,setInfo(message){info=message;const e=section.querySelector('#ecorcheInfo');if(e)e.textContent=message;},setMeshInfo(message){meshInfo=message;const e=section.querySelector('#meshInfo');if(e)e.textContent=message;}};
}
