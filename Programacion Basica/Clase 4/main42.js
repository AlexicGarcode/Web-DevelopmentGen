/*

*/
var animales = ['Perro', 'Gato', 'Tiburon', 'Oso', 'araña'];

/* document.write(animales);
console.log(animales); */


/* document.write(animales[0]) */


/* for (let index = 0; index < 5; index++) {
    document.write(animales[index]);
    document.write('<br>');
    
}
 */


/* var animales = [
    'Tigre',
    'Dragon',
    'Perrote',
    'Guajolote',
    'Cocodrilo',
    [
        4,5,6
    ]
]; */



var imgs = [
'1',
'2',
'3',
'4',
]
var names = ['Burgan', 'Skull', 'Penguin', 'Guitar'];


for (let index = 0; index < imgs.length; index++) {
    document.write('<img src="img/' + imgs[index] + '.png" alt="">');
    
    
}

document.write('<br>');


var names = ['Burgan', 'Skull', 'Penguin', 'Guitar'];

for (let index = 0; index < names.length; index++) {
    document.write(names[index] + ' ' + ' ');
    
}

/* for (let index = 0; index < imgs.length; index++) {
    document.write('<img src="img/' + imgs[index] + '.png" alt="">');
    
    for (let index = 0; index < names.length; index++) {
        document.write(names[index][index] + ' ' + ' ');
    
}

document.write('<br>');

    
} */