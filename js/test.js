

function retirarAcento() {
    let aux, textaux = "", resp = ""
    let texto = capturarElemento('.texto').value.toLowerCase();
    console.log(texto);
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            for (let j = 0; j < acento.length; j++) {
                if (texto[i] == acento[j]) {
                    if (j >= 0 && j <= 3) {
                        aux = 0;
                    } else if (j > 4 && j <= 6) {
                        aux = 4;
                    } else if (j > 6 && j <= 9) {
                        aux = 8;
                    } else if (j > 9 && j <= 13) {
                        aux = 14;
                    } else if (j > 13 && j <= 16) {
                        aux = 5;
                    } else if (j == 17) {
                        aux = 2;
                    }
                    resp = alfabeto[aux];
                    textaux += resp;
                } else if (texto[i] != alfabeto[j]) { 
                    resp = texto[i];
                    textaux += resp;
                }
            }
        } else if (texto[i] == " ") {
            resp = " ";
            textaux += resp;
        } 
    }
    descriptografarTexto(textaux)
}

function retirarAcento(){
    let aux;
    let texto = capturarElemento('.texto').value.toLowerCase();
    console.log(texto);

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < acento.length; j++) {
            if (acento[j] == texto[i]) {
                aux += sAcento[j]
            } else {
                aux += texto[i]
            }
        }
    }
    console.log(aux);
    descriptografarTexto(aux);   
}