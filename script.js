function mostrarocultartexto() {
    var texto = document.getElementById("textoParrafo");
    var imagen = document.getElementById("imagen1");

    texto.style.display = (texto.style.display === "none") ? "block" : "none";
    imagen.style.display = (imagen.style.display === "none") ? "block" : "none";
}

function mostrarocultarpython() {
    var textoPython = document.getElementById("textoParrafo2");

    textoPython.style.display = (textoPython.style.display === "none") ? "block" : "none";
}