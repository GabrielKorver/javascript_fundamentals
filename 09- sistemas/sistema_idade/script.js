function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let form_ano = document.querySelector('#txtano').value;
    let resultado = document.querySelector('#res');
    let img = document.querySelector('#imagem');
    let faixa = document.querySelector('#fe');
    if(form_ano == 0 || Number(form_ano) > ano) {
        alert('[ERRO] tente novamente');
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(form_ano);
        let genero = ''
        
        if(fsex[0].checked){
             genero = "Homem"
            if (idade >= 0 && idade < 10 ){
                img.src = "./img/bebe-menino.jpg"
                faixa.innerHTML = "Você é uma <strong>CRIANÇA.</strong>"
            } else if (idade < 21){
                img.src = "./img/jovem-homem.jpg"
                faixa.innerHTML = "Você é um <strong>JOVEM.</strong>"
            } else if (idade < 50){
                img.src = "./img/homem-adulto.jpg"
                faixa.innerHTML = "Você é um <strong>ADULTO.</strong>"
            } else {
                img.src = "./img/idoso-homem.jpg"
                faixa.innerHTML = "Você é um <strong>IDOSO.</strong>"
            }

        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10 ){
                img.src = "./img/bebe-menina.jpg"
                faixa.innerHTML = "Você é uma <strong>CRIANÇA.</strong>"
            } else if (idade < 21){
                img.src = "./img/jovem-mulher.jpg"
                faixa.innerHTML = "Você é uma <strong>JOVEM.</strong>"
            } else if (idade < 50){
                img.src = "./img/mulher-adulta.jpg"
                faixa.innerHTML = "Você é uma <strong>ADULTA.</strong>"
            } else {
                img.src = "./img/idosa-mulher.jpg"
                faixa.innerHTML = "Você é uma <strong>IDOSA.</strong>"
            }
        }
        resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }

    

    

}