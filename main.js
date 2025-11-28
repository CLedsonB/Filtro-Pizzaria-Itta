window.onload = () => {
  // suponha que "dados" já esteja disponível (ex.: via fetch)
  const lanches = [
    json['salgados'],
    json['doces'],
    json['rolls'],
    json['sweetRolls'],
    json['finger']
  ];

  const tabelas = [
    document.querySelector('#tabelaPizzaSalgada'),
    document.querySelector('#tabelaPizzaDoce'),
    document.querySelector('#tabelaRoll'),
    document.querySelector('#tabelaSweetRoll'),
    document.querySelector('#tabelaFinger')
  ];

  preencherTable(lanches, tabelas);
  iniciarFiltro();
};

function preencherTable(dados, tabelas) {
  for (let i = 0; i < tabelas.length; i++) {
    const tabela = tabelas[i];
    const categoria = dados[i] || [];   // se a categoria estiver vazia, usa array vazio

    for (let j = 0; j < categoria.length; j++) {
      const item = categoria[j];
      const tr = document.createElement('tr');
      const tdSabor = document.createElement('td');
      const tdIngred = document.createElement('td');

      tdSabor.textContent = item.sabor;
      tdIngred.textContent = item.ingredientes;

      tr.appendChild(tdSabor);
      tr.appendChild(tdIngred);
      tabela.appendChild(tr);
    }
  }
}
function iniciarFiltro() {
  const buscaInput = document.querySelector('#entrada');
  const botaoPesquisa = document.querySelector('#pesquisar');
  botaoPesquisa.addEventListener('click', () => {
    const termo = buscaInput.value.trim().toLowerCase();                                                 
    const todasLinhas = document.querySelectorAll('table tr');
    todasLinhas.forEach(linha => {
      const ingredienteCell = linha.cells[1];                                 
      const ingredientes = ingredienteCell.textContent.toLowerCase();

      if (ingredientes.includes(termo)) {
        linha.style.display = '';                   
      } else {
        linha.style.display = 'none';      // esconde
      }
    });
  });
}

const btn = document.getElementById('opc');

btn.addEventListener('click', () => {
    btn.textContent = (btn.textContent === 'Com') ? 'Sem' : 'Com';
  });
