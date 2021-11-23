/* var animal = {
    tipo: 'perro',
    nombre: 'Pugberto',
    edad: 7,
    medicamentos: [
        'Paracetamol',
        'Desparacitante',
        'Cafiaspirinas',
        {
            alergias: [
                ['perro'], 
                ['gato'], 
                ['perico']
            ]
        },
    ],
};
 */

//OBJETOS

//Funciones y eventos

/* var marginTop = 0;
var velocidad = 10;

function mover(flecha){
    var burger = document.getElementById('burger');

    switch (flecha) {
        case 0:
            console.log('izquierda');           
            break;

        case 1:
            console.log('arriba');           
            break;    
    
        case 2:
            marginTop += velocidad;
            burger.style.marginTop = marginTop + 'px';
            console.log('abajo');           
            break;

        case 3:
            console.log('derecha');           
            break;

        default:
            break;
    }

    
    
   
} */


/*     switch (direction) {
        case 'left':
            console.log('left');
            break;

        case 'up':
            console.log('up');
            break;

        case 'down':
            marginTop -= velocidad;
            burger.style.marginTop = marginTop + 'px';
            console.log('down');
            break;

        case 'right':
            console.log('right');
            break;
    
        default:
            break;
    }







    marginTop += velocidad;
    burger.style.marginTop = marginTop + 'px';
    console.log(direction);
} */

var marginTop = 0;
var velocidad = 10;

function mover(flecha){

    var burger = document.getElementById('burger');

    switch (flecha) {
        case 0:
            console.log('izquierda');
            break;
        case 1:
            console.log('arriba');
            break;
        case 2:
            console.log('abajo');
            break;
        case 3:
            console.log('derecha');
            break;
    
        default:
            break;
    }

    marginTop += velocidad;
    burger.style.marginTop = marginTop + 'px';
    




}