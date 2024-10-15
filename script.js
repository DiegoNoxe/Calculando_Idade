 const translations = {
    'pt-br': {
        tittle: 'Calculadora de Idade',
        anoAtualPlaceholder: 'Digite o ano atual',
        anoNascimentoPlaceholder: 'Data de nascimento',
        enviarButton: 'Enviar',
        limparButton: 'Limpar',
        resultadoText: '',
        pe: 'Feito por <span class="corz"><a target="_blank" href="https://github.com/DiegoNoxe">Diego Nascimento</a</span>'
    },
    'en': {
        tittle: 'Age Calculator',
        anoAtualPlaceholder: 'Enter the current year',
        anoNascimentoPlaceholder: 'Year of birth',
        enviarButton: 'Submit',
        limparButton: 'Clear',
        resultadoText: '',
        pe: 'Made by: <span style="color:lightblue"><a target="_blank" href="https://github.com/DiegoNoxe">Diego Nascimento</a</span>'
    }
};
    
    
function updateText(language) 

{
    const text = translations[language];
    document.getElementById('tituloo').innerHTML = text.tittle;
    document.getElementById('anoAtual').placeholder = text.anoAtualPlaceholder;
    document.getElementById('anoNascimento').placeholder = text.anoNascimentoPlaceholder;
    document.getElementById('Enviar').innerText = text.enviarButton;
    document.getElementById('Limpar').innerText = text.limparButton;
    document.getElementById('resultado').innerText = text.resultadoText;
    document.getElementById('pe').innerHTML = text.pe;
}


document.getElementById('languageS').addEventListener('change', (event) => {
    updateText(event.target.value);
});

updateText('pt-br');
    



    const anoAtualInput      = document.getElementById('anoAtual'); 
    const anoNascimentoInput = document.getElementById('anoNascimento'); 
    const enviarButton       = document.getElementById('Enviar');
    const resultado          = document.getElementById('resultado');
    const limparButton       = document.getElementById('Limpar');



        function calcularIdade() 
        {

            const anoAtual      = Number(anoAtualInput.value);
            const anoNascimento = Number(anoNascimentoInput.value);
            const idade         = anoAtual - anoNascimento;

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

            if(idade == 1)
            {
                resultado.textContent = `Você têm ${idade} ano de idade!`;
                return;
            }

            resultado.textContent = `Você têm ${idade} anos de idade!`;
        }

            function limpeza() {

            anoAtualInput.value = ''; 
            anoNascimentoInput.value = ''; 
            resultado.textContent = '';
        }



        enviarButton.addEventListener('click', calcularIdade);
        limparButton.addEventListener('click', limpeza);
