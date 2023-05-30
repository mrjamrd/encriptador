const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encrip(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage="none"
    alert("encriptado con exito")
}

function encrip(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
        
    }
    return stringEncriptado
}

function btnDesncriptar(){
    const textoEncriptado=desencrip(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value="";
}
function desencrip(stringDesencriptado){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar(){
var textarea = document.getElementById('mensaje');
textarea.select();
document.execCommand('copy');
}