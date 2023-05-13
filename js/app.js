function encriptado(){
    var textoEntrada = document.querySelector("#text").value;
    var textoCifrado = textoEntrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector("#text").value;
   document.getElementById("salida").innerHTML = textoCifrado
}

function desencriptado(){
    var textoEntrada = document.querySelector("#text").value;
    var textoCifrado2 = textoEntrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("salida").innerHTML = textoCifrado2;
}

