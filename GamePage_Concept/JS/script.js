const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

function gerarBotoesPersonagens() {
    const container = document.getElementById('botoes-container');
    let htmlBotoes = '';
    characters.forEach((heroi, index) => {
        let classeAtiva = index === 0 ? 'char-btn active' : 'char-btn';
        htmlBotoes += `<button class="${classeAtiva}" data-id="${index}">${heroi.nome}</button>`;
    });

    container.innerHTML = htmlBotoes;
}

gerarBotoesPersonagens();

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');


        sections.forEach(section => {
            section.classList.add('hidden');
        });

        navLinks.forEach(nav => {
            nav.classList.remove('active');
        });


        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');

        this.classList.add('active');
    });
});

const botoes = document.querySelectorAll('.char-btn');


botoes.forEach(botao => {
    botao.addEventListener('click', function () {

        botoes.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const id = this.getAttribute('data-id');
        const heroi = characters[id];


        document.getElementById('char-name').innerText = heroi.nome;
        document.querySelector('.char-lore').innerText = heroi.lore;
        document.getElementById('char-img').src = heroi.imagem;

        document.getElementById('stat-vida').innerText = heroi.Life;
        document.getElementById('stat-energia').innerText = heroi.Energy;
        document.getElementById('stat-forca').innerText = heroi.Streght;
        document.getElementById('stat-agilidade').innerText = heroi.Agility;
        document.getElementById('stat-inteligencia').innerText = heroi.Inteligence;
        document.getElementById('stat-precisao').innerText = heroi.Precision;
        document.getElementById('stat-armadura').innerText = heroi.Armor;
        document.getElementById('stat-resist').innerText = heroi.Resistance;
    });
});

function carregarLore() {
    const loreContainer = document.getElementById('lore-container');

    let htmlDaHistoria = `<h3>${gameLore.title}</h3>`;
    gameLore.sections.forEach(secao => {
        htmlDaHistoria += `
            <div class="lore-section">
                <h4 style="color: #ffaa00; margin-bottom: 5px;">${secao.subtitle}</h4>
                <p style="color: #ccc; line-height: 1.6; margin-top: 0;">${secao.paragraph}</p>
            </div>
            <br>
        `;
    });

    loreContainer.innerHTML = htmlDaHistoria;
}

carregarLore();

document.querySelector('.char-btn[data-id="0"]').click();