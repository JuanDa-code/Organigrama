const asamblea = document.querySelector("#asamblea");
const ulAsamblea = document.querySelector("#ulAsamblea");
const gerente = document.querySelector("#gerente");
const ulGerente = document.querySelector("#ulGerente");
const dirJuridico = document.querySelector("#dirJuridico");
const ulDirJuridico = document.querySelector("#ulDirJuridico");
const dirComercial = document.querySelector("#dirComercial");
const ulDirComercial = document.querySelector("#ulDirComercial");
const supTelemercadeo = document.querySelector("#supTelemercadeo");
const ulSupTelemercadeo = document.querySelector("#ulSupTelemercadeoulSupTelemercadeo");

asamblea.addEventListener('click', () => {
    show(ulAsamblea);
});
gerente.addEventListener('click', () => {
    show(ulGerente);
});
dirJuridico.addEventListener('click', () => {
    show(ulDirJuridico);
});
dirComercial.addEventListener('click', () => {
    show(ulDirComercial);
});
supTelemercadeo.addEventListener('click', () => {
    show(ulSupTelemercadeo);
});

function show(element) {
    element.classList.toggle('hidden');
}