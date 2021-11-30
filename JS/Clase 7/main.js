
document.getElementsByTagName('button')[0].addEventListener('click', mensaje);
document.getElementsByTagName('button')[1].addEventListener('click', mensaje);

function mensaje(event){
    event.target.style.backgroundColor = 'black';
    console.log(event);
}


   