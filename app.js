function converter() {
      let texto = document.getElementById('entrada').value;
      let linhas = texto.split(/\r?\n/); // separa por linhas

      let convertido = linhas.map(linha => {
        // troca virgula por ponto
        let num = linha.trim().replace(/,/g, '.');

        // se estiver vazio, retorna vazio
        if (num === '') return '';

        // remove o '0.0' do começo
         if (num.startsWith('0.0')) {
          num = num.replace(/^0\.0+/, ''); 
        }

        // remove o '0.' do começo
        else if (num.startsWith('0.')){
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
      }).join('\n');

      document.getElementById('saida').textContent = convertido;
    }

    function limpar() {
        texto = document.getElementById('entrada'); // limpa o campo de texto ou  // texto = document.getElementById('entrada');.value = '';
        texto.value = '';
        convertido = document.getElementById('saida') // limpa o resultado ou  // convertido = document.getElementById('saida').textContent = '';
        convertido.textContent = '';
    }