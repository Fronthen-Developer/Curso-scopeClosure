function saludo(){
    let username = 'oscar'

    function displayusername(){
        return `hola ${username}`
    }
    return displayusername();
}

const g = saludo();
console.log(g);
console.log(g());