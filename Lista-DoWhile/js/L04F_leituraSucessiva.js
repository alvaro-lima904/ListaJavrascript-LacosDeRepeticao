function leitura () {
    let valor;
    let somatorio = 0;
    let media = 0;
    let lidos = 0;


    do {
        valor = parseInt(prompt("Digite um valor: "));

        somatorio = somatorio + valor;
        lidos++;
    } while(valor>=0);
    media = somatorio/lidos;
    console.log("O somatório dos valores solicitados é: "+somatorio);
    console.log("A média dos valores solicitados é: "+media.toFixed(2));
    console.log("A quantidade de valores informados é: "+lidos);
    
    document.getElementById("resultado").innerHTML = "Olha o console";
}