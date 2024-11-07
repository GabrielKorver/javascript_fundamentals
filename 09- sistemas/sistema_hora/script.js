function carregar(){
    let mensagem = document.querySelector('#msg');
    let img = document.querySelector('#imagem');
    let agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();
    let hcompleta = `${h} Horas, ${m} Minutos e ${s} Segundos.`
    const titulo = document.querySelector('#cor')
    
    mensagem.innerHTML = `Agora são ${hcompleta}<br><br>` 

    if(h >=0 && h <=12){
        img.src = './img/fotomanha.jpg'
        mensagem.innerHTML += `Bom dia!`
        document.body.style.background = '#F5E1C8'
        cor.style.color = "orange"

    } else if (h > 12 && h < 19){
        img.src = './img/fototarde.jpg'
        mensagem.innerHTML += `Bom Tarde!` 
        document.body.style.background = '#845565'
        cor.style.color = "Blue"
    } else {
        img.src = './img/fotonoite.jpg'
        mensagem.innerHTML += `Boa Noite!` 
        document.body.style.background = '#262C2C'
        cor.style.color = "red"
    }

}