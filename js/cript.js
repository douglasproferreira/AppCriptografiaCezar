function capturarElemento (ref){
    const elemento = document.querySelector(ref);
    return elemento;
}

const criptografar = capturarElemento('form');
criptografar = addEventListener('submit', function(event){
    event.preventDefault();
}, false)