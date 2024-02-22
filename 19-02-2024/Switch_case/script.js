function sorteioNumber(){
    let luckyNumber = window.prompt("Digite uma vogal: ");
let play = luckyNumber.toLocaleLowerCase();
    switch(play){
        case "a":
            return("O seu número da sorte é 3.");
            break
        case "e":
            return("O seu número da sorte é 5.");
            break
        case "i":
            return("O seu número da sorte é 8.");
            break
        case "o":
            return("O seu número da sorte é 2.");
            break
        case "u":
            return("O seu número da sorte é 13 kkk.");
            break
            
            default:
                return("A letra digitada não é uma vogal.");
                break
}
}

let resultado = sorteioNumber();
console.log (resultado);