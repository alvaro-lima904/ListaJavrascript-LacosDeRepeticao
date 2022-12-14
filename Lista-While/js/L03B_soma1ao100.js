function soma() {
    let contadora = 0;
    let acumuladora = 0;
    while (contadora < 100) {
        acumuladora = contadora+acumuladora;
        contadora++;
        console.log(`${acumuladora} + ${contadora} = ${acumuladora+contadora}`)
    }
}