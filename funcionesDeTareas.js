const fs = require('fs');

const db = require('./database/tarea.json');

const crearTarea = (titulo, estado) => {
    const tarea = {
        titulo : titulo,
        estado : estado,
    }

    const currenDatabase = db

    db.push(tarea)

    const tareaJson = JSON.stringify(db, null, 4)

    fs.writeFileSync('./database/tarea.json', tareaJson)
};

function traerTarea(){ 
    return JSON.parse(fs.readFileSync("./database/tarea.json"));
};

const showEstado = (estado) => {
    let tarea = traerTarea();
    console.log(tarea.filter(item => item.estado == estado));
};

const showTareas = () => {
    db.forEach(function(element){
        return console.log(element);
    })
};

const consultarTareas = (titulo) => {
    let tarea = traerTarea();
    console.log(tarea.filter(item => item.titulo == titulo));
};

module.exports = {crearTarea , consultarTareas , showTareas , showEstado};