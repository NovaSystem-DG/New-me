const rutina = [

    // ── CALENTAMIENTO ──────────────────────────────────────────
    { nombre: "Rotación de Hombros",  serie: "Calentamiento", instruccion: "Círculos grandes hacia adelante y hacia atrás, lentamente", tiempo: 30, foto: "assets/shoulder-rotation.gif" },
    { nombre: "Rotación de Cadera",   serie: "Calentamiento", instruccion: "Circulitos con la cintura, pies al ancho de hombros. Suave y controlado", tiempo: 30, foto: "assets/cadera.png" },
    { nombre: "Marcha Suave en el Sitio",         serie: "Calentamiento", instruccion: "Levanta las rodillas alternando como trocha, pero sin hacer ruido", tiempo: 45, foto: "assets/carrera.png" },
    { nombre: "Hidratación 💧", serie: "Respira", instruccion: "Toma agua. El cuerpo está listo. Ahora vamos.", tiempo: 15, foto: "assets/shh.jpg" },

    // ── SENTADILLAS LENTAS (3×15) ──────────────────────────────
    { nombre: "Sentadillas Controladas", serie: "Serie 1 de 3 — 15 reps", instruccion: "Pies a la altura de los hombros. Baja LENTAMENTE (sin ruido), sube controlado.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso",         serie: "Respira 20 seg", instruccion: "", tiempo: 20, foto: "assets/descanso.png" },
    { nombre: "Sentadillas Controladas", serie: "Serie 2 de 3 — 15 reps", instruccion: "Igual velocidad. Lento hacia abajo, controlado hacia arriba.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso",         serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/descanso.png" },
    { nombre: "Sentadillas Controladas", serie: "Serie 3 de 3 — 15 reps", instruccion: "¡Última serie! Piernas fuertes como hierro.", tiempo: 50, foto: "assets/sumo-quat.gif" },
    { nombre: "Descanso",   serie: "Ahora caderas", instruccion: "", tiempo: 30, foto: "assets/aja.png" },

    // ── PUENTE DE GLÚTEOS (3×15) ──────────────────────────────
    { nombre: "Puente de Glúteos", serie: "Serie 1 de 3 — 15 reps", instruccion: "Acostada boca arriba, levanta la cadera y APRIETA los glúteos arriba. Lento abajo.", tiempo: 45, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso",   serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/descanso2.jpg" },
    { nombre: "Puente de Glúteos", serie: "Serie 2 de 3 — 15 reps", instruccion: "Aprieta fuerte en la cúspide. Baja lentamente sin ruido.", tiempo: 45, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso",   serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/descanso2.jpg" },
    { nombre: "Puente de Glúteos", serie: "Serie 3 de 3 — 15 reps", instruccion: "¡Vamos! Contrae, aprieta, baja con control.", tiempo: 45, foto: "assets/hip-thrust.gif" },
    { nombre: "Descanso",   serie: "Ahora abdomen", instruccion: "", tiempo: 30, foto: "assets/mental.jpg" },

    // ── PLANCHA ISOMÉTRICA (3×25s) ────────────────────────────
    { nombre: "Plancha Isométrica", serie: "Serie 1 de 3 — 25 seg", instruccion: "Cuerpo recto como tabla. Abdomen adentro, no dejes caer la cadera. Silencio total.", tiempo: 25, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/fuerza.png" },
    { nombre: "Plancha Isométrica", serie: "Serie 2 de 3 — 25 seg", instruccion: "Respira constantemente. Abdomen contraído todo el tiempo.", tiempo: 25, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/fuerza.png" },
    { nombre: "Plancha Isométrica", serie: "Serie 3 de 3 — 25 seg", instruccion: "¡Última! Aguanta. Tu core te lo va a agradecer.", tiempo: 25, foto: "assets/plank.gif" },
    { nombre: "Descanso", serie: "Casi terminamos", instruccion: "", tiempo: 30, foto: "assets/descanso23.jpg" },

    // ── ELEVACIONES LATERALES DE PIERNA (2×12 c/lado) ─────────
    { nombre: "Elevaciones Laterales", serie: "Serie 1 de 2 — 12 por lado", instruccion: "De lado. Levanta la pierna lentamente (sin rebotes), sube y baja controlado.", tiempo: 60, foto: "assets/leg-raise.gif" },
    { nombre: "Descanso", serie: "20 seg", instruccion: "", tiempo: 20, foto: "assets/a1.png" },
    { nombre: "Elevaciones Laterales", serie: "Serie 2 de 2 — 12 por lado", instruccion: "Movimiento lento y controlado. Quema es ganancia.", tiempo: 60, foto: "assets/leg-raise.gif" },
    { nombre: "Descanso", serie: "Ya casi 🎉", instruccion: "", tiempo: 30, foto: "assets/a1.png" },

    // ── ESTIRAMIENTO FINAL ─────────────────────────────────────
    { nombre: "Estiramiento: Isquiotibiales", serie: "30 segundos",    instruccion: "Sentada en el piso, piernas estiradas, inclínate hacia adelante lentamente. Sin rebotes.", tiempo: 30, foto: "assets/hamstring-stretch.gif" },
    { nombre: "Estiramiento: Glúteo",         serie: "20 seg por lado", instruccion: "Boca arriba, cruza un tobillo sobre la rodilla contraria y jala hacia el pecho.", tiempo: 40, foto: "assets/glute-stretch.gif" },
    { nombre: "Estiramiento: Cuádriceps",     serie: "20 seg por pierna", instruccion: "De pie, dobla una rodilla y agarra el pie con la mano atrás tuyo.", tiempo: 40, foto: "assets/quad-stretch.gif" },
    { nombre: "Respiración Final", serie: "3 respiraciones profundas", instruccion: "Inhala 4 seg · Aguanta 2 · Exhala 6. Tu cuerpo lo necesita después del esfuerzo.", tiempo: 30, foto: "assets/shh.jpg" },
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
    nameDisplay.textContent = "¡YEI! 🎉";
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
    nameDisplay.textContent = "¡LO HICISTE! 💪";
    serieDisplay.textContent = "Entrenamiento completado";
    instruccionDisplay.textContent = "Desayuna bien, hidratate y siéntete orgullosa.";
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
    return "¿Seguro que quieres abandonar tu entrenamiento? ¡Solo faltan unos minutos!";
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