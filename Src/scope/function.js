// validares si creando una variable dentro de una funcion no permite acceder dentro y fuera de la funcion 

function saludo(){
    //declaramos y asignamos a nuestra variable 
    let username = 'ana'
    console.log(username);


    if(username === 'ana'){// validamos que sea igual en valor y tipo 
        console.log(`hola ${username}`);
    }
}
saludo();

console.log(username);