function potenciaDesejada() {
    let base = parseInt(document.getElementById('numero01').value);
    let expoente = parseInt(document.getElementById('numero02').value);

    let potencia = 1;
    let contadora = 0;
    while (contadora<expoente) {
        potencia = base * potencia;
        console.log(potencia)
        contadora++;
    }
    document.getElementById('resultado').innerText = "Olhe o console";
}