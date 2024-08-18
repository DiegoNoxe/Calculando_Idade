    const anoAtualInput = document.getElementById('anoAtual'); 
    const anoNascimentoInput = document.getElementById('anoNascimento'); 
    const enviarButton = document.getElementById('Enviar');
    const resultado = document.getElementById('resultado');
    const limparButton = document.getElementById('Limpar');

        function calcularIdade() 
        {

            const anoAtual = parseInt(anoAtualInput.value);
            const anoNascimento = parseInt(anoNascimentoInput.value);
            const idade = anoAtual - anoNascimento;

            if(anoAtual < anoNascimento)
            
            {
                resultado.textContent = "Idade maior que o ano atual!"
                resultado.classList.add('error');
                resultado.classList.remove('result');
                return;
            }

            if (isNaN(anoAtual) || isNaN(anoNascimento)) {
                 resultado.classList.add('validos');
                resultado.classList.remove('result');
                resultado.innerHTML = 'Por favor, insira apenas números <span class="valido">válidos</span>.';
                return;
            }

            if(idade == 0)
            
            {
                resultado.textContent = `Você tem alguns meses de vida!`;
                resultado.classList.add('error');
                resultado.classList.remove('result');
                return;
            }

            if(idade >= 123)
            
            {
                resultado.textContent = `Não há comprovação de qualquer pessoa que tenha vivido por mais de 122 anos! Idade invalida`;
                resultado.classList.add('errorTwo');
                resultado.classList.remove('result');
                return;
            }


            resultado.textContent = `Você têm ${idade} de idade!`;
        }

        function limpeza() {
            anoAtualInput.value = ''; anoNascimentoInput.value = ''; resultado.textContent = ''; 
            resultado.classList.remove('error', 'errorTwo', 'result');
        }

        enviarButton.addEventListener('click', calcularIdade);
        limparButton.addEventListener('click', limpeza);
