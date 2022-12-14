function divisiveis() {
    let contadora = 1;
    do {
        if (contadora%4==0) {
            console.log("Os números divisiveis por 4 são: "+contadora);
        };
        contadora++;
    } while (contadora<=200);
    document.getElementById('resultado').innerText = "Olhe o console";
}