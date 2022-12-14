function  somaPares() {
    let acumuladora = 0;

    for (let contadora = 1; contadora <= 500; contadora++) {
        if (contadora%2==0) {
            acumuladora += contadora;
        }
    }
    console.log("A soma final dos valores pares de 1 a 500 é: "+acumuladora);
}