function temporizador() {
    let horasRecebidas = parseInt(document.getElementById('horasMax').value);
    let minutosRecebidos = parseInt(document.getElementById('minutosMax').value);
    let segundosRecebidos = parseInt(document.getElementById('segundosMax').value);

    for (horas = horasRecebidas; horas > -1; horas--) {
        for (minutos = minutosRecebidos; minutos > -1; minutos--) {
            if (minutos == 0) {
                minutosRecebidos = 59;
            }
            for (segundos = segundosRecebidos; segundos > -1; segundos--) {
                document.write(horas + " : " + minutos + " . " + segundos + "</br>")
                if (segundos == 0) {
                    segundosRecebidos = 59;
                }
            }
        }
    }
}