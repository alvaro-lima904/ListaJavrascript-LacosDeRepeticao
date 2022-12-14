function potencia() {

    let base = parseInt(document.getElementById('numero01').value);
    let expoente = parseInt(document.getElementById('numero02').value);
    let potencia = 1;
    console.log(base+" ^ 0 = 1")
    for (let contadora = 1; contadora <= expoente; contadora++) {
        potencia = potencia * base;
        console.log(base+" ^ "+contadora+" = "+potencia);
    }
    console.log("\n");
}