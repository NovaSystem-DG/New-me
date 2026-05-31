const rutina = [
    
    // ── CALENTAMIENTO ──────────────────────────────────────────
    { nombre: "Movilidad de Cuello", serie: "Calentamiento", instruccion: "Inclina y rota la cabeza suavemente en todas direcciones", tiempo: 30, foto: "assets/cuello.png" },
    { nombre: "Rotación de Hombros", serie: "Calentamiento", instruccion: "Círculos grandes hacia adelante y hacia atrás", tiempo: 30, foto: "assets/shoulder-rotation.gif" },
    { nombre: "Rotación de Cadera", serie: "Calentamiento", instruccion: "Circulitos con la cintura, pies al ancho de hombros", tiempo: 30, foto: "assets/cadera.png" },
    { nombre: "Sentadillas Suaves", serie: "Calentamiento", instruccion: "Lentas y tranquilas, solo calentar las piernas", tiempo: 60, foto: "assets/sumo-quat.gif" },
    { nombre: "Marcha Suave", serie: "Calentamiento", instruccion: "Levanta las rodillas alternando, como si trocharas", tiempo: 60, foto: "assets/carrera.png" },
    { nombre: "Descanso Preparatorio", serie: "It's time to drink wota 😈", instruccion: "Toma agua, respira. Ahora empieza el entrenamiento.", tiempo: 20, foto: "assets/shh.jpg" },

    // ── SENTADILLAS SUMO (3×12) ────────────────────────────────
    { nombre: "Sentadillas Sumo", serie: "Serie 1 de 3 — 12 reps", instruccion: "Pies más abiertos que los hombros, puntitas hacia afuera. Baja con la espalda recta.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso", serie: "Sigue serie 2", instruccion: "", tiempo: 30, foto: "assets/descanso.png" },
    { nombre: "Sentadillas Sumo", serie: "Serie 2 de 3 — 12 reps", instruccion: "Pies más abiertos que los hombros, puntitas hacia afuera. Baja con la espalda recta.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso", serie: "Esta es la ultima (pq tantas carajo)", instruccion: "", tiempo: 30, foto: "assets/deses.png" },
    { nombre: "Sentadillas Sumo", serie: "The last one", instruccion: "Pies más abiertos que los hombros, puntitas hacia afuera. Baja con la espalda recta.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso", serie: "Sigue Hip Thrust 🫦", instruccion: "", tiempo: 45, foto: "assets/aja.png" },

    // ── HIP THRUST (3×15) ──────────────────────────────────────
    { nombre: "Hip Thrust", serie: "Serie 1 de 3 — 15 reps", instruccion: "Apoya los hombros en la superficie, sube la cadera y aprieta el glúteo arriba.", tiempo: 60, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso", serie: "Its time to drink water", instruccion: "", tiempo: 30, foto: "assets/descanso2.jpg" },
    { nombre: "Hip Thrust", serie: "Serie 2 de 3 — 15 reps", instruccion: "Apoya los hombros en la superficie, sube la cadera y aprieta el glúteo arriba.", tiempo: 60, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso", serie: "No tomese wota", instruccion: "", tiempo: 30, foto: "assets/descanso2.jpg" },
    { nombre: "Hip Thrust", serie: "MY pata Hurt", instruccion: "Apoya los hombros en la superficie, sube la cadera y aprieta el glúteo arriba.", tiempo: 60, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso", serie: "Ahora hay que levantar dead people", instruccion: "", tiempo: 45, foto: "assets/mental.jpg" },

    // ── ROMANIAN DEADLIFT (3×12) ───────────────────────────────
    { nombre: "Romanian Deadlift", serie: "Serie 1 de 3 — 12 reps", instruccion: "Baja con la espalda RECTA, siente el estirón en los femorales. Rodillas ligeramente dobladas.", tiempo: 55, foto: "assets/romanian-deadlift.gif" },
    { nombre: "Descanso", serie: "bleh", instruccion: "", tiempo: 30, foto: "assets/descanso3.jpg" },
    { nombre: "Romanian Deadlift", serie: "Serie 2 de 3 — 12 reps", instruccion: "Baja con la espalda RECTA, siente el estirón en los femorales. Rodillas ligeramente dobladas.", tiempo: 55, foto: "assets/romanian-deadlift.gif" },
    { nombre: "Descanso", serie: "Qpensarian de mi", instruccion: "", tiempo: 30, foto: "assets/descanso3.jpg" },
    { nombre: "Romanian Deadlift", serie: "last one", instruccion: "Baja con la espalda RECTA, siente el estirón en los femorales. Rodillas ligeramente dobladas.", tiempo: 55, foto: "assets/romanian-deadlift.gif" },
    { nombre: "Descanso", serie: "Sigue Fire Hydrants, como quien dice perro", instruccion: "", tiempo: 45, foto: "assets/Perro1.png" },

    // ── FIRE HYDRANTS (3×15 p/p) ───────────────────────────────
    { nombre: "Fire Hydrants", serie: "Serie 1 de 3 — 15 por pierna", instruccion: "En cuatro patas, levanta la rodilla hacia el lado sin rotar la cadera.", tiempo: 70, foto: "assets/fire-hydrant.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/descanso10.png" },
    { nombre: "Fire Hydrants", serie: "Serie 2 de 3 — 15 por pierna", instruccion: "En cuatro patas, levanta la rodilla hacia el lado sin rotar la cadera.", tiempo: 70, foto: "assets/fire-hydrant.gif" },
    { nombre: "Descanso", serie: "Aish", instruccion: "", tiempo: 30, foto: "assets/descanso10.png" },
    { nombre: "Fire Hydrants", serie: "Serie 3 de 3 — 15 por pierna", instruccion: "En cuatro patas, levanta la rodilla hacia el lado sin rotar la cadera.", tiempo: 70, foto: "assets/fire-hydrant.gif" },
    { nombre: "Descanso", serie: "PATADA", instruccion: "", tiempo: 45, foto: "assets/heismipimp.jpg" },

    // ── PATADA DE GLÚTEO (3×15 p/p) ───────────────────────────
    { nombre: "Patada de Glúteo", serie: "Serie 1 de 3 — 15 por pierna", instruccion: "En cuatro patas, pierna recta hacia atrás y arriba. Aprieta el glúteo arriba del todo.", tiempo: 70, foto: "assets/donkey-kick.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/descanso9.jpg" },
    { nombre: "Patada de Glúteo", serie: "Serie 2 de 3 — 15 por pierna", instruccion: "En cuatro patas, pierna recta hacia atrás y arriba. Aprieta el glúteo arriba del todo.", tiempo: 70, foto: "assets/donkey-kick.gif" },
    { nombre: "Descanso", serie: "PLEASE HELP", instruccion: "", tiempo: 30, foto: "assets/hear.jpg" },
    { nombre: "Patada de Glúteo", serie: "Serie 3 de 3 — 15 por pierna", instruccion: "En cuatro patas, pierna recta hacia atrás y arriba. Aprieta el glúteo arriba del todo.", tiempo: 70, foto: "assets/donkey-kick.gif" },
    { nombre: "Descanso", serie: "Sigue el abdomen", instruccion: "", tiempo: 45, foto: "assets/Deses.png" },

    // ── PLANCHA (3×20s) ────────────────────────────────────────
    { nombre: "Plancha", serie: "Serie 1 de 3 — 20 segundos", instruccion: "Cuerpo recto como tabla. Activa el core, no dejes caer la cadera.", tiempo: 20, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "Tu puedes bro", instruccion: "", tiempo: 30, foto: "assets/fuerza.png" },
    { nombre: "Plancha", serie: "Serie 2 de 3 — 20 segundos", instruccion: "Cuerpo recto como tabla. Activa el core, no dejes caer la cadera.", tiempo: 20, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "no, no puedo", instruccion: "", tiempo: 30, foto: "assets/hear.jpg" },
    { nombre: "Plancha", serie: "Serie 3 de 3 — 20 segundos", instruccion: "Cuerpo recto como tabla. Respira, no aguantes el aire.", tiempo: 20, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "Bichito 🐛", instruccion: "", tiempo: 45, foto: "assets/descanso23.jpg" },

    // ── DEAD BUG (3×10) ────────────────────────────────────────
    { nombre: "Dead Bug", serie: "Serie 1 de 3 — 10 reps", instruccion: "Boca arriba, baja brazo y pierna CONTRARIA al mismo tiempo.", tiempo: 50, foto: "assets/dead-bug.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/a1.png" },
    { nombre: "Dead Bug", serie: "Serie 2 de 3 — 10 reps", instruccion: "Boca arriba, baja brazo y pierna CONTRARIA al mismo tiempo.", tiempo: 50, foto: "assets/dead-bug.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/a1.png" },
    { nombre: "Dead Bug", serie: "Serie 3 de 3 — 10 reps", instruccion: "Boca arriba, baja brazo y pierna CONTRARIA al mismo tiempo.", tiempo: 50, foto: "assets/dead-bug.gif" },
    { nombre: "Descanso", serie: "NOOO RUSSIAN TWIST", instruccion: "", tiempo: 45, foto: "assets/Deses3.png" },

    // ── RUSSIAN TWIST (3×15) ───────────────────────────────────
    { nombre: "Russian Twist", serie: "Serie 1 de 3 — 15 reps", instruccion: "Toca el piso a cada lado contando como 1. Pies levantados si puedes.", tiempo: 50, foto: "assets/exercise-twist.gif" },
    { nombre: "Descanso", serie: "30 seg", instruccion: "", tiempo: 30, foto: "assets/trap.png" },
    { nombre: "Russian Twist", serie: "Serie 2 de 3 — 15 reps", instruccion: "Toca el piso a cada lado contando como 1. Pies levantados si puedes.", tiempo: 50, foto: "assets/exercise-twist.gif" },
    { nombre: "Descanso", serie: "No masss, yo para que hago esto", instruccion: "", tiempo: 30, foto: "assets/mental.jpg" },
    { nombre: "Russian Twist", serie: "Joda", instruccion: "Toca el piso a cada lado contando como 1. Pies levantados si puedes.", tiempo: 50, foto: "assets/exercise-twist.gif" },
    { nombre: "Descanso", serie: "Ahora los brazos", instruccion: "", tiempo: 45, foto: "assets/fuerza.png" },

    // ── FLEXIONES DE RODILLAS (3×8) ───────────────────────────
    { nombre: "Flexiones de Rodillas", serie: "Serie 1 de 3 — 8 reps", instruccion: "Rodillas en el piso, manos al ancho de hombros. Baja el pecho sin que la cadera caiga.", tiempo: 45, foto: "assets/knee-push.gif" },
    { nombre: "Descanso", serie: "Esta sere yo", instruccion: "", tiempo: 30, foto: "assets/a1.png" },
    { nombre: "Flexiones de Rodillas", serie: "Serie 2 de 3 — 8 reps", instruccion: "Si puedes más, baja más despacio (3 seg bajando). Pecho, hombros y tríceps trabajando.", tiempo: 45, foto: "assets/knee-push.gif" },
    { nombre: "Descanso", serie: "LAST ONE", instruccion: "", tiempo: 30, foto: "assets/descanso7.jpg" },
    { nombre: "Flexiones de Rodillas", serie: "Serie 3 de 3 — 8 reps", instruccion: "Rodillas en el piso, manos al ancho de hombros. Baja el pecho sin que la cadera caiga.", tiempo: 45, foto: "assets/knee-push.gif" },
    { nombre: "Descanso", serie: "Sigue Fondos en Silla (no tengo silla)", instruccion: "", tiempo: 45, foto: "assets/relaxbb.jpg" },

    // ── FONDOS EN SILLA / DIPS (3×10) ─────────────────────────
    { nombre: "Fondos en Silla", serie: "Serie 1 de 3 — 10 reps", instruccion: "Manos en el borde de una silla, espalda cerca. Baja doblando los codos hasta 90°. Codos hacia atrás.", tiempo: 50, foto: "assets/tricep-dips.gif" },
    { nombre: "Descanso", serie: "Hey hey hey pequeñas, con calma", instruccion: "", tiempo: 30, foto: "assets/descanso24.jpg" },
    { nombre: "Fondos en Silla", serie: "Serie 2 de 3 — 10 reps", instruccion: "Manos en el borde de una silla, espalda cerca. Baja doblando los codos hasta 90°. Codos hacia atrás.", tiempo: 50, foto: "assets/tricep-dips.gif" },
    { nombre: "Descanso", serie: "Última de brazos!", instruccion: "", tiempo: 30, foto: "assets/descanso26.jpg" },
    { nombre: "Fondos en Silla", serie: "Serie 3 de 3 — 10 reps", instruccion: "Manos en el borde de una silla, espalda cerca. Baja doblando los codos hasta 90°. Codos hacia atrás.", tiempo: 50, foto: "assets/tricep-dips.gif" },
    { nombre: "Descanso", serie: "OTRA PLANCHA", instruccion: "", tiempo: 45, foto: "assets/descanso22.jpg" },

    // ── PLANCHA CON TOQUE DE HOMBRO (3×10) ────────────────────
    { nombre: "Plancha Toque Hombro", serie: "Serie 1 de 3 — 10 reps", instruccion: "En plancha, toca el hombro contrario alternando. Caderas quietas, no las bambolees.", tiempo: 50, foto: "assets/shoulder-taps-push-ups.gif" },
    { nombre: "Descanso", serie: "AAAaaAaAA", instruccion: "", tiempo: 30, foto: "assets/NO.jpg" },
    { nombre: "Plancha Toque Hombro", serie: "Serie 2 de 3 — 10 reps", instruccion: "En plancha, toca el hombro contrario alternando. Caderas quietas, no las bambolees.", tiempo: 50, foto: "assets/shoulder-taps-push-ups.gif" },
    { nombre: "Descanso", serie: "YA CASIIII", instruccion: "", tiempo: 30, foto: "assets/Deses3.png" },
    { nombre: "Plancha Toque Hombro", serie: "Serie 3 de 3 — 10 reps", instruccion: "En plancha, toca el hombro contrario alternando. Caderas quietas, no las bambolees.", tiempo: 50, foto: "assets/shoulder-taps-push-ups.gif" },
    { nombre: "Descanso", serie: "PORFIN, ahora estirar", instruccion: "", tiempo: 30, foto: "assets/descanso22.jpg" },

    // ── ESTIRAMIENTO FINAL ─────────────────────────────────────
    { nombre: "Estiramiento: Cuádriceps", serie: "20 seg por pierna", instruccion: "De pie, dobla una rodilla y agarra el pie con la mano. Si no llegas, agárrate de algo.", tiempo: 40, foto: "assets/quad-stretch.gif" },
    { nombre: "Estiramiento: Isquiotibiales", serie: "30 segundos", instruccion: "Sentada en el piso, piernas estiradas, inclínate hacia adelante. No rebotes.", tiempo: 30, foto: "assets/hamstring-stretch.gif" },
    { nombre: "Estiramiento: Glúteo", serie: "20 seg por lado", instruccion: "Boca arriba, cruza un tobillo sobre la rodilla contraria y jala la pierna hacia el pecho.", tiempo: 40, foto: "assets/glute-stretch.gif" },
    { nombre: "Estiramiento: Cadera", serie: "20 seg por lado", instruccion: "Arrodíllate en un paso largo, cadera hacia adelante y abajo.", tiempo: 40, foto: "assets/Estiramiento-del-flexor-de-cadera.png" },
    { nombre: "Estiramiento: Pecho y Hombros", serie: "25 segundos", instruccion: "Entrelaza los dedos detrás de la espalda, saca el pecho y sube los brazos suave.", tiempo: 25, foto: "assets/pecho-h.png" },
    { nombre: "Estiramiento: Tríceps", serie: "20 seg por lado", instruccion: "Sube un brazo, dóblalo por detrás de la cabeza, empuja el codo suavemente con la otra mano.", tiempo: 40, foto: "assets/Triceps.png" },
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