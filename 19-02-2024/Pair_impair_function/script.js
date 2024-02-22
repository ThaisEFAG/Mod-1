function parimpar(){
    let parimpa = Number(window.prompt("Digite um número para saber se é par ou impar: "));

    if(parimpa % 2 === 0){
        console.log(`O número ${parimpa} é par.`)
    } else if(parimpa % 2 != 0){
        console.log(`O número ${parimpa} é impar`);
    }else {
        console.log("O número é zero.");
    }
}

