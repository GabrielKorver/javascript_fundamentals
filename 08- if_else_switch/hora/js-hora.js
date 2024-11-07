let agora = new Date();
let hora = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();


if(hora < 12){
    console.log(`Agora são ${hora}:${minutos}:${segundos}, BOM DIA!`);
} else if(hora < 18){
    console.log(`Agora são ${hora}:${minutos}:${segundos}, BOA TARDE!`);
} else {
    console.log(`Agora são ${hora}, BOA NOITE!`);
    
}