function gerar() {
    let numero = document.querySelector('#txt').value;
    let resultado = document.querySelector('#res');
    let opt = document.querySelector('#opt')

    if (numero === ''|| numero == 0 ){
        alert('[ERRO] Digite um número válido');
    } else {
        numero = Number(numero);
        resultado.innerHTML = '';

        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `${numero} * ${i} = ${numero * i}<hr>`
            resultado.style.backgroundColor = 'black';
            resultado.style.color = "white";
        }

    }

}

function limpar() {
    let resultado = document.querySelector('#res');
    
    resultado.innerHTML = 'Resultado da Tabuada';
    resultado.style.backgroundColor = ''; 
    resultado.style.color = ''; 
}