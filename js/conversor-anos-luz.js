function Converter(){
    let valorEmAnosLuz = document.getElementById("valor").value;

    document.querySelector(".resultado").innerHTML = "Valor em Km: <br>" + (valorEmAnosLuz * 9461000000000);
};