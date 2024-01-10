// vamos a enender las variable y ver como fucnioes la asignancion y otros

//variables
var a; //declarando
var b = 'b'; // declarams / asignamos
b = 'bb' // reasignacion
var a = 'aa' //redeclaracion

// global Scope
// cualqier variable que se encuntre en la parte superior del documento pasan a ser varibles globales
var fruit = 'Apple' // variable global 


function bestfruit(){
    console.log(fruit);
}
bestfruit();


function countries(){
    country = 'colombia' // global va poder ser acedida afuera
    console.log(country);
}

countries();
console.log(country);