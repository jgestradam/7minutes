export const SECTIONS_EN = [
  {
    title: 'Calling',
    time: 30,
    message: 'Calling on the name of the Lord to set our mind on the spirit – 1 Co. 12:3; Rom. 8:6; 10:12-13.'
  },
  {
    title: 'Pray',
    time: 60,
    message: 'Open our heart, soften our heart and empty us. Tell the Lord that we love Him -- 2 Co. 3:16; Psa. 62:8.'
  },
  {
    title: 'Pray-read',
    time: 150,
    message: 'Use an exercised spirit to pray-read one or two verses. Make the verse your personal prayer – Eph. 6:17-18; 2 Ti 3:16.'
  },
  {
    title: 'Confess',
    time: 60,
    message: 'Confess the sins and the offenses in our conscience and remove everything that blocks our fellowship. Ask the Lord for forgiveness and cleansing – 1 Jn 1:7; Psa. 66:18; Isa. 59:1-2. (Heb. 9:14; 1 John 1:7)'
  },
  {
    title: 'Consecration',
    time: 30,
    message: 'Present our being to the Lord in a fresh way, giving Him all the ground in us – Ro. 12:1-2; 6:13, 19; Mr.12:30.'
  },
  {
    title: 'Thanksgiving',
    time: 30,
    message: 'Give thanks for everything; all the people, situations and things in our life and praise Him! – Eph. 5:20; 1 Thes. 5:18. (Psa. 32:1-2)'
  },
  {
    title: 'Petition',
    time: 60,
    message: 'Ask the Lord for your necessities, and growth. Pray for people who need salvation --- 1 Tim. 2:1; Eph. 6:18; Mt. 7:7; Psa. 143:8.'
  },
];

export const SECTIONS_ES = [
  {
    title: 'Invocación',
    time: 30,
    message: 'Invoca el nombre del Señor para poner tu mente en el espíritu – 1 Co. 12:3; Rom. 8:6; 10:12-13.'
  },
  {
    title: 'Orar',
    time: 60,
    message: 'Abre tu corazón, suavízalo y vacíate. Dile al Señor que lo amas -- 2 Co. 3:16; Sal. 62:8.'
  },
  {
    title: 'Orar-leer',
    time: 150,
    message: 'Usa un espíritu ejercitado para orar-leer uno o dos versículos. Haz del versículo tu oración personal – Ef. 6:17-18; 2 Ti 3:16.'
  },
  {
    title: 'Confesar',
    time: 60,
    message: 'Confiesa los pecados y ofensas en tu conciencia y quita todo lo que bloquee la comunión. Pide perdón y limpieza – 1 Jn 1:7; Sal. 66:18; Isa. 59:1-2. (Heb. 9:14; 1 Jn 1:7)'
  },
  {
    title: 'Consagración',
    time: 30,
    message: 'Preséntate al Señor de manera fresca, dándole todo el terreno en ti – Ro. 12:1-2; 6:13, 19; Mr.12:30.'
  },
  {
    title: 'Acción de gracias',
    time: 30,
    message: 'Da gracias por todo; personas, situaciones y cosas en tu vida y ¡alábalo! – Ef. 5:20; 1 Tes. 5:18. (Sal. 32:1-2)'
  },
  {
    title: 'Petición',
    time: 60,
    message: 'Pide al Señor por tus necesidades y crecimiento. Ora por personas que necesitan salvación --- 1 Tim. 2:1; Ef. 6:18; Mt. 7:7; Sal. 143:8.'
  },
];

export function getSections(lang) {
  return lang === 'es' ? SECTIONS_ES : SECTIONS_EN;
} 