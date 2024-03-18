
let select = document.getElementById("choice-product");

let array = [];

function addCar(){
    
    let optionC = select.options[select.selectedIndex].value;
    
    array.push(Number(optionC));
    
    console.log(array);

}

let showItens = document.querySelector('.show-Itens')
   
    select.addEventListener('change', function(){
    var index = select.selectedIndex;
    var textoIndex = select.options[index].text;
    var para = document.createElement('p');
    para.textContent = textoIndex;
    showItens.appendChild(para);
    
})

let precoTotal = document.querySelector('#total-preco');
let total = 0;

function somaCar (){
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    precoTotal.textContent = total;
    array.length = 0;
}

