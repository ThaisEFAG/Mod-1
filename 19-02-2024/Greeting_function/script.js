function hour(){
    let getGreeting = parseFloat(window.prompt("Digite o horário atual: "));

    if(getGreeting < 4){
        return("Boa madrugada") 
    }else if(getGreeting < 12){
        return("Bom dia");
    } else if(getGreeting < 18){
        return("Boa tarde");  
    }else{
        return("Boa noite");  
    }

}

let result = hour();
console.log(result);