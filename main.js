window.onload = (Event) => {
    var dados = json['sabores']
    preencherTable(dados);
}

function preencherTable(dado) {
    var caixaConteudo = document.querySelector('#tabelaDados')
    for (var i = 0; i <= dado.length; i++) {
        const meuTr = document.createElement('tr');
        const meuTd1 = document.createElement('td');
        const meuTd2 = document.createElement('td');
        
        meuTd1.textContent = dado[i].sabor;
        meuTd2.textContent = dado[i].ingredientes;
       
       caixaConteudo.appendChild(meuTr);
       meuTr.appendChild(meuTd1);
       meuTr.appendChild(meuTd2);
    }
}





const buscaInput = document.querySelector('#entrada');
const botaoPesquisa = document.querySelector('#pesquisar');

const filtrarLista = (valorInput, lista) => lista.filter( item => criterio(item, valorInput))
const criterio = (item, valorInput) => item.ingredientes.includes(valorInput)

const esconderLista = (listaDeDados, valorInput) => {
  listaDeDados
  .forEach(lista => {
    lista.setAttribute('style', 'display:none');
  })
}

const mostrarLista = (listaDeDados, valorInput) => {
 const listaFiltrada = filtrarLista(valorInput, listaDeDados)
  preencherTable(listaFiltrada)
}

 botaoPesquisa.addEventListener('click', event => {
   const valorInput = buscaInput.value.trim().toLowerCase();
   const listaDeDivs = Array.from(document.querySelectorAll('tr'));
   const listaManga = json['sabores']

   esconderLista(listaDeDivs, valorInput);
   mostrarLista(listaManga, valorInput);
  }
)