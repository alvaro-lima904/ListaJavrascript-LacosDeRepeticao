function leitura() {
    let valor = 0;
    let contadora = 1;
    let antecessor;
    let fatorial = 1;
    let acumuladora = 1;
    do {
        valor = parseInt(prompt('Digite o '+contadora+"º valor"));
        antecessor = valor;
        fatorial = valor;
        while (antecessor >1) {
            antecessor = antecessor -1;
            fatorial = antecessor * fatorial;
        }
        acumuladora = fatorial+acumuladora;
        contadora++;
    }
    while (contadora<=15);
    console.log("O somatório de todos fatoriais solicitados é: "+acumuladora)
    
    document.getElementById("resultado").innerHTML = "Olha o console";
}