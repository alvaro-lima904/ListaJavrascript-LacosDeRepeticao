function conversao() {
    let celsius = 10;
    let contador = 10;
    let fahrenheit;
    while (contador<=100) {
        fahrenheit = (9*celsius+160)/5;
        console.log(celsius+"ºC convertido para fahrenheit é "+fahrenheit+"ºF");
        celsius+=10;
        contador+=10;
    }
    document.getElementById('resultado').innerText = "Olhe o console"
}