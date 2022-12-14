function areaTotal(){
    let resposta = 'S';
    let acumuladora = 0;

    while (resposta == 'S' || resposta == 's') {
        let nome = prompt('Informe o nome do comodo')
        let largura = parseInt(prompt('Informe a largura do comodo'));
        let comprimento = parseInt(prompt('Informe o comprimento do comodo'));
        
        let area = largura*comprimento;
        acumuladora = area + acumuladora;

        resposta = prompt('Tem mais algum cômodo?')

        console.log("O nome do comodo é"+nome);
        console.log('A área deste comodo é: '+area);
        console.log('A area total é: '+acumuladora);

        document.getElementById('resultado').innerText = "Olhe o console";
    }
    
}