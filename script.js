const botaoModoNoturno = document.getElementById('darkModeBtn');
let modoEscuroAtivo = false;

function alternarModo() {
    console.log('botão clicado!');


if (modoEscuroAtivo) {
    document.body.classList.remove('modo-escuro');
    modoEscuroAtivo = false;
    console.log('Modo claro ativado');
}

else {
    document.body.classList.add('modo-escuro');
    modoEscuroAtivo = true;
    console.log('Modo escuro ativado');
}
}

botaoModoNoturno.addEventListener('click', alternarModo);