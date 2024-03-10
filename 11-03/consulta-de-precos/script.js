
// function stringNormal(str) {
//     // return str.normalize("NDF").replace(/[\u0300-\u036f]/g, "").toLowerCase();
// }

let search = document.querySelector(".value-one");

search.addEventListener("click", price);
function price(){   
   
   let product = document.querySelector(".record").value;
   let productOne = product.toLowerCase();
    switch(productOne){

    case 'arroz':
    case '1':
        alert('R$ 25,00');
        break
    case 'feijão':
    case '2':
        alert('R$ 16,00');
        break
    case 'açucar':
    case '3':
        alert('R$ 20,00');
        break
    case 'macarrão':
    case '4':
        alert('R$ 7,00');
        break
    case 'sal':
    case '5':
        alert('R$ 4,00');
        break
    case 'leite':
    case '6':
        alert('R$ 8,00');
        break
        default:
        alert('Digite o nome ou o código do produto');
        break
    }
}


// ao clicar no botão de pagamento
let payment = document.querySelector('.to-buy');

payment.addEventListener("click", () => {
    alert("Oriente o cliente que faça o pagamento!");
})