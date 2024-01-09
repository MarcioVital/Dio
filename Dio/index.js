

function Mostrar() {

    let nomeDigitado = document.getElementById("nome").value;
    console.log(nomeDigitado);
    let poderr = document.getElementById("poder").value;
    console.log(poderr);

    if (poderr < 1000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado +  " está no Nível Ferro com a Pontuação " + poderr;

    } else if (poderr >= 1000 && poderr < 2000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Bronze com a Pontuação " + poderr;
    } else if (poderr >= 2000 && poderr < 3000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Prata com a Pontuação " + poderr;
    } else if (poderr >= 3000 && poderr < 5000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Ouro com a Pontuação " + poderr;
    } else if (poderr >= 5000 && poderr < 7000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Platina com a Pontuação " + poderr;
    } else if (poderr>= 7000 && poderr < 9000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Ascendente com a Pontuação " + poderr;
    } else if (poderr >= 9000 && poderr < 10000) {
        document.getElementById("texto").innerHTML = "<h3> O Herói  " + nomeDigitado + " está no Nível Imortal com a Pontuação " + poderr;
    } else if (poderr >= 10000)
        document.getElementById("texto").innerHTML = "<h3> O Herói " + nomeDigitado + " está no Nível Radiante com a Pontuação " + poderr;
}