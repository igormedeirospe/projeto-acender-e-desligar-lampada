var lampOn = document.getElementById('ligar')
var lampOf = document.getElementById("desligar")
var lampada = document.getElementById('lamp')

function estaquebrada(){
    return lampada.src.indexOf ('quebrada') > -1
}

function ligada(){
    if(!estaquebrada () ){
    lampada.src = './imagens/ligada.jpg';
}
}

function desligada(){
    if(!estaquebrada () ){
    lampada.src = './imagens/desligada.jpg';
    }
}
function quebrada(){
    lampada.src = './imagens/quebrada.jpg';
}

lampOn.addEventListener('click', ligada);
lampOf.addEventListener('click', desligada);
lampada.addEventListener('mouseover', ligada)
lampada.addEventListener('mouseout', desligada)
lampada.addEventListener('dblclick', quebrada);
