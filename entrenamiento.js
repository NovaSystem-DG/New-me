const rutina = [

    // ── CALENTAMIENTO ──────────────────────────────────────────
    { nombre: "Rotación de Hombros",  serie: "Calentamiento", instruccion: "Círculos grandes hacia adelante y hacia atrás", tiempo: 30, foto: "assets/shoulder-rotation.gif" },
    { nombre: "Rotación de Cadera",   serie: "Calentamiento", instruccion: "Circulitos con la cintura, pies al ancho de hombros", tiempo: 30, foto: "assets/cadera.png" },
    { nombre: "Marcha Suave",         serie: "Calentamiento", instruccion: "Levanta las rodillas alternando, como si trocharas", tiempo: 45, foto: "assets/carrera.png" },
    { nombre: "Descanso Preparatorio", serie: "Toma agua 💧", instruccion: "Respira. Ahora empieza el entrenamiento.", tiempo: 15, foto: "assets/shh.jpg" },

    // ── SENTADILLAS SUMO (2×10) ────────────────────────────────
    { nombre: "Sentadillas Sumo", serie: "Serie 1 de 2 — 10 reps", instruccion: "Pies más abiertos que los hombros, puntitas hacia afuera. Baja con la espalda recta.", tiempo: 40, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso",         serie: "Sigue serie 2", instruccion: "", tiempo: 30, foto: "assets/descanso.png" },
    { nombre: "Sentadillas Sumo", serie: "Serie 2 de 2 — 10 reps", instruccion: "Pies más abiertos que los hombros, puntitas hacia afuera. Baja con la espalda recta.", tiempo: 40, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso",         serie: "Sigue Hip Thrust 🫦", instruccion: "", tiempo: 40, foto: "assets/aja.png" },

    // ── HIP THRUST (2×12) ──────────────────────────────────────
    { nombre: "Hip Thrust", serie: "Serie 1 de 2 — 12 reps", instruccion: "Apoya los hombros en la superficie, sube la cadera y aprieta el glúteo arriba.", tiempo: 50, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso",   serie: "Toma agua 💧", instruccion: "", tiempo: 30, foto: "assets/descanso2.jpg" },
    { nombre: "Hip Thrust", serie: "Serie 2 de 2 — 12 reps", instruccion: "Apoya los hombros en la superficie, sube la cadera y aprieta el glúteo arriba.", tiempo: 50, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso",   serie: "Ahora el abdomen", instruccion: "", tiempo: 40, foto: "assets/mental.jpg" },

    // ── PLANCHA (2×20s) ────────────────────────────────────────
    { nombre: "Plancha", serie: "Serie 1 de 2 — 20 segundos", instruccion: "Cuerpo recto como tabla. Activa el core, no dejes caer la cadera.", tiempo: 20, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "Tú puedes bro", instruccion: "", tiempo: 30, foto: "assets/fuerza.png" },
    { nombre: "Plancha", serie: "Serie 2 de 2 — 20 segundos", instruccion: "Cuerpo recto como tabla. Respira, no aguantes el aire.", tiempo: 20, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "Bichito 🐛", instruccion: "", tiempo: 40, foto: "assets/descanso23.jpg" },

    // ── DEAD BUG (2×8) ─────────────────────────────────────────
    { nombre: "Dead Bug", serie: "Serie 1 de 2 — 8 reps", instruccion: "Boca arriba, baja brazo y pierna CONTRARIA al mismo tiempo.", tiempo: 40, foto: "assets/dead-bug.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/a1.png" },
    { nombre: "Dead Bug", serie: "Serie 2 de 2 — 8 reps", instruccion: "Boca arriba, baja brazo y pierna CONTRARIA al mismo tiempo.", tiempo: 40, foto: "assets/dead-bug.gif" },
    { nombre: "Descanso", serie: "Ya casi 🎉", instruccion: "", tiempo: 30, foto: "assets/a1.png" },

    // ── ESTIRAMIENTO FINAL ─────────────────────────────────────
    { nombre: "Estiramiento: Isquiotibiales", serie: "30 segundos",    instruccion: "Sentada en el piso, piernas estiradas, inclínate hacia adelante. No rebotes.", tiempo: 30, foto: "assets/hamstring-stretch.gif" },
    { nombre: "Estiramiento: Glúteo",         serie: "20 seg por lado", instruccion: "Boca arriba, cruza un tobillo sobre la rodilla contraria y jala la pierna hacia el pecho.", tiempo: 40, foto: "assets/glute-stretch.gif" },
    { nombre: "Estiramiento: Cuádriceps",     serie: "20 seg por pierna", instruccion: "De pie, dobla una rodilla y agarra el pie con la mano.", tiempo: 40, foto: "assets/quad-stretch.gif" },
    { nombre: "Respiración Final", serie: "3 respiraciones profundas", instruccion: "Inhala 4 seg · aguanta 2 · exhala 6. El cuerpo agradece esto más de lo que crees.", tiempo: 30, foto: "assets/shh.jpg" },
];

let indiceActual = 0;
let tiempoRestante = 0;
let cronometro;

const timerDisplay = document.getElementById('timer');
const nameDisplay = document.getElementById('exercise-name');
const serieDisplay = document.getElementById('serie-info');
const instruccionDisplay = document.getElementById('instruccion-info');
const btnNext = document.getElementById('btn-next');

function iniciarEjercicio(ex) {
    clearInterval(cronometro);
    timerDisplay.style.color = "";
    nameDisplay.textContent = ex.nombre;
    serieDisplay.textContent = ex.serie;
    instruccionDisplay.textContent = ex.instruccion;
    tiempoRestante = ex.tiempo;

    const imgContainer = document.getElementById('image-container');
    imgContainer.innerHTML = `<img src="${ex.foto}" alt="${ex.nombre}" style="width:100%; height:100%; object-fit:cover; border-radius:16px;">`;

    actualizarPantalla();
    
    cronometro = setInterval(() => {
        tiempoRestante--;
        actualizarPantalla();
        if (tiempoRestante <= 0) {
            clearInterval(cronometro);
            finalizarEjercicio();
        }
    }, 1000);
}

function finalizarEjercicio() {
    nameDisplay.textContent = "YEI!! 🎉";
    setTimeout(() => {
        indiceActual++;
        if (indiceActual < rutina.length) {
            iniciarEjercicio(rutina[indiceActual]);
        } else {
            concluirRutina();
        }
    }, 2000);
}

function concluirRutina() {
    const imgContainer = document.getElementById('image-container');
    if (imgContainer) imgContainer.innerHTML = `<img src="assets/sheswears.jpg" alt="fin" style="width:100%; height:100%; object-fit:cover; border-radius:16px;">`;
    nameDisplay.textContent = "Ay no bebe, que pena 😒";
    serieDisplay.textContent = "Redirigiendo...";
    instruccionDisplay.textContent = "";
    timerDisplay.innerHTML = `<img src="assets/stopbro.png" alt="Terminaste!" style="width:100%; max-width:300px; border-radius:20px; margin: 0 auto; display: block;">`;
    window.onbeforeunload = null;
    setTimeout(() => { window.location.href = "index.html"; }, 4000);
}

function actualizarPantalla() {
    let min = Math.floor(tiempoRestante / 60);
    let seg = tiempoRestante % 60;
    timerDisplay.textContent = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

btnNext.addEventListener('click', () => {
    if (nameDisplay.textContent === "¡Prepárate!") {
        iniciarEjercicio(rutina[indiceActual]);
        btnNext.textContent = "SALTAR";
    } else {
        clearInterval(cronometro);
        indiceActual++;
        if (indiceActual < rutina.length) {
            iniciarEjercicio(rutina[indiceActual]);
        } else {
            concluirRutina();
        }
    }
});

window.onbeforeunload = function() {
    return "¿Seguro que quieres abandonar tu entrenamiento?";
};

function intentarCerrar() {
    if (confirm("¿Seguro que quieres salir? No has terminado tu meta de hoy.")) {
        if (confirm("¿ESTÁS 100% SEGURA? El ejercicio es salud y solo faltan unos minutos.")) {
            if (confirm("Última oportunidad: ¿De verdad vas a rendirte ahora?")) {
                window.onbeforeunload = null;
                window.location.href = "index.html";
            }
        }
    }
}