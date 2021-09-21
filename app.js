const logic = require('./funcionesDeTareas');

//logic.crearTarea('Hacer comida', 'completo');

//logic.consultarTareas('Leer libro')

let opciones = process.argv[2];

const EjecutarMenu = (opcion) => {
    switch (opcion) {
        case 'listar' :
            logic.showTareas();
            break;
        case 'crear' :
            logic.crearTarea('Hacer mercado', 'completo');
            break;
        case 'filtrarPorEstado' :
            logic.showEstado('completo');
            break;
        case 'consultarTarea' :
            logic.consultarTareas('Limpiar arenero');
            break;
        case undefined : 
            console.log('Atención - Tienes que pasar una acción');
            break;
        default :
            console.log('No entiendo qué quieres hacer');
            break;
    }
}

EjecutarMenu(opciones);

console.log('guardado...')