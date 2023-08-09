const mensaje = document.getElementById('mensaje-ingresado');
const resultadoMensaje = document.getElementById('mensaje-codificado');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar = document.getElementById('btn--copiar');
const containerDecod = document.getElementById('decod');
const contador = document.getElementById('contador');

function encriptar () {
    containerDecod.classList.remove('container-encriptado-mobile-tablet');
    containerDecod.classList.add('container-encriptado-desktop');
    document.getElementById('aviso-mensaje').style.display='none';
    document.getElementById('aviso-instruccion').style.display='none';
    document.getElementById('btn--copiar').style.display='block';
    document.getElementById('muneco').style.display='none';
    resultadoMensaje.style.display='block';
    let textoIngresado = mensaje.value;
    resultadoMensaje.innerHTML = textoIngresado.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    mensaje.value = '';
    contador.innerHTML = `0/500 caracteres`;
};

function desencriptar () {
  containerDecod.classList.remove('container-encriptado-mobile-tablet');
  containerDecod.classList.add('container-encriptado-desktop');
  document.getElementById('muneco').style.display='none';
  document.getElementById('aviso-mensaje').style.display='none';
  document.getElementById('aviso-instruccion').style.display='none';
  document.getElementById('btn--copiar').style.display='block';
  resultadoMensaje.style.display='block';
  let textoEncriptado = mensaje.value;
  resultadoMensaje.innerHTML= textoEncriptado.replaceAll('enter' , 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
  mensaje.value = '';
  contador.innerHTML = `0/500 caracteres`;
}

function copy() {
  let textoCopiado = resultadoMensaje.innerText;
  navigator.clipboard.writeText(textoCopiado);
} 

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copy;