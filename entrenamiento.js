const rutina = [
    // --- CALENTAMIENTO (5 MINUTOS) ---
    { nombre: "Movilidad de Cuello", info: "Gira lento a derecha e izquierda. Sin movimientos bruscos.", tiempo: 30, foto: "assets/cuello.png" },
    { nombre: "Rotación de Hombros", info: "Gira hacia adelante y luego hacia atrás. Mejora tu postura.", tiempo: 30, foto: "assets/hombros.png" },
    { nombre: "Rotación de Cadera", info: "Círculos amplios. Prepara tus glúteos y cintura.", tiempo: 30, foto: "assets/cadera.png" },
    { nombre: "Sentadillas Suaves", info: "Lentas y no profundas. Solo para activar piernas.", tiempo: 60, foto: "assets/sentadilla.png" },
    { nombre: "Marcha o Saltos Suaves", info: "Levanta rodillas o salta suave. ¡Activa tu corazón!", tiempo: 60, foto: "assets/carrera.png" },
    
    { nombre: "Descanso Preparatorio", info: "Toma agua, la rutina principal empieza ahora.", tiempo: 15, foto: "assets/shh.jpg" },
    

    // --- RUTINA PRINCIPAL ---
    { nombre: "Sentadillas", info: "Serie 1 de 2 — 10 reps", tiempo: 45, foto: "assets/sentadilla.png" },
    { nombre: "Descanso", info: "Solta la pata", tiempo: 30, foto: "assets/a1.png" },
    { nombre: "Sentadillas", info: "Serie 2 de 2 — 10 reps", tiempo: 45, foto: "assets/sentadilla.png" },
    { nombre: "Descanso", info: "Sigue el Hip Thrust 🫦", tiempo: 30, foto: "assets/aja.png" },
    { nombre: "Hip Thrust", info: "Serie 1 de 2 — 12 reps", tiempo: 50, foto: "assets/hip-thrust.png" },
    { nombre: "Descanso", info: "No se", tiempo: 30, foto: "assets/descanso9.jpg" },
    { nombre: "Hip Thrust", info: "Serie 2 de 2 — 12 reps", tiempo: 50, foto: "assets/hip-thrust.png" },
    { nombre: "Descanso", info: "Sigue Fire Hydrants (como quien dice, Perro)", tiempo: 30, foto: "assets/Perro1.png" },
    { nombre: "Fire Hydrants", info: "Serie 1 de 2 — 12 por pierna", tiempo: 60, foto: "assets/fire-hydrant.png" },
    { nombre: "Descanso", info: "¡Ya casi!", tiempo: 30, foto: "assets/descanso10.png" },
    { nombre: "Fire Hydrants", info: "Serie 2 de 2 — 12 por pierna", tiempo: 60, foto: "assets/fire-hydrant.png" },
    { nombre: "Descanso", info: "Sigue el abdomen (Desesperacion)", tiempo: 30, foto: "assets/Deses.png" },
    { nombre: "Russian Twist", info: "Serie 1 de 2 — 12 reps", tiempo: 45, foto: "assets/russian-twist.png" },
    { nombre: "Descanso", info: "NO MAS", tiempo: 30, foto: "assets/Deses3.png" },
    { nombre: "Russian Twist", info: "Serie 2 de 2 — 12 reps", tiempo: 45, foto: "assets/russian-twist.png" },
    { nombre: "Descanso", info: "Sigue la plancha bb, tranq", tiempo: 30, foto: "assets/relaxbb.jpg" },
    { nombre: "Plancha", info: "Serie 1 de 2 — Mantén 15s", tiempo: 15, foto: "assets/plancha.png" },
    { nombre: "Descanso", info: "FALTA UNO", tiempo: 15, foto: "assets/fuerza.png" },
    { nombre: "Plancha", info: "Serie 2 de 2 — Últimos 15s", tiempo: 15, foto: "assets/plancha.png" }
];


let indiceActual = 0; // Empezamos en 0 para la lógica automática
let tiempoRestante = 0;
let cronometro;

const timerDisplay = document.getElementById('timer');
const nameDisplay = document.getElementById('exercise-name');
const infoDisplay = document.getElementById('series-info');
const btnNext = document.getElementById('btn-next');

// 1. INICIAR EL EJERCICIO
function iniciarEjercicio(ex) {
    clearInterval(cronometro);
    
    // Reset de color por si venía de verde
    timerDisplay.style.color = "b"; 
    
    nameDisplay.textContent = ex.nombre;
    infoDisplay.textContent = ex.info;
    tiempoRestante = ex.tiempo;

    // Actualizar imagen
    const imgContainer = document.getElementById('image-container');
    imgContainer.innerHTML = `<img src="${ex.foto}" alt="${ex.nombre}" style="width:100%; height:100%; object-fit:cover; border-radius:20px;">`;

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
    nameDisplay.textContent = "YEI!!";
    timerDisplay.style.color = "#2ecc71"; // Verde éxito
    
    // Espera 3 segundos y pasa al siguiente
    setTimeout(() => {
        indiceActual++;
        if (indiceActual < rutina.length) {
            iniciarEjercicio(rutina[indiceActual]);
        } else {
            concluirRutina();
        }
    }, 3000);
}

function concluirRutina() {
    
    const imgContainer = document.getElementById('image-container');
    if (imgContainer) imgContainer.innerHTML = ""; 

  
    nameDisplay.textContent = "Ay no bebe, que pena 😒";
    infoDisplay.textContent = "Redirigiendo...";

    
    timerDisplay.innerHTML = `
        <img src="assets/stopbro.png" 
             alt="Ay no bebe, que pena 😒" 
             style="width:100%; max-width:300px; border-radius:20px; margin: 0 auto; display: block;">
    `;
    
    
    window.onbeforeunload = null; 
    setTimeout(() => { 
        window.location.href = "index.html"; 
    }, 4000);
}

function actualizarPantalla() {
    let min = Math.floor(tiempoRestante / 60);
    let seg = tiempoRestante % 60;
    timerDisplay.textContent = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

// BOTÓN EMPEZAR / SALTAR
btnNext.addEventListener('click', () => {
    // Si no ha empezado, inicia el primero
    if (nameDisplay.textContent === "¡Prepárate!") {
        iniciarEjercicio(rutina[indiceActual]);
        btnNext.textContent = "SALTAR";
    } else {
        // Si ya está corriendo, salta al siguiente inmediatamente
        clearInterval(cronometro);
        indiceActual++;
        if (indiceActual < rutina.length) {
            iniciarEjercicio(rutina[indiceActual]);
        } else {
            concluirRutina();
        }
    }
});

// 2. SISTEMA ANTISALIDA
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