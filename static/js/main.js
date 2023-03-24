const asamblea = document.querySelector("#asamblea");
const ulAsamblea = document.querySelector("#ulAsamblea");

asamblea.addEventListener('click', () => {
    show(ulAsamblea);
});

/* Gerente */

const gerente = document.querySelector("#gerente");
const ulGerente = document.querySelector("#ulGerente");
const dirJuridico = document.querySelector("#dirJuridico");
const ulDirJuridico = document.querySelector("#ulDirJuridico");
const dirComercial = document.querySelector("#dirComercial");
const ulDirComercial = document.querySelector("#ulDirComercial");
const supTelemercadeo = document.querySelector("#supTelemercadeo");
const ulSupTelemercadeo = document.querySelector("#ulSupTelemercadeo");
const adminSistemas = document.querySelector("#adminSistemas");
const ulAdminSistemas = document.querySelector("#ulAdminSistemas");

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
adminSistemas.addEventListener('click', () => {
    show(ulAdminSistemas);
});

/* End Gerente */

/* RRHH */

const jefeRRHH = document.querySelector("#jefeRRHH");
const ulJefeRRHH = document.querySelector("#ulJefeRRHH");

jefeRRHH.addEventListener('click', () => {
    show(ulJefeRRHH);
});

/* End RRHH */

/* subgerente */

const subgerente = document.querySelector("#subgerente");
const ulSubgerente = document.querySelector("#ulSubgerente");
const coorSac = document.querySelector("#coorSac");
const ulCoorSac = document.querySelector("#ulCoorSac");
const superSCC = document.querySelector("#superSCC");
const ulSuperSCC = document.querySelector("#ulSuperSCC");
const areaAdmin = document.querySelector("#areaAdmin");
const ulAreaAdmin = document.querySelector("#ulAreaAdmin");
const coorCartera = document.querySelector("#coorCartera");
const ulCoorCartera = document.querySelector("#ulCoorCartera");
const superPQR = document.querySelector("#superPQR");
const ulSuperPQR = document.querySelector("#ulSuperPQR");
const contabilidad = document.querySelector("#contabilidad");
const ulContabilidad = document.querySelector("#ulContabilidad");
const psicologia = document.querySelector("#psicologia");
const ulPsicologia = document.querySelector("#ulPsicologia");

subgerente.addEventListener('click', () => {
    show(ulSubgerente);
});
coorSac.addEventListener('click', () => {
    show(ulCoorSac);
});
superSCC.addEventListener('click', () => {
    show(ulSuperSCC);
});
areaAdmin.addEventListener('click', () => {
    show(ulAreaAdmin);
});
coorCartera.addEventListener('click', () => {
    show(ulCoorCartera);
});
superPQR.addEventListener('click', () => {
    show(ulSuperPQR);
});
contabilidad.addEventListener('click', () => {
    show(ulContabilidad);
});
psicologia.addEventListener('click', () => {
    show(ulPsicologia);
});

/* End Subgerente */

function show(element) {
    element.classList.toggle('hidden');
}