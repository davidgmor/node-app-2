const fs = require('fs');

let toDoList = [];

const getList = () => {

    cargarDB();

    return toDoList;
}

const actualizar = (description, completed) => {

    cargarDB();
    let index = toDoList.findIndex(tarea => tarea.description === description)

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar', err)
        }
    });
}

const cargarDB = () => {

    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = []
    }

}

const crear = (description) => {

    cargarDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo;
}

const borrar = (description) => {

    cargarDB();

    let newList = toDoList.filter(tarea => tarea.description !== description);

    if (newList.length !== toDoList.length) {
        toDoList = newList
        saveDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getList,
    actualizar,
    borrar
}