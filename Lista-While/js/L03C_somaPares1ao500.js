function somaPares() {
    let contadora = 0;
    let acumuladora = 0;
    while (contadora < 501) {
        if (contadora % 2 == 0) {
            acumuladora = acumuladora + contadora;
            console.log(`${acumuladora} + ${contadora} + ${acumuladora + contadora}`);
        }
        contadora++;
    }
    document.getElementById('resultado').innerText = "Olha o console"
}