function conversao() {

    let celsius = 10;
    let fahrenheit;

    for (contadora = 1; contadora <= 10; contadora++) {
        fahrenheit = (celsius*9+160)/5;
        console.log('A conversão de '+celsius+"ºC para fahrenheit é: "+fahrenheit+"ºF");
        celsius = celsius+10;
    }

}