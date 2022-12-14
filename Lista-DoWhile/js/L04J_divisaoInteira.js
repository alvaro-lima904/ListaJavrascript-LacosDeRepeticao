function divisao() {

    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    do {

        valor1 = valor1/valor2;
        console.log(valor1)

    } while (valor1>valor2)
}