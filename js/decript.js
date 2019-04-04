var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function capturarElemento(ref) {
    const elemento = document.querySelector(ref);
    return elemento;
}

const criptografar = capturarElemento('form');
criptografar.addEventListener('submit', function (event) {
    console.log(criptografar)
    verificarChave();
    event.preventDefault();
}, false)


function verificarChave() {
    let chave = capturarElemento('.chave');
    let c = chave.value
    if (c > 26 || c <= 0) {
        alert("Chave Inválida - Informe uma chave entre 1 e 26");
        inner.HTML();
    } else {
        criptografarTexto(c)
    }
}
function criptografarTexto(c) {
    let ch = parseInt(c);
    let res = "", resultado = "";
    let texto = capturarElemento('.texto').value.toLowerCase();
    console.log(texto)
    console.log(texto.length)
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            for (let j = 0; j < alfabeto.length; j++) {
                if (texto[i] == alfabeto[j]) {
                    let pos = ((j - ch) % 26);
                    res = alfabeto[pos];
                    resultado += res;
                } else {
                    res = " ";
                    resultado += res;
                }
            }
        } else {
            res = " ";
            resultado += res;
        }
    }
    mostrarnaTela(resultado);
}

function mostrarnaTela(resultado) {
    let p = document.createElement('p')
    let conteudo = document.createTextNode(resultado)
    p.appendChild(conteudo)
    p.className = ('textCript')
    capturarElemento('.result').appendChild(p)
}