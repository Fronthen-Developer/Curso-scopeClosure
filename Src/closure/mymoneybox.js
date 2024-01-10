/*/se crea un funsion la cual recibe un argumento que son las monedas
function moneybox(coins){
    let sevecoins = 0;

    sevecoins += coins;
    console.log(`mymoneybox ${sevecoins}`);
}

moneybox(5);
moneybox(6);**/

function moneybox(){
    let savecoins = 0;
    function countcoin(coins){
        savecoins+=coins
        console.log(`moneybox $ ${savecoins}`);

    }
    return countcoin;
}
const mymoneybox = moneybox();
mymoneybox(5);
mymoneybox(5);
mymoneybox(15);

const moneyboxAna = moneybox();
moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);

