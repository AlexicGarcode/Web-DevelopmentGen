


function user(){

    var nombre = prompt('Cual es tu nombre?');
    /* var edad = prompt('Cual es tu edad?') */
    /* console.log(nombre); */
    bienvenida(nombre);

}

function bienvenida(nombre,edad = 45){
    document.write('Bienvenido ' + nombre  + ' Ya eres parte de la comunidad ');
    document.write(edad);

    function perfil (){
        document.getElementsByTagName('body')[0].innerText = '';

        document.write('User: ' + nombre + '<br>');
        document.write('Edad: ' + edad);
    }

    setTimeout(function(){
        perfil(nombre,edad);
    },5000);


}

// si no quieres utilizar una funcion simplemente la comentas para 
// que no se ejecute y ya
/* user(); */

function suma(num1,num2){
    var total= num1 + num2;
    console.log(total);

    
    return total
}

/* var perro = suma(); */




function mensaje(nombre){
    return 'hola ' + nombre + ' Feliz dia';

}

var persona1 = mensaje('Pedro');
