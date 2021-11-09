/* alert('Hola'); */


/* var element = document.getElementsByTagName('p')[1];  

var element = document.getElementsByClassName('animals')[2]; 

var element = document.getElementbyId('perro');


*/


/* SELECCIONAR ELEMENTOS

Todo se guarda en un array

*/


/* document.getElementsByTagName('body')[0].innerHTML = '<main> </main>';

var element1 = '<p class="animals">Gato :3 </p>';
var element2 = '<p class="animals">"perro" :3</p>';
var element3 = '<div class="animals" href="#" onclick="cambiarTexto()">Click</div><br>';
var element4 = '<div class="popup" id="popup-1"></div>';
var element5 = '<div class="overlay"></div>';
var element6 = '<div class="close-bt😂 onclick="togglePopup()">&times;</div>';
var element7 = '<div class="content"></div>';
var element8 = '<button onclick="togglePopup()">Show Popup</button>';
var element9 = '<div class="box">Hola K ase <img src="img/skull.png" alt="calakita"></img></div>';
 
document.getElementsByTagName('main')[0].innerHTML = element1 + element2 + element3 + element8;

function cambiarTexto(){
    document.getElementsByTagName('p')[0].innerHTML = '<h2> perro </h2>';
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
} */
    



var button = '<button onclick="togglePopup()">Show Popup</button>';

document.getElementsByTagName('main')[0].innerHTML = button;

