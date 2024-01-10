// se crea cada que se crea un funcion 
const myglobal = 0;

//funciones anidades
// accecibilidade dentro de funciones anidadas
function myfuntion(){
    const mynumber = 1;
    console.log(myglobal);

    //funcion interna tambie se llama closure
    function parent(){
        const inner = 2;
        console.log(mynumber, myglobal);

        function hijo(){
            console.log(inner, mynumber, myglobal);
        }
        return hijo();
    }
    return parent();
}