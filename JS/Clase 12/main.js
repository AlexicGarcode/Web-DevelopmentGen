let perro = {
    name: 'Pugberto',
    edad: 7,
    color: 'azul',
};




/* 
const gatos = (name, age, color) => {

    let element ={
        name: name,
        age: age,
        color: color,
    }

    return element;

}

let gato1 = gatos('gato', 9,'cafe'); */

function gatos(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.netName = function(){
        
    }
}

let gato1 =new gatos('gato',9,'cafe');