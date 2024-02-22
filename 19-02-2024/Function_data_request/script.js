function highestAge(){
    let age = Number(window.prompt("Digite a sua idade: "));

    if(age >= 18){
        return ("Você é maior de idade.")
    }else{
       return ("Você é menor de idade.")
    }
}

let result = highestAge();
console.log(result);
