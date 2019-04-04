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
    if (chave.value > 26 || chave.value == 0) {
        alert("Chave Inválida - Informe uma chave entre 1 e 26");
        inner.HTML();
    } else {
        criptografarTexto(chave)
    }
}
function criptografarTexto(chave) {
    let res, resultado;
    let texto = capturarElemento('.texto').value.toLowerCase();
    console.log(texto)
    console.log(texto.length)
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            for (let j = 0; j < alfabeto.length; j++) {
                if (texto[i] == alfabeto[j]) {
                    res = alfabeto[j + chave.value];
                    console.log(res)
                    resultado = resultado + res;
                }
            }
        } else {
            res = " "
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

// function criptografarTexto(chave){
   //  var textarea = capturarElemento('.texto').value.toUpperCase();
    // var result = "";

     //for(var i = 0; i < textarea.length; i++) { //Passa por cada caracter do input

       //  var posicaoDaLetraNoAlfabeto = textarea.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
       //  var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + chave.value) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
       //  letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
       //  result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    // }

    // capturarElemento(".textCript").innerHTML = result;
 // }