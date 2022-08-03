function mudarCor(){
 const nomeCor = document.getElementById('opcao').value.toUpperCase()
 let cor = '#FFFFFF'
 //document.body.style.background = `#${color}`
 document.documentElement.style.setProperty(`--bg-color`,`#FFFFFF`)
 if(nomeCor == 'VERMELHO'){
    document.body.style.background = "#FF0F0F";
} else if(nomeCor == 'AZUL'){
    document.body.style.background = "#0000ff";
}else if(nomeCor == 'AMARELO'){
    document.body.style.background = "#ffff00";
}else if(nomeCor == 'VERDE'){
    document.body.style.background = "#00FA9A";
}
}

document.getElementById('apcao').addEventListener('onclick',mudarCor)
