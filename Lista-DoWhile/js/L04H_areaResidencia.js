function area() {

    let comodo;
    let comprimento;
    let largura;
    let resposta;
    let areaComodo;
    let areaTotal = 0;

    do {

        comodo = prompt("informe o nome do comodo: ");

        comprimento = parseInt(prompt("Informe o comprimento do(a) "+comodo));
        largura = parseInt(prompt("Informe a largura do(a) "+comodo));

        areaComodo = comprimento*largura;
        console.log("A área do "+comodo+" é: "+areaComodo);
        areaTotal += areaComodo;
        resposta = prompt("Existe mais algum comodo que queira mencionar? ")

    } while(resposta == "S" || resposta == "s");
    
    console.log("A área total da residência é: "+areaTotal)

}