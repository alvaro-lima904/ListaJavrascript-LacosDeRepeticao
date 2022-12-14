function potencia() {
    console.log('3 ^ 0 = 1');

    let acumuladora = 1;
    for (let contadora = 1; contadora <= 15; contadora++) {
        acumuladora = acumuladora*3;
        console.log(3+" ^ "+contadora+" = "+acumuladora);
    }
}