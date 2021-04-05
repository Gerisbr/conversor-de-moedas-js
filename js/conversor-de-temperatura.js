function Converter(){
    let valorFarehnheitTexto = document.getElementById("valor").value;
    let valorFarehnheitNumero = parseInt(valorFarehnheitTexto);

    document.querySelector(".resultado").innerHTML = "Valor em Celsius: " + ((valorFarehnheitNumero-32) / 1.8);
}