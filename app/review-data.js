// Revisión documental 06.09.2026. Instantáneas explícitas, sin sincronización automática.
export const reviewDate='2026-09-06';
export const incomeSource='https://opendata.euskadi.eus/webopd00-dataset/es/contenidos/estadistica/udalmap_indicador_206/es_def/adjuntos/indicator.shtml';
export const income=[{year:2001,value:25350},{year:2003,value:27157},{year:2006,value:33144},{year:2009,value:35440},{year:2011,value:34759},{year:2013,value:34086},{year:2014,value:34081},{year:2015,value:34573},{year:2016,value:35219},{year:2017,value:35676},{year:2018,value:36156},{year:2019,value:37770},{year:2020,value:37855},{year:2021,value:38973},{year:2022,value:41345},{year:2023,value:44628}];
export const grantSources={2023:'https://drive.google.com/file/d/1EjG2Y4-8xR0W-EO61fonjxY15wO1KQ_h/view',2024:'https://drive.google.com/file/d/1YZRlvc5VyF7KvWwig9ogGXbogmeq1NrG/view'};
// Encabezados, totales y sumas se conservan por separado; ninguna discrepancia se resuelve por suposición.
export const grants=[
{year:2023,program:'Dinamización cultural',declared:59920,printed:null,sum:59920,scope:'Cultura',status:'Concuerda',note:'19 importes; conciliación aritmética del texto extraído, sin acreditar pago.'},
{year:2024,program:'Dinamización cultural',declared:59955,printed:59955,sum:59954.99,scope:'Cultura',status:'Revisar',note:'28 filas, tres con 0 €. Diferencia de 0,01 € entre suma y total; origen por confirmar.'},
{year:2023,program:'Danzas vascas',declared:5000,printed:null,sum:5000,scope:'Cultura',status:'Concuerda',note:'Cinco grupos, 1.000 € por grupo.'},
{year:2024,program:'Danzas vascas',declared:5000,printed:5000,sum:5000,scope:'Cultura',status:'Concuerda',note:'Cinco grupos, 1.000 € por grupo.'},
{year:2023,program:'Promoción y uso del euskera',declared:7948,printed:null,sum:7498,scope:'Euskera',status:'Bloqueado',note:'El encabezado declara 7.948 € y las filas suman 7.498 €: diferencia de 450 €.'},
{year:2024,program:'Promoción y uso del euskera',declared:7488.75,printed:7935,sum:7488.74,scope:'Euskera',status:'Bloqueado',note:'Encabezado 7.488,75 €; total impreso 7.935 €; suma de filas 7.488,74 €. Requiere cotejo con resolución.'},
{year:2023,program:'Fiestas de barrios',declared:29970,printed:null,sum:29970,scope:'Fiestas',status:'Concuerda',note:'Seis asociaciones; no equivale al gasto total en fiestas.'},
{year:2024,program:'Fiestas de barrios · primera tabla',declared:30000,printed:30000,sum:30000,scope:'Fiestas',status:'Revisar',note:'Existe una segunda tabla de 9.000 €. Verificar relación entre ambos decretos antes de agregar.'},
{year:2024,program:'Fiestas de barrios · segunda tabla',declared:9000,printed:9000,sum:8999.99,scope:'Fiestas',status:'Revisar',note:'Suma de filas 8.999,99 €. No se presume que sea una ampliación acumulable.'}
];
export const sourceLinks=[
{name:'Open Data Euskadi',url:'https://opendata.euskadi.eus/inicio/',period:'Catálogo consultado 06.09.2026',use:'Descubrir conjuntos y conservar licencia, unidad, ámbito y fecha.',state:'Portal consultado'},
{name:'Eustat · banco municipal',url:'https://es.eustat.eus/udalak/indice.html',period:'Variable según operación',use:'Población, edad, estudios y renta. La portada facilitada devolvió error; hay tablas indexadas.',state:'Acceso parcial'},
{name:'Udalmap · renta familiar total',url:incomeSource,period:'2001–2023 · años publicados',use:'16 observaciones de Santurtzi incorporadas; euros corrientes. No es renta individual.',state:'Datos incorporados'},
{name:'Kulturklik · agenda y API',url:'https://opendata.euskadi.eus/api-culture/',period:'Agenda consultada: actualización 04.09.2026',use:'Propuesta: contrastar eventos por municipio e identificador. Publicación en agenda no acredita celebración ni asistencia.',state:'Conexión propuesta'},
{name:'Kulturklik · próximos eventos',url:'https://opendata.euskadi.eus/catalogo/-/kulturklik-agenda-cultural/',period:'Frecuencia declarada: diaria',use:'Agenda externa; no se ha ejecutado importación de eventos.',state:'Ficha consultada'},
{name:'Hacienda y Finanzas · Gobierno Vasco',url:'https://www.euskadi.eus/gobierno-vasco/departamento-hacienda-finanzas/inicio/',period:'Presupuestos autonómicos 2026 anunciados',use:'Contexto autonómico. Nunca sustituye las cuentas del Ayuntamiento de Santurtzi.',state:'Portal consultado'},
{name:'Ayuntamiento · presupuestos',url:'https://www.santurtzi.eus/es-ES/informacion-ciudadania/Economia-Hacienda/Paginas/Presupuesto.aspx',period:'Detalle vigente pendiente de lectura',use:'Solicitar presupuesto inicial, definitivo y liquidación por programa y capítulo. Resultado indexado; página completa no recuperada.',state:'Acceso parcial'},
{name:'Economía, Trabajo y Empleo',url:'https://www.euskadi.eus/gobierno-vasco/departamento-trabajo-empleo/',period:'Portal consultado 06.09.2026',use:'Contexto laboral para estudiar barreras y tejido profesional; no atribuir empleo al efecto de la política cultural.',state:'Portal consultado'},
{name:'Lanbide · estadísticas',url:'https://www.lanbide.euskadi.eus/estudios-estadisticas/',period:'Ficheros 2026; fechas distintas por operación',use:'Paro, demanda, contratos y RGI con ámbito municipal. No equivalen a empleo cultural ni a personas únicas contratadas.',state:'Catálogo consultado'},
{name:'Udalmap · información municipal',url:'https://www.euskadi.eus/indicadores-municipales/web01-a2ogaeko/es/',period:'Periodo propio por indicador',use:'Contexto territorial e inventario de equipamientos; verificar cobertura de Santurtzi antes de cargar.',state:'Portal consultado'}
];
export const roadmap=[
['P1','Contabilidad cultural','Conciliar presupuesto inicial, definitivo, obligaciones reconocidas y pagos; separar Cultura, Euskera, Fiestas y Deporte.','Intervención + Cultura','Gasto cultural por habitante, peso cultural y ejecución con denominadores compatibles.'],
['P1','Equipamientos','Verificar catálogo municipal, direcciones, titularidad, accesibilidad, horarios y coordenadas. Un centro con varios usos no cuenta varias veces como edificio.','Cultura + Patrimonio','Mapa con puntos verificados; aforo y reservas sin solapamientos.'],
['P1','Participación y barreras','Combinar encuesta a participantes y no participantes, entrevistas y registro administrativo. Conservar muestra, método, periodo y tasa de respuesta.','Cultura','Satisfacción y barreras observadas, sin inferir representatividad de muestras de conveniencia.'],
['P2','Agenda Kulturklik','Importar primero a una cola de contraste, deduplicar por identificador y sesiones; confirmar celebración y municipio.','Cultura + Informática','Oferta publicada separada de actividades realizadas y asistencia.'],
['P2','Empleo cultural','Fijar perímetro y versión CNAE; distinguir residencia, centro de trabajo, contratos y personas. Excluir apuestas del núcleo cultural propuesto.','Análisis de datos','Publicar solo si la desagregación municipal existe y es compatible.'],
['P2','Sostenibilidad','Vincular objetivos a acciones y evidencias; medir energía, residuos o movilidad solo con fuentes contrastables.','Cultura + Medio ambiente','Correspondencias FEMP/UNESCO propuestas; no índice ODS oficial.'],
['P3','Asistente de consulta','Responder únicamente con datos validados y referencias; reconocer ausencias y bloquear inferencias causales no justificadas.','Cultura + Informática','Propuesta de piloto; ninguna IA conectada en este MVP.']
];
export function grantDifference(g){return Math.round((g.sum-g.declared)*100)/100;}
