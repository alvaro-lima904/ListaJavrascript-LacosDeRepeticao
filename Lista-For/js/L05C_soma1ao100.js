function soma() {
    let acumuladora = 0

    for (let contadora = 1; contadora <= 100; contadora++) {
        acumuladora = contadora+acumuladora;
    }
    
    console.log('A soma final de 1 até 100 é: '+acumuladora);
}