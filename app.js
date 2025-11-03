function converter() {
  let texto = document.getElementById('entrada').value;
  let linhas = texto.split(/\r?\n/); // separa por linhas

  let convertido = linhas
    .map((linha) => {
      // troca virgula por ponto
      let num = linha.trim().replace(/,/g, '.');

      // se estiver vazio, retorna vazio
      if (num === '') return '';

      // remove o '0.0' do começo
      if (num.startsWith('0.0')) {
        num = num.replace(/^0\.0+/, '');
      }

      // remove o '0.' do começo
      else if (num.startsWith('0.')) {
        num = num.replace(/^0./, '');
      }

      // verifica se o numero tem parte decimal
      if (num.includes('.')) {
        let partes = num.split('.');
        let decimais = partes[1];

        // se tiver so 1 digito depois do ponto > acrescenta 2 zeros
        if (decimais.length === 1) {
          num = partes[0] + '.' + decimais + '00';
        }
        // se tiver 2 digitos > acrescenta 1 zero
        else if (decimais.length === 2) {
          num = partes[0] + '.' + decimais + '0';
        }
      }

      return num;
    })
    .join('\n');

  document.getElementById('saida').textContent = convertido;
}

function copiarSaida() {
  const saida = document.getElementById('saida').innerText;
  const mensagem = document.getElementById('mensagem-copiado');

  if (!saida.trim()) {
    mensagem.textContent = 'Nada para copiar!';
    mensagem.style.color = '#e53935';
    mensagem.classList.add('visivel');
    setTimeout(() => mensagem.classList.remove('visivel'), 2000);
    return;
  }

  navigator.clipboard
    .writeText(saida)
    .then(() => {
      mensagem.textContent = 'Copiado!';
      mensagem.style.color = '#00c853';
      mensagem.classList.add('visivel');
      setTimeout(() => mensagem.classList.remove('visivel'), 2000);
    })
    .catch(() => {
      mensagem.textContent = 'Erro ao copiar!';
      mensagem.style.color = '#e53935';
      mensagem.classList.add('visivel');
      setTimeout(() => mensagem.classList.remove('visivel'), 2000);
    });
}

function limpar() {
  texto = document.getElementById('entrada').value = '';
  convertido = document.getElementById('saida').textContent = '';
}
