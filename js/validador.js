const MENSAJE = document.getElementById('mensaje-ingresado');
const CONTADOR = document.getElementById('contador');
const VALIDAR = document.getElementById('validador')

MENSAJE.addEventListener('input',(e) => {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    CONTADOR.innerHTML = `${longitudAct}/${longitudMax} caracteres`;
});

function validarCaracteres(textarea) {
    let inputValue = textarea.value;
    let isValid = /^[a-zñ ]+$/i.test(inputValue);
    if (!isValid) {
        VALIDAR.style.color = '#FF0000';
        document.getElementById('encriptar').disabled = true;
        document.getElementById('desencriptar').disabled = true;
    } else {
        VALIDAR.style.removeProperty('color');
        document.getElementById('encriptar').disabled = false;
        document.getElementById('desencriptar').disabled = false;
    }
};