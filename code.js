var textSalida = document.getElementById("salidaTexto");
var textEntrada = document.getElementById("entradaText");
var btEncriptar = document.getElementById("btEncript");
var btDesencriptar = document.getElementById("btDesencript");
var btCopiar = document.getElementById("btCopy");

textSalida.disabled = true
btEncriptar.onclick = Encriptar;
btDesencriptar.onclick = Desencriptar;
btCopiar.onclick = copiar;

function Encriptar(){

    var texto = textEntrada.value.toLowerCase();
    var textoYaEncriptado = texto
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    textSalida.value = textoYaEncriptado;
    console.log(textoYaEncriptado);
}


function Desencriptar(){
    var texto = textEntrada.value.toLowerCase();
    var textoYaDesencriptado = texto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a",)
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    textSalida.value = textoYaDesencriptado;
    console.log(textoYaDesencriptado);

}

function copiar(){
    var textoEncriptado = textSalida.value;
    navigator.clipboard.writeText(textoEncriptado);
    textEntrada.value ='';
    textEntrada.focus();
    console.log('COPIADO')
}

function validar(){
    var texto = textEntrada.value;
    let letrasAceptadas = 'abcdefghijklmñopqrstuvwxyz';
    let mensajeError = document.createDocumentFragment();

    for(let letra of texto){

    }


}