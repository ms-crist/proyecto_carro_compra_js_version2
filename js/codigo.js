/* function button(){
    document.getElementById('alerta').play();
    alert('Hizo click en botón enviar');
}

function hacerclick(){
    document.getElementsByTagName('input')[3].onclick = button;
}

window.onload = hacerclick;

function Mostrarnombre(){
    alert('Escriba su nombre');
}

function Mostrarcorreo(){
    alert('Escriba su correo');
}

function Mostrartel(){
    alert('Escriba su teléfono');
}

function Validatex(){
    alert('Escriba un mensaje');
} */




function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

