function fatorial() {

    let antecessor = 9;
    let acumuladora = 10;

    for (let contadora = 10; contadora >= 1; contadora--) {

        if (antecessor%2==1) {
            acumuladora = acumuladora*antecessor;
            console.log(acumuladora);
        };
        antecessor--;

    }

}