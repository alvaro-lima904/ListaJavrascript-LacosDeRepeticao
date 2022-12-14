function quadrados() {
    let contadora = 15;
    let quadrado = 0;
    do {
        quadrado = contadora*contadora;
        console.log("O quadrado de "+contadora+" é: "+quadrado);
        contadora++;
    }
    while (contadora <= 200)
}