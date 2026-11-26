
let slideAtual = 0;

const slides = document.querySelectorAll(".slide");
const pontos = document.querySelectorAll(".ponto");

function mostrarSlide(indice) {

    slides[slideAtual].classList.remove("ativo");
    pontos[slideAtual].classList.remove("ativo");

    slideAtual = (indice + slides.length) % slides.length;

    slides[slideAtual].classList.add("ativo");
    pontos[slideAtual].classList.add("ativo");
}

function mudarSlide(direcao) {
    mostrarSlide(slideAtual + direcao);
}

function irParaSlide(indice) {
    mostrarSlide(indice);
}
