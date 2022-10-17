function adicionar(){

const quantidade= prompt('Digite a quantidade de clientes que quer adicionar');

  for (let i = 1; i <=quantidade; i++) {  
    const nome = prompt('Digite o nome do cliente');
    
    const email = prompt('Digite o e-mail do cliente');

    const telefone = prompt('Digite o telefone do cliente');

    

    const clientes = document.getElementById('clientes');

    const tr = document.createElement('tr');
   
   
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    tdNome.addEventListener('click',function(){
        alterar(this);
    });
    
    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;
    tdEmail.addEventListener('click',function(){
        alterar(this);
    });
    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = telefone;
    tdTelefone.addEventListener('click',function(){
        alterar(this);
    });

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);

    clientes.appendChild(tr);
}
document.getElementById('add').addEventListener('click',adicionar);
}

function alterar(elemento){
    elemento.innerText = prompt('Qual o novo texto?')
        if(elemento.innerText == ""){
            elemento.remove();
        }
    }
    
    const itenstabela = document.querySelectorAll('#clientes td');
    for(let i = 0; i < itenstabela.length; i++){
        itenstabela[i].addEventListener('click',function(){
            alterar(this);
        })
    }

