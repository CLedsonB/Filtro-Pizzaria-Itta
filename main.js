window.onload = () => {
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
const btn = document.getElementById('opc');
let modo = 'Com';                     // estado inicial

btn.addEventListener('click', () => {
  modo = modo === 'Com' ? 'Sem' : 'Com';
  btn.textContent = modo;
});

function iniciarFiltro() {
  const buscaInput = document.querySelector('#entrada');
  const botaoPesquisa = document.querySelector('#pesquisar');
  const msg = document.createElement('p');
  msg.id = 'mensagemFiltro';
  msg.style = 'display:none;text-align:center;';
  msg.textContent = '--- Nenhum resultado encontrado ---';
  document.body.appendChild(msg);

  botaoPesquisa.addEventListener('click', () => {
    const termo = buscaInput.value.trim().toLowerCase();
    const linhas = document.querySelectorAll('table tr');
    let algumaVisivel = false;

    linhas.forEach(linha => {
      const cel = linha.cells[1];
      if (!cel) return;
      const txt = cel.textContent.toLowerCase();
      const contem = txt.includes(termo);
      const mostrar = modo === 'Com' ? contem : !contem;

      linha.style.display = mostrar ? '' : 'none';
      if (mostrar) algumaVisivel = true;
    });

    document.getElementById('mensagemFiltro').style.display =
      algumaVisivel ? 'none' : 'block';
  });
}