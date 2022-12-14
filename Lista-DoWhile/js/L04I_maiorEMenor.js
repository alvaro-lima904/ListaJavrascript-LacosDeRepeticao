function valores() {

    let maior = 0;
    let valor;

    do {

        valor = parseInt(prompt("Informe um valor: "));

        if (maior<valor) {
            maior = valor;
        } else {
            menor = valor;
        }

    } while(valor>=0);
    console.log("O maior valor informado é: "+maior);
    console.log("O menor valor informado é: "+menor);    

}