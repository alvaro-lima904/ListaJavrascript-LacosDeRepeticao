function somaPares() {
    let contador = 0;
    let soma = 0
    do {
        if (contador%2==0) {
            soma = soma+contador;
            console.log(contador)
        }
        contador++;
    } while (contador<=500);
    console.log('o somatório dos valores pares mostrados é: '+soma)
    document.getElementById('resultado').innerText = "Olhe o console";
};