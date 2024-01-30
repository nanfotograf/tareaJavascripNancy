//Creador de Nombres de Bandas Aleatorios

function crearNombresAleatorios(Presentamos) {
    console.log(`${Presentamos}`)
};
crearNombresAleatorios('Pepino Rock');
crearNombresAleatorios('Purple Soul');
crearNombresAleatorios('Dali&Caroline');
crearNombresAleatorios('Amarilloso Song');

//////-------------------

// Conversor de Emociones a Emoji

function convertirEmocionAEmoji(emocion) {
    let emojis = {
        feliz: '😁',
        triste: '😢',
        sorprendido: '😮',

    };
    return emojis[emocion.toLowerCase()] || 'emoji para esta emocion';

}
let emocion = 'sorprendido';
let emoji = convertirEmocionAEmoji(emocion);
console.log(emoji);

//-----------;

// Generador de Historias Absurdas:

function generarHistoriasAbsurdas() {
    let personaje = ['Hace unos 20 años el querido Dionisio, un pinguino argentino'];
    personaje[Math.floor(Math.random() * personaje.length)];
    let secuencia = ['viajaba por París, conoció muchas personas, y uno que sería su mejor amigo.'];
    secuencia[Math.floor(Math.random() * secuencia.length)];
    let amigo = ['Dicho ser fue un perro de nombre Vicente Van Gogh.'];
    amigo[Math.floor(Math.random() * amigo.length)];
    let historia = ['Fue quien le enseño muchas cosas, entre ellas hablar fránces perfectamente.'];
    historia[Math.floor(Math.random() * historia.length)];
    let relato = ['¡Bonjour Dionisio!.']
    relato[Math.floor(Math.random() * relato.length)];
    let relatoAmigo = ['¡¡¡Bonjour Vicente!!!, merci pour ton amitié!!!'];
    relatoAmigo[Math.floor(Math.random() * relatoAmigo.length)];

    let historiaDos = `${personaje} ${secuencia} ${amigo} ${historia} ${relato} ${relatoAmigo}. Absurdo ¿no?`;
    return historiaDos;
}
let laHistoria =
    generarHistoriasAbsurdas();
console.log(laHistoria);

// Simulador de viaje en el tiempo musical
let tiempoMusical = 'Viaje en el tiempo musical:';
console.log(tiempoMusical)
function viajeEnElTiempo(epoca) {
    let listaDeCanciones = {
        año1989: 'https://open.spotify.com/intl-es/track/6zwvB879PJSpTyFcg2wwnL?si=0e0ad481040f4dbd',
        año1994: 'https://open.spotify.com/intl-es/track/6JXghpembwocSY1Ky0TxTt?si=5f216172f6394cf1',
        año1979: 'BOYS DONT CRY https://open.spotify.com/intl-es/track/1QFh8OH1e78dGd3VyJZCAC?si=eb8e7cfc1ebb4681 1979 fue el año que determinó nuestras sociedades hasta la actualidad. Coincidieron tres fuerzas centrales: la caída del comunismo, el auge del neoliberalismo, y la politización y radicalización de la religión.',
        año2000: ' THE REASON https://open.spotify.com/intl-es/track/5B5eTk7DF8KVp1zpQoY1XY?si=50d65817e28b413e Mientras sonaba este hit por todos lados, la tecnología seguía avanzando en la que aparece el virus ILOVE YOU.Considerado uno de los virus cibernéticos más destructivos del mundo, ILOVEYOU se propagó por correo electrónico en cuestión de horas el 5 de mayo del 2000, convirtiéndose en una pandemia mundial. El asunto decía “ILOVEYOU” —de ahí su nombre— y parecía provenir de personas conocidas, lo cual inspiraba confianza para abrir el adjunto. Al hacerlo, el virus infectaba la computadora, destruía los documentos y se autoenviaba a las direcciones de correo de la agenda del usuario. Creado por piratas informáticos (hackers) en Filipinas, ILOVEYOU infectó a 50 millones de computadoras y obligó a la mayoría de las corporaciones, a la CIA, al Pentágono y al Parlamento Británico a clausurar sus sistemas de correo electrónico como medida cautelar.',


    };
    if (listaDeCanciones[epoca]) {
        console.log(listaDeCanciones[epoca]);
    } else {
        console.log('Recomienda otras canciones');
    }

}
let seleccionaAño = 'año2000';
viajeEnElTiempo(seleccionaAño);

// Creador de recetas culinarias de futuro:

let ingredientes = ['renacuajos', 'mariscos del Himalaya', 'carne', 'fideos de hojas de yerba mate', 'sal de marte', 'araña frita', 'salsa de frutilla a la berenjena', 'leche de cucaracha'];
let preparacion = ['-cortar en pequeñas porciones, mezclar y al horno por 40 min aprox', 'dejar reposar por 10 días, servir en hirviendo', 'cocinar según instrucciones de aliens', 'hervir y agregar mayonesa de durazno'];

function generarRecetas() {
    let recetaUno =
        ingredientes[Math.floor(Math.random() * ingredientes.length)];
    let preparar =
        preparacion[Math.floor(Math.random() * preparacion.length)];

    return `Recetas Culinarias del Futuro:
    Ingredrientes: ${recetaUno},
    Preparación: ${preparar}`;
}
console.log(generarRecetas());
// generador de planetas fantásticos
let nombres = ['HotizX9', 'YELLOWaRGÓN', 'TELURO', 'SOLSTICIO FRANCIO', 'LAWRENCIO ROJO'];
let caracteristicas = ['Atmósfera de color amarillo y constantes tormentas de arena.', 'Océanos de lava que brillan de color dorado por las noches.', 'Habitantes con rostros de gatitos, con trajes y naves futuristas.'];
function generarPlanetas() {
    let combinacionNombres =
        nombres[Math.floor(Math.random() * nombres.length)];
    let combinacionCaracteristicas =
        caracteristicas[Math.floor(Math.random() * caracteristicas.length)];

    return `Planetas Fantásticos: 
    Nombre: ${combinacionNombres},
    Características: ${combinacionCaracteristicas}`;
}
console.log(generarPlanetas());
















