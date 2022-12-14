function tabuada() {
    let valor = parseInt(document.getElementById('numero01').value);

    let contadora = 0;
    while (contadora <= 10) {
        let tabuada = valor*contadora;
        contadora++;
        console.log(`${valor} x ${contadora} = ${tabuada}`);
    };
    document.getElementById('resultado').innerText = "Olhe no console";
};