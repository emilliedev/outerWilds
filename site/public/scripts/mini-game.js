var pontos = 0;

function contarPontoUm() {
    olho1.style.display = 'none'
    pontos = pontos + 1;
    condicao()
}

function contarPontoDois() {
    olho2.style.display = 'none'
    pontos = pontos + 1;
    condicao()
}

function contarPontoTres() {
    olho3.style.display = 'none'
    pontos = pontos + 1;
    condicao()
}

function condicao() {
    if (pontos == 3) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Parabéns! Você encontrou o Olho!',
            showConfirmButton: false,
            timer: 2200
          })
    }
}