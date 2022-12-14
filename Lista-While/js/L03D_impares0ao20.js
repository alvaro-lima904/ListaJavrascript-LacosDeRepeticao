function impares() {
    let contadora = 0;

    while (contadora < 20) {
        if (contadora%2==1) {
            console.log(contadora);
        }
        contadora++;
    }
    document.getElementById('resultado').innerText = "Olhe o console";
}