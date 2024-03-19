// capturar o item que o cliente digitou
//lógica para ao clicar em adicionar aparecer todo o conjunto dos itens (item, exclusão e edição)
        //Ao clicar em adicionar
// 2- logica para create Element para o item da lista
                //textContent
                //parentNode
                //appendChild
// 3- logica para aparecer o botão que ele possa editar o iten
                 //parentNode
                //appendChild
            //lógica  pra edição em si do item atrelada a função do botão
                  //replace
// 4- logica para que ele possa excluir
            ////lógica  pra exclusão em si do item atrelada a função do botão, que faz o item desaparecer com os botões de exclusão e edição
            //remove
            //removeChild

            //TENTAR TRAZER TÍTULOS "ITENS DA LISTA" E "AÇÕES" COM JS
            //VIDEOS YOUTUBE DENNIS IVY


//capturando botão de adicionar, table

let addIten = document.querySelector('.add');
let tlList = document.querySelector('.tl-list');

let i = 0;


//adicionando o item
function additen() { 
    let userInput = document.querySelector('.inputUser').value;
    let trList = document.createElement('tr');
     let tdList = document.createElement('td');
     
     tlList.append(trList);
     //let listItem = tdList.textContent = '<label id="label'+(++i)+'">' + userInput + '</label>';
     let label = document.createElement("label");
     label.innerHTML = userInput;
     label.setAttribute("id", 'label' + (++i));
     //let listItem = tdList.textContent = '<label id="label'+(++i)+'">' + userInput + '</label>';
     trList.append(label);
     trList.setAttribute("id", i);
//loop map para os botões
    let buttonsDes = ["Check", "Excluir item", "Editar item"].map(text => {
        let buttons = document.createElement("button");

        buttons.classList.add("buttonStyle");

    //setando os IDs dos botões e chamando as funções de ação
        if(text == "Check"){
        buttons.setAttribute("onclick", "setCheck("+i+")");
        }
        if(text == "Excluir item"){
        buttons.setAttribute("onclick", "setDelete("+i+")");
        }
        if(text == "Editar item"){
        buttons.setAttribute("onclick", "setEdit("+i+")");
        }
        //passando os textos do array buttonsDes para dentro dos botões
        buttons.textContent = text;

        return buttons;
    });
    trList.append(...buttonsDes);
    let localDataPresent = localStorage.getItem("keyTesk");
    if(localDataPresent !== null) {
        trList = JASON.parse(localDataPresent);
        
    }
    //local-storage precisa de dois parâmetros (chave, valor)
    localStorage.setItem("keyTask", JASON.stringify(trList));

//lógica do check somente para tdList
 function setCheck(btn){
    if(document.getElementById(btn).style.textDecoration == "line-through"){
    document.getElementById(btn).style.textDecoration = 'unset';
    }else{
        document.getElementById(btn).style.textDecoration = "line-through";
    }
 }

 //lógica do excluir item deve abrenger toda a tr(row)
 function setDelete(btn){
    document.getElementById(btn).remove();
    }

//lógica do Editar item abrir um input diretamente no item
function setEdit(id){
    document.getElementById('inputLabel').value = document.getElementById('label'+id).innerHTML;
    let btnadicionar = document.querySelector('.add');
    btnadicionar.style.display='none';
    
    let btneditar = document.querySelector('.edit');
    btneditar.style.display='unset';
    btneditar.setAttribute('onclick', 'editarItem("'+'label'+id+'")')
}

function editarItem(idLabel) {
    document.getElementById(idLabel).innerHTML = document.getElementById('inputLabel').value;
    let btnadicionar = document.querySelector('.add');
    btnadicionar.style.display='unset';
    
    let btneditar = document.querySelector('.edit');
    btneditar.style.display='none';
    btneditar.setAttribute('onclick', 'editarItem()');
}


    


  /*let inputUpdate = document.createElement('input');
    inputUpdate.classList.add('text');
    inputUpdate.type = "text";
    inputUpdate.value = listItem;
    inputUpdate.setAttribute("readonly", "readyonly");
    console.log(inputUpdate)*/


     /*let buttons = document.createElement('button');
     buttons.append("check");
     trList.append(buttons);
     let buttons = document.createElement('button');
     buttons.append("check");
     trList.append(buttons);
     let buttons = document.createElement('button');
     buttons.append("check");
     trList.append(buttons);*/


