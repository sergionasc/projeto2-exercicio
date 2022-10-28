const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];
const emails = [];
const inputNomeAgenda = document.getElementById('nome-agenda');
const inputTelAgenda = document.getElementById('tel-agenda');
const inputEmailAgenda = document.getElementById('email-agenda');
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();

});


function adicionaLinha() {

    if (nomes.includes(inputNomeAgenda.value)){
        alert(`O nome ${inputNomeAgenda.value} já foi adicionado!`);
    } else if (telefones.includes(inputTelAgenda.value)) {
        alert(`O telefone ${inputTelAgenda.value} já foi adicionado!`);
    } else if (emails.includes(inputEmailAgenda.value)){
        alert(`O e-mail ${inputEmailAgenda.value} já foi adicionado!`);
    } else {
        
        {

        nomes.push(inputNomeAgenda.value);
        telefones.push(inputTelAgenda.value);
        emails.push(inputEmailAgenda.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelAgenda.value}</td>`;
        linha += `<td>${inputEmailAgenda.value}</td>`;
        linha += `<td><img src="./images/check.png" alt="agenda de contatos"></td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }
    
        inputNomeAgenda.value = '';
        inputTelAgenda.value = '';
        inputEmailAgenda.value = '';
    }}


    function atualizaTabela (){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    
    function atualizaTotal(){
        const vlTotal = document.querySelector('span');
        vlTotal.innerHTML = nomes.length;
    }



