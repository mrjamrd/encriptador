function encriptado(){
   // alert("Estoy encripando")
    var textoEntrada = document.querySelector("#text").value;
    var textoCifrado = textoEntrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector("#text").value;
   /// console.log(textoCifrado)
   document.getElementById("salida").innerHTML = textoCifrado
}

function desencriptado(){
    //alert("Estoy desencriptando")
    var textoEntrada = document.querySelector("#text").value;
    var textoCifrado = textoEntrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    //document.querySelector("salida").value = textoCifrado;
    //document.querySelector("#input-texto").value;
    document.getElementById("salida").innerHTML = textoCifrado

}

