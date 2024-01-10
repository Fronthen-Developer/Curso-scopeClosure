// las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de dicho bloque 
function fruits(){
    //variables definidas dentro del {} son de bloque
if(true){
    var fruit1 = 'limon' // con la palabra reservada var la puedo acceder dentro de la funcion y fuera
    let fruit2 = 'pera'// unicamente la puedo acceder dentro del bloque {}
    const fruit3 = 'pan' //  unicamente la puedo acceder dentro del bloque {}

    console.log(fruit2);
    console.log(fruit3);
}
    console.log(fruit1); // es la unica que se imprime 

}
fruits();

