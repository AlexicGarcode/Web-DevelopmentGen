/* function pantalla(){ */
    /* var widthVentana = window.innerWidth;
    var heightVentana = window.innerHeight; */
    /* var anchoDiv = 100; */
    /* document.getElementsByTagName('body')[0].innerHTML = heightVentana;
     */
/*     anchoDiv++;
    document.getElementsByTagName('div')[0].style.width = anchoDiv + 'px';
} */


/* window.onresize = pantalla; */

var container = document.getElementById('container');
var nogara = document.getElementById('nogara');

/* container.addEventListener('dragover', allowDrop);
container.addEventListener('drop', drop);

nogara.draggable = true;
nogara.addEventListener('dragstart', drag); */

function allowDrop(event){
    event.preventDefault();
    
}

function drop(event){
    var data = event.dataTransfer.getData("text");
    /* event.target.appendChild(document.getElementById(data)); */
    /* console.log(event); */

    if (document.getElementById(data).dataset.cont == event.target.id || event.target.id == 'container2') {

        event.target.appendChild(document.getElementById(data));
        
    }

}


function drag(event){
    event.dataTransfer.setData("text", event.target.id);
    /* console.log(event); */
}

if (event) {
    
}
