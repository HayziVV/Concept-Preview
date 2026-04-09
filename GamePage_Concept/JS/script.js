const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const characters = [
    {
        nome: "Mercenario",
        Vida: 300,
        Energia: 120,
        Força: 30,
        Agilidade: 20,
        Inteligência: 20,
        Precisão: 30,
        Armadura: 20,
        Resistência: 20,
        lore: "Veterano de inúmeras batalhas corporativas, o Mercenario é um especialista em combate. Equipado para qualquer situação, ele combina força bruta com táticas de combate versáteis para derrotar seus inimigos.",
        imagem: "images/mercenary.png"
    },
    {
        nome: "Inventor",
        Vida: 200,
        Energia: 220,
        Força: 20,
        Agilidade: 20,
        Inteligência: 50,
        Precisão: 10,
        Armadura: 10,
        Resistência: 30,
        lore: "Uma mente brilhante em um mundo de força bruta. O Inventor usa sua inteligência superior e aparatos tecnológicos para controlar o campo de batalha, superando a força de seus inimigos com sua inteligencia.",
        imagem: "images/inventor.png"
    },
    {
        nome: "Caçador de Recompensas",
        Vida: 250,
        Energia: 170,
        Força: 20,
        Agilidade: 40,
        Inteligência: 20,
        Precisão: 20,
        Armadura: 30,
        Resistência: 10,
        lore: "Ágil e letal, o Bounty Hunter vive para caçar. Ele rastreia seus alvos pelos desertos áridos, utilizando precisão e velocidade para garantir que o contrato seja sempre cumprido.",
        imagem: "images/bounty_hunter.png"
    },
];

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

        document.getElementById('stat-vida').innerText = heroi.Vida;
        document.getElementById('stat-energia').innerText = heroi.Energia;
        document.getElementById('stat-forca').innerText = heroi.Força;
        document.getElementById('stat-agilidade').innerText = heroi.Agilidade;
        document.getElementById('stat-inteligencia').innerText = heroi.Inteligência;
        document.getElementById('stat-precisao').innerText = heroi.Precisão;
        document.getElementById('stat-armadura').innerText = heroi.Armadura;
        document.getElementById('stat-resist').innerText = heroi.Resistência;
    });
});