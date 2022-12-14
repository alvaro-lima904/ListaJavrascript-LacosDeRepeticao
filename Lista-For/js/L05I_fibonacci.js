function fibonacci() {

    let sucessor = 1;
    let antecessor = 0;
    let soma;

    console.log('o 1º termo da sequência é: 0')
    console.log('o 1º termo da sequência é: 1')
    for (let contadora = 3; contadora <= 15; contadora++) {
        soma = antecessor+sucessor;
        antecessor = sucessor;
        sucessor = soma;
        console.log('o '+contadora+'º termo da sequência é: '+soma);
    }

}