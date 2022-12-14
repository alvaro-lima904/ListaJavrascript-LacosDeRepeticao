function fatoriais() {

    let valor = 10;
    let antecessor = 9;
    let fatorial = 10;

    do {

        if (antecessor%2==1) {
            fatorial = antecessor * fatorial;
            console.log("O fatorial de 10 no "+antecessor+"º valor é: "+fatorial);
        }
        antecessor--;
    } while (antecessor>1);
    document.getElementById("resultado").innerHTML = "Olha o console";
}