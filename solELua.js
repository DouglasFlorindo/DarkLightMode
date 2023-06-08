let modo
const botaoTrocar = document.getElementById('botaoTrocar');

// Verifica o modo padrão do sistema:
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    modo = 'escuro';
    console.log('modo padrão:', modo);
    modoEscuro();
} else {
    modo = 'claro';
    console.log('modo padrão:', modo);
    modoClaro();
};

botaoTrocar.addEventListener('click', function () {
    switch (modo) {
        case 'claro':
            modo = 'escuro';
            console.log('era claro, agora escuro');
            trocarModo();
            break;
        case 'escuro':
            modo = 'claro';
            console.log('era escuro, agora claro');
            trocarModo();
            break;
    }
});

function trocarModo() {

    let transicao = document.getElementById('transicao');
    let icon = document.getElementById('icon');

    switch (modo) {
        case 'claro':

            setTimeout(() => modoClaro(), 500);
            transicao.style.setProperty('background', 'var(--claro1)');
            transicao.style.setProperty('display', 'block');
            setTimeout(() => transicao.style.setProperty('display', 'none'), 1000);
            break;

        case 'escuro':

            setTimeout(() => modoEscuro(), 500);
            transicao.style.setProperty('background', 'var(--escuro2)');
            transicao.style.setProperty('display', 'block');
            setTimeout(() => transicao.style.setProperty('display', 'none'), 1000);
            break;

    };
}

// Altera os elementos css para o modo claro:
function modoClaro() {
    document.body.style.setProperty('background', 'linear-gradient(to bottom, var(--claro1), var(--claro2))');
    document.title = "Dia";
    botaoTrocar.textContent = 'Anoitecer';
    icon.textContent = 'light_mode';
    icon.style.setProperty('color', 'var(--sol)');
    botaoTrocar.style.setProperty('background', 'var(--sol)');
    botaoTrocar.style.setProperty('color', 'var(--claro1)');
    document.getElementById('iconTitulo').href = 'https://em-content.zobj.net/thumbs/120/twitter/322/sun_2600-fe0f.png';
}

// Altera os elementos css para o modo escuro:
function modoEscuro() {
    document.body.style.setProperty('background', 'linear-gradient(to bottom, var(--escuro1), var(--escuro2))');
    document.title = "Noite";
    botaoTrocar.textContent = 'Amanhecer';
    icon.textContent = 'dark_mode'
    icon.style.setProperty('color', 'var(--lua)');
    botaoTrocar.style.setProperty('background', 'var(--lua)');
    botaoTrocar.style.setProperty('color', 'var(--escuro2)');
    document.getElementById('iconTitulo').href = 'https://em-content.zobj.net/thumbs/120/twitter/322/new-moon_1f311.png';
}

