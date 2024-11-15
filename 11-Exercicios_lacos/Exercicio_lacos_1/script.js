function calcular() {
    let numero = document.querySelector('#entrada').value;
    let repetir = document.querySelector('#repetir').value;
    let passos = document.querySelector('#passos').value;
    let seta = '\u{1F449}';
    let chegada = '\u{1F3C1}';
    let res = document.querySelector('#res');

    if (numero.length == 0 || repetir.length == 0 || passos.length == 0) {
        alert('Digite um número Válido')
    } else {
        if (passos <= 0) {
            alert(`Número de passo(os) inválidos, [consideramos passos igual a [1]`);
            passos = 1
        }
        res.innerHTML = "";
        numero = Number(numero);
        repetir = Number(repetir);
        passos = Number(passos);

        if (numero < repetir) {
            for (numero; numero <= repetir; numero = numero + passos) {
                res.innerHTML += `${numero} ${seta}`;
            }
        } else {
            for (numero; numero >= repetir; numero = numero - passos) {
                res.innerHTML += `${numero} ${seta}`;
            }
        }

    }

    res.innerHTML += `${chegada}`;

}

