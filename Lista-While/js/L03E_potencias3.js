function potencias() {
    let contadora = 1;
    let potencia = 1;
    console.log(`0 ^ 3 = 0`);
    while (contadora <= 15) {
        potencia = potencia * 3;
        console.log(`${contadora} ^ 3 = ${potencia}`) 
        contadora++;
    }
    document.getElementById('resultado').innerText = "olha o console"
}