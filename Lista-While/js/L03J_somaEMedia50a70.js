function somaMedia() {
    let acumuladora = 0;
    let contadora = 50;
    let posterior = 0;
    let res = 0;
    

    while (contadora<=70) {
        if (contadora%2==0) {
            acumuladora += contadora;
            posterior = contadora+2;
            res = acumuladora + contadora+2;
            console.log("A soma de "+acumuladora+" + "+posterior+" = "+res);
        }
        contadora++;
    }
    let media = res/10;
    document.getElementById('resultado').innerText = "Olha o console";
    console.log("A media dos mostrados é: "+media);
    
}