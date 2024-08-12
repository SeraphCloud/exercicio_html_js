const form = document.getElementById('form-comparacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function validaNumero(campoA, campoB) {
    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if(valorB > valorA) {
        alert(`O número ${valorA} é menor que ${valorB}`)
    } else {
        alert(`Desculpe, o número ${valorA} não é menor que ${valorB}`)
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validaNumero(campoA, campoB);
});