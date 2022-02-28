'use strict'

//             localizar elementos

const inputs = [...document.querySelectorAll('.a')];
const options = [...document.querySelectorAll('.options')];
const optionss = [...document.querySelectorAll('.l')];
const modal = document.querySelector('.modal');
const optionesDeHabitos = document.querySelectorAll('.optionsd');
const modal2 = document.querySelector('.modal-habitos');
const imgsHabitos = document.querySelectorAll('.z');



//             variables

//imagenes
const completado = `<img src="img/check.png " alt=" ">`;
const reAgendado = `<img src="img/clock.png " alt=" ">`;
const prioridad = `<img src="img/star.png " alt=" ">`;
const seguimiento = `<img src="img/letter-s.png " alt=" ">`;
const pausado = `<img src="img/pause.png " alt=" ">`;
const enProceso = `<img src="img/arroba.png " alt=" ">`;
const delegado = `<img src="img/vitamin.png " alt=" ">`;

let agua = `<img src="img/agua.png ">`;
let pose = `<img src="img/pose-de-yoga.png ">`;
let ensalada = `<img src="img/ensalada.png ">`;
let sol = `<img src="img/sol.png ">`;
let modo = `<img src="img/modo-de-sueno.png ">`;
let orar = `<img src="img/rezar.png ">`;
let yoga = `<img src="img/loto.png ">`;
let like = `<img src="img/me-gusta.png ">`;
let recuerdos = `<img src="img/imagen.png ">`;
let target = `<img src="img/target.png ">`;
let saludos = `<img src="img/salud.png ">`;
let globo = `<img src="img/globo-aerostatico.png ">`;

//optiones

//             funciones

const agregar = (key, info) => {
    localStorage.setItem(`${key}`, `${info}`);
}

const actualizar = () => {
    location.reload(true)
}


//             eventos

inputs.forEach(inp => {
    inp.addEventListener('change', () => {

        let key = inp.classList.item(1);
        let info = inp.value;
        return agregar(key, info);
    })
})

options.forEach(opp => {
    opp.addEventListener('click', () => {
        modal.classList.add('modals');
        let key = opp.classList.item(1);

        let md = [...document.querySelectorAll('.l')];

        for (let mds of md) {
            mds.addEventListener('click', () => {
                modal.classList.remove('modals')
                let inf = mds.classList.item(0);
                localStorage.setItem(`${key}`, `${inf}`);
                return actualizar();
            })
        }

    })
})

for (let botone of optionesDeHabitos) {
    botone.addEventListener('click', () => {
        modal2.style.opacity = 1;
        modal2.style.zIndex = 5;
        let key = botone.classList.item(1);
        imgsHabitos.forEach(img => {
            img.addEventListener('click', () => {
                let info = img.classList.item(0);
                location.reload();
                return agregar(key, info);
            })
        })
    })
}


addEventListener('load', () => {
    inputs.forEach(inps => {
        inps.value = localStorage.getItem(`${inps.classList.item(1)}`)
    })



})

addEventListener('load', () => {

    options.forEach(e => {

        const ver = () => {
            let id = e.classList.item(1);
            if (localStorage.getItem(id) == 'c1') {
                e.innerHTML = completado;
            } else if (localStorage.getItem(id) == 'c2') {
                e.innerHTML = reAgendado;
            } else if (localStorage.getItem(id) == 'c3') {
                e.innerHTML = prioridad;
            } else if (localStorage.getItem(id) == 'c4') {
                e.innerHTML = seguimiento;
            } else if (localStorage.getItem(id) == 'c5') {
                e.innerHTML = pausado;
            } else if (localStorage.getItem(id) == 'c6') {
                e.innerHTML = enProceso;
            } else if (localStorage.getItem(id) == 'c7') {
                e.innerHTML = delegado;
            } else {

            }

        }

        return ver();
    })

    optionesDeHabitos.forEach(btn => {

        let id = btn.classList.item('1')

        if (localStorage.getItem(id) == "comida") {
            btn.innerHTML = ensalada;
        } else if (localStorage.getItem(id) == 'agua') {
            btn.innerHTML = agua;
        } else if (localStorage.getItem(id) == 'pose') {
            btn.innerHTML = pose;
        } else if (localStorage.getItem(id) == 'sol') {
            btn.innerHTML = sol;
        } else if (localStorage.getItem(id) == 'modo') {
            btn.innerHTML = modo;
        } else if (localStorage.getItem(id) == 'orar') {
            btn.innerHTML = orar;
        } else if (localStorage.getItem(id) == 'yoga') {
            btn.innerHTML = yoga;
        } else if (localStorage.getItem(id) == 'likess') {
            btn.innerHTML = like;
        } else if (localStorage.getItem(id) == 'recuerdoss') {
            btn.innerHTML = recuerdos;
        } else if (localStorage.getItem(id) == 'targets') {
            btn.innerHTML = target;
        } else if (localStorage.getItem(id) == 'gratitudes') {
            btn.innerHTML = saludos;
        } else if (localStorage.getItem(id) == 'soltar') {
            btn.innerHTML = globo;
        }

    })
})