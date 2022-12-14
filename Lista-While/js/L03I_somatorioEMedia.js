function calcular() {
    let contadora = 1;
    let acumuladora = 0;
    let media = 0;
    while (contadora <= 10) {
        let valor = parseInt(prompt('Digite o '+contadora+"º valor: "));

        acumuladora += valor;
        
        contadora++;

    }
    media = acumuladora/10;    
    console.log("A soma dos valores digitados é "+acumuladora);
    console.log("A media dos valores digitados é "+media);
    document.getElementById('resultado').innerText = "Olha o console"
}