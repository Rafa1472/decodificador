let textInput = document.querySelector("#input__deco");
let outInput = document.querySelector("#output");

function criptografar() {
    let texto = textInput.value;

    let resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly class="input__deco">' + resultadoCripto + '</textarea>' + '<button class="botton__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    let texto = textInput.value;

    let resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly class="input__deco">' + resultadoDescripto + '</textarea>' + '<button class="botton__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    let copyTexto = document.getElementById('output').querySelector('textarea');

    copyTexto.select();
    document.execCommand('copy');
    alert('Texto Copiado');
}