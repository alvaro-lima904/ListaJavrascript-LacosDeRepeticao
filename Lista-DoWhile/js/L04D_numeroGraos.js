function graos() {
    let contadora = 0;
    let graos = 1;
    
    do {

        graos = graos+graos+1;
        console.log("A quantidade de grãos na "+contadora+"º posição é:"+graos)
        contadora++;
    } while (contadora<= 64);

    document.getElementById('resultado').innerText = "Olha o console"
} 