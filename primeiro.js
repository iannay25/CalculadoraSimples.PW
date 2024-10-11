
function calcularSoma() {
    
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Insira números válidos.');
    } else {
       
        let soma = numero1 + numero2;
       
        alert('Resultado da soma: ' + soma);
    }
}