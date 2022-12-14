function fibonacci() {
    let anterior = 1;
    let sucessor = 1;
    
    let contador = 1;
    console.log("0, ");
    console.log("1, ");
    console.log("1, ");
    while (contador<=15) {
        let soma = anterior+sucessor;
        anterior = sucessor;
        sucessor = soma;
        console.log(soma+", ")
        contador++;
    }
    document.getElementById('resultado').innerText = "Olhe o console"
}