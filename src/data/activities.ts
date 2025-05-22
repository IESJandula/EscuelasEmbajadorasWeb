// Tipos de actividades
export interface Activity {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  year: string; // Año académico: "23-24" o "24-25"
}

// Actividades obtenidas de la web original, organizadas en orden cronológico (de más reciente a más antigua)
export const activities: Activity[] = [
  {
    id: 1,
    title: 'CELEBRACIÓN DEL DÍA DE EUROPA',
    date: '2024-05-21',
    content: '"Unida en la diversidad", reza el lema de la Unión Europea, y diversa ha sido la manera de celebrar el Día de Europa en el IES Jándula, quedando patente la enriquecedora conexión entre Erasmus+, eTwinning y Escuelas Embajadoras. 🤝🏻 Ha habido lugar para que nuestros eTwinners dieran a conocer nuestros proyectos por las clases y para acercarse jugando al proceso legislativo del Parlamento Europeo, dialogar acerca de cómo mejorar la UE, crear vídeos sobre la Europa que queremos y votar propuestas para el futuro de la UE, con la presencia de embajadores junior en nuestro proyecto Erasmus+ Act(ive) European.',
    image: '/img/1716330250728.jpg',
    year: "23-24"
  },
  {
    id: 2,
    title: 'CONCURSO DE VÍDEOS "UNA EUROPA ADAPTADA A LA ERA DIGITAL"',
    date: '2024-05-20',
    content: '🎥🇪🇺 Concurso de vídeos "Una Europa adaptada a la era digital". 📌 Si eres estudiante de 4° ESO del IES Jándula, echa un vistazo a este nuevo concurso que nos llega de la mano del Centro Europe Direct Andalucía Rural. 👀 Mira las bases, los plazos y... ¡a por todas! 💪🏻',
    image: '/img/1716342564117.jpg',
    year: "23-24"
  },
  {
    id: 3,
    title: 'ENCUENTRO VIRTUAL CON LA EURODIPUTADA MARIA EUGENIA RODRÍGUEZ',
    date: '2024-05-16',
    content: 'Hoy, nuestros embajadores y embajadoras junior del Parlamento Europeo han celebrado un interesante encuentro virtual con la eurodiputada Doña María Eugenia Rodríguez, en el que han podido conocer de cerca su día a día y sus objetivos, motivaciones, satisfacciones y valoraciones respecto a sus responsabilidades.',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 4,
    title: 'PROYECTO ACTIVE EUROPEAN',
    date: '2024-05-15',
    content: 'Cerramos nuestro proyecto Act(ive) European – Tracing and Living Democracy in the EU con trabajo en grupos internacionales para desarrollar con un role play el proceso legislativo del Parlamento Europeo en comisiones, dialogar acerca de cómo mejorar la UE, crear vídeos sobre la Europa que queremos y votar propuestas para nuestro particular manifiesto por la UE. ¡Día de Europa de lo más completo!',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 5,
    title: 'RECIBIMIENTO DE ALUMNOS DEL GOETHE GYMNASIUM',
    date: '2024-05-10',
    content: 'Esta semana recibimos a nuestros colegas del Goethe Gymnasium para nuestro proyecto Act(ive) European – Tracing and Living Democracy in the European Union.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 6,
    title: 'ENCUENTRO CON ALUMNADO DEL IES LUIS CARRILLO DE SOTOMAYOR DE BAENA',
    date: '2024-04-19',
    content: 'Esta mañana, nuestros embajadores junior del Parlamento Europeo han celebrado un encuentro con alumnado de la asignatura de UE del IES Luis Carrillo de Sotomayor de Baena, propiciado por el centro Europe Direct de la misma localidad. 🗳️ La actividad ha permitido acercar la democracia y el papel del Parlamento Europeo en ella a través de una simulación del trabajo legislativo en distintas comisiones.',
    image: '/img/IMG_20240419_125219.jpg',
    year: "23-24"
  },
  {
    id: 7,
    title: 'SESIÓN DE EUROSCOLA: ¿UNA EUROPA DE IGUALDAD DE OPORTUNIDADES?',
    date: '2024-04-11',
    content: 'Nuestro grupo de embajadores junior del Parlamento Europeo ha conectado telemáticamente con la sede de esta institución en Estrasburgo para participar en la sesión de hoy de Euroscola, centrada en el tema "¿Una Europa de igualdad de oportunidades? La defensa del Parlamento Europeo de los derechos de las mujeres y la igualdad de género".',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 8,
    title: 'ÚLTIMOS DÍAS DEL ERASMUS EN ALEMANIA',
    date: '2024-03-24',
    content: 'Ejercer una ciudadanía responsable exige también preguntarse por los déficits democráticos y proyectar nuevas visiones propias sobre el futuro de la UE y su democracia. A ello se dedicaron nuestros chicos y chicas en los dos últimos días del proyecto, que se completó con la visita a Aquisgrán, desde donde Carlomagno dominó una buena parte de Europa.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 9,
    title: 'NUESTROS EMBAJADORES JUNIOR RECORREN LA HISTORIA EUROPEA EN LA HOUSE EUROPEAN UNION',
    date: '2024-03-22',
    content: 'Desarrollar un proyecto sobre democracia y ciudadanía europea y poder trasladarse al corazón de la UE para hacer un apasionante recorrido por la historia europea en la House of European Union y conocer el Parlamento Europeo de Bruselas🇧🇪 desde dentro es un plan insuperable para nuestro grupo, más aún para nuestros embajadores junior.',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 10,
    title: 'VISITA A STOLBERG CON ALUMNOS DEL GOETHE GYMNASIUM',
    date: '2024-03-19',
    content: 'Volvemos a Stolberg con nuestros colegas del Goethe Gymnasium para nuestro proyecto European – Tracing and Living Democracy in the European Union. 🗳️ ¿Qué es democracia? ¿Qué evolución han seguido Alemania y España hasta consolidarla? ¿Qué camino las ha llevado a formar parte de la Unión Europea? ¿Cuál es el proceso legislativo en la UE? Estas son algunas de las preguntas que han tratado de responder nuestros estudiantes al inicio del proyecto combinando trabajo y juego en equipo.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 11,
    title: 'DÍA INTERNACIONAL DE LA MUJER',
    date: '2024-03-08',
    content: 'Desde el programa EPAS hemos colaborado con el Plan de Igualdad del centro, que trabajaba el lema Invertir en las mujeres, acelerar el progreso a través de la idea de que nadie les corte las alas. Con ello, hemos colaborado con decenas de EPAS españolas en un lazo para concienciar sobre ello que ha quedado en nuestro infopoint, además de aparecer junto a la creación pensada para la ocasión en nuestro centro.',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 12,
    title: 'NUESTROS EMBAJADORES JUNIOR PARTICIPAN EN LAS OLIMPIADAS SOBRE LA UNIÓN EUROPEA EN SEVILLA',
    date: '2024-02-25',
    content: 'Este sábado, cinco de nuestros embajadores junior del Parlamento Europeo han participado en las Olimpiadas sobre la Unión Europea organizadas por Equipo Europa en Sevilla. Con ellos, el IES Jándula ha sido el único centro de la provincia de Jaén entre los que se daban cita en el evento. ✍🏻 En un ensayo individual han reflexionado sobre el futuro de la UE y argumentado con sentido crítico la importancia de votar en las próximas elecciones europeas del 9 de junio.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 13,
    title: 'CHARLA DE PAULA PÉREZ A NUESTROS ALUMNOS DE 4º ESO SOBRE LA IMPORTANCIA DE VOTAR',
    date: '2024-02-25',
    content: 'Esta semana vino a dar una charla a los estudiantes de 4° B Paula Pérez, secretaria del Equipo Europa en Andalucia. Estuvo explicando curiosidades sobre la Unión Europea y, especialmente, por qué es tan importante participar en las elecciones europeas del 9 de junio. ✒️ También estuvo aconsejando y animando a nuestros participantes en las Olimpiadas sobre la Unión Europea de este fin de semana en Sevilla. Gracias una vez más.',
    image: '/img/1708434459616.jpg',
    year: "23-24"
  },
  {
    id: 14,
    title: 'PROYECTO ERASMUS: VISITA A NUESTROS PARQUES NATURALES Y CASTILLOS',
    date: '2024-02-20',
    content: '🙌 Reforzando vínculos con nuestros compañeros finlandeses construimos Europa a través de sus gentes y valores. Un estilo de vida sostenible que nos recuerda la importancia de la conservación del patrimonio natural y cultural. Tras acogida en el ayuntamiento de Andújar y visita guiada, nuestros 🌎 parques naturales y 🏰 castillos hablan por sí mismos…',
    image: '/img/1708434011861.jpg',
    year: "23-24"
  },
  {
    id: 15,
    title: 'ENCUENTRO CON ALUMNOS DEL PROYECTO ERASMUS DE ALEMANIA E ITALIA',
    date: '2024-01-16',
    content: '🤝🏻 Mañana intensa con el acto de apertura en el IES, icebreaking, visita al taller del vehículo ecológico Lince, desayuno tradicional, tour guiado por la ciudad a cargo de alumnado del programa EPAS, cálida acogida en el ayuntamiento de Andújar, visita al Centro de Interpretación de la Cerámica, presentaciones de los distintos grupos sobre dietas nacionales, sus ventajas y desventajas y, cómo no, mesa para compartir en un ambiente inmejorable. ¡Que no pare!',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 16,
    title: 'NUESTRO EQUPO DE EMBAJADORES Y EMBAJADORAS JUNIOR DEL PARLAMENTO EUROPEO LES DESEA UNA FELIZ NAVIDAD',
    date: '2023-12-26',
    content: 'Nuestro equipo de embajadores y embajadoras junior del Parlamento Europeo les desea una Feliz Navidad y próspero año nuevo.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 17,
    title: 'CHARLA DEL EUROPE DIRECT ANDALUCÍA RURAL DE BAENA',
    date: '2023-12-16',
    content: 'Nuestros embajadores junior del Parlamento Europeo disfrutaron de una charla amena organizada por el centro Europe Direct Andalucía Rural de Baena y recibieron su pin con la bandera de la UE. Junto a su responsable, Raquel Moreno, cuatro jóvenes de Alemania e Italia que participan en un programa europeo de voluntariado expusieron unas interesantes pinceladas sobre el origen, objetivos y valores de la UE, mencionando también la influencia real en su día a día y algunas oportunidades de participación para jóvenes.',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 18,
    title: 'CHARLA Y DESAYUNO CON DULCES EUROPEOS',
    date: '2023-10-13',
    content: 'Esta mañana hemos concluido nuestros Erasmus days compartiendo charla y desayuno con un rico surtido de delicias de Turquía, Eslovenia, Eslovaquia, Polonia, Finlandia y Austria. Hemos tenido muy presentes a nuestros socios y amigos de otros países. Pues... ¡se ha quedado un viernes muy dulce!🍪',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 19,
    title: 'REUNIÓN VIRTUAL DE ALUMNOS DE 3º ESO CON ESTUDIANTES EN FINLANDIA',
    date: '2023-10-11',
    content: 'Dentro de las actividades programadas para los Erasmus days que estamos celebrando esta semana, un grupo de 3° ESO ha podido contactar por videollamada con los estudiantes y profesores que se encuentran estos días en Finlandia en uno de nuestros proyectos. Ellos y sus anfitriones han contestado algunas preguntas para saber más del proyecto, el lugar, sus costumbres y cultura, así como de la enriquecedora experiencia y las expectativas.',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 20,
    title: 'PRIMERAS JORNADAS DEL PROGRAMA ESCUELAS EMBAJADORAS DEL IES JÁNDULA',
    date: '2023-10-02',
    content: 'El IES Jándula se ha estrenado en las enriquecedoras jornadas del programa Escuelas Embajadoras del Parlamento Europeo, organizadas en la Oficina de dicha institución en Madrid. A ellas ha asistido el coordinador en nuestro centro, D. Luis Medina Tornero, quien lo desarrollará junto a profesorado y algunos estudiantes que se convertirán en nuestros embajadores junior del Parlamento Europeo durante este curso.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  },
  {
    id: 21,
    title: 'CELEBRACIÓN DEL DÍA EUROPEO DE LAS LENGUAS',
    date: '2023-09-26',
    content: 'En nuestro instituto celebramos el Día Europeo de las Lenguas para que nuestro alumnado conozca la importancia y ventajas de la diversidad linguistica y cultural. Let\'s enjoy our cultural and linguistic wealth!',
    image: '/img/Logo_parlamento_europeo.jpg',
    year: "23-24"
  },
  {
    id: 22,
    title: 'IES JÁNDULA SE UNE AL PROGRAMA ESCUELAS EMBAJADORAS',
    date: '2023-08-23',
    content: 'El IES Jándula se incorpora al programa Escuelas Embajadoras del Parlamento Europeo en el curso 2023-24. Persigue estimular el conocimiento de Europa y de la democracia parlamentaria europea entre los jóvenes, proporcionándoles un conocimiento activo de la Unión Europea y del Parlamento Europeo en particular. Se trata tanto de enseñar datos sobre la Unión Europea como de dar la oportunidad de experimentar la ciudadanía europea: lo que significa la Unión en la vida cotidiana y lo que se puede hacer para lograr que, en el futuro, Europa sea como sus ciudadanos deseen.',
    image: '/img/IES-JANDULA.png',
    year: "23-24"
  }
];
