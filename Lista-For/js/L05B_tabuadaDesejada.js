function tabuada() {

    let numero = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById("numero02").value);

    let multiplicacao;
    for (let contadora = 0; contadora <= valor2; contadora++) {
        multiplicacao = numero*contadora;
        console.log(numero+" x "+contadora+" = "+multiplicacao)
    }
    console.log("\n");
}