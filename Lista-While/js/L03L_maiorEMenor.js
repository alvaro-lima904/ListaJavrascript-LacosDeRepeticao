function leituraValores() {
    let valor = 0;
    let maior = 0;
    let menor = 0;
    
    while (valor>=0) {
        valor = parseInt(prompt('Digite um valor'));

        if (valor>maior) {
            maior = valor;
        };
        if (valor<menor) {
            menor = valor;
        }
    }
    console.log("Dos informados o maior número é: "+maior)
    console.log("Dos informados o menor número é: "+menor)
}