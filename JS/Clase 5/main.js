var screenCal = 0;

function clearScreen(){
    document.getElementById('screen').innerText = '0';
}

function upsateScreen(){

if (screenCal == 0){
    document.getElementById('screen').innerText = num;
    screenCal = num;

}else{
    screenCal = screenCal + num;
    updateScreen();
}

    

}