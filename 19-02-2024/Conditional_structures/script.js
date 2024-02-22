

function conditional() {
    let firstNumber = Number(window.prompt("Digite o primeiro número: "));
    let secondNumber = Number(window.prompt("Digite o segundo número: "));
    let tertiaryNumber = Number(window.prompt("Digite o terceiro número: "));

if (firstNumber > secondNumber && firstNumber > tertiaryNumber){
    console.log(`O maior número é ${firstNumber}`);
} else if (secondNumber > firstNumber && secondNumber > tertiaryNumber){
    console.log(`O maior número digitado foi ${secondNumber}`);
} else if (tertiaryNumber > firstNumber && tertiaryNumber > secondNumber){
    console.log(`O maior número digitado foi ${tertiaryNumber}`);
} else {
    console.log("Todos os números são iguais");
}
}


let resultado = conditional();
console.log(resultado);