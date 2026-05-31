//FUNCIO DEL HORARIO
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Formato 12 horas
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Formatear con ceros
  const strHours = hours.toString().padStart(2, "0");
  const strMinutes = minutes.toString().padStart(2, "0");
  const strSeconds = seconds.toString().padStart(2, "0");

  // Actualizar el DOM
  document.getElementById("hour-display").textContent = strHours;
  document.getElementById("minute-display").textContent = strMinutes;
  document.getElementById("second-display").textContent = strSeconds;

  // Actualizar indicadores AM/PM
  const amBtn = document.getElementById("am-indicator");
  const pmBtn = document.getElementById("pm-indicator");

  if (ampm === "AM") {
    amBtn.classList.add("active");
    pmBtn.classList.remove("active");
  } else {
    pmBtn.classList.add("active");
    amBtn.classList.remove("active");
  }
}

// Iniciar el reloj
setInterval(updateClock, 1000);
updateClock();

//HORARIOS
const fullSchedule = {
  // 0: DOMINGO
  0: {
    morning: [
      { start: "08:00", end: "09:00", task: "Despertar tranquila", desc: "Mañana de domingo, sin afán 🌞" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Desayuno tranquila antes de ponerse en modo oficio" },
      { start: "09:30", end: "11:30", task: "Lavar y arreglar pelo", desc: "El ritual sagrado del domingo 💆" },
      { start: "11:30", end: "12:00", task: "Ayudar en casa", desc: "Algo rápido antes del almuerzo — tu mamá te lo agradece" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo en familia", desc: "Sin pantallas si puedes, aunque sea 30 min" },
      { start: "13:00", end: "14:00", task: "Descanso", desc: "Siesta o simplemente tirada sin culpa" },
      { start: "14:00", end: "15:00", task: "Lectura o escritura", desc: "Virtual está bien — mente activa sin redes 📖" },
      { start: "15:00", end: "16:30", task: "Preparar la semana", desc: "Revisar horario, tareas pendientes, qué viene" },
      { start: "16:30", end: "18:00", task: "Tiempo libre", desc: "YouTube largo, DC, lo que quieras 🎬" },
    ],
    evening: [
      { start: "18:00", end: "19:00", task: "Ayudar en casa", desc: "Cena o lo que tu mamá necesite — suma puntos 🍽️" },
      { start: "19:00", end: "20:00", task: "Tiempo tranquilo", desc: "Leer, escribir o simplemente existir" },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena de domingo" },
      { start: "21:00", end: "21:30", task: "Preparar lo de mañana", desc: "Ropa, maleta, mente — 30 min que salvan el lunes" },
      { start: "21:30", end: "05:40", task: "Dormir", desc: "Ella jura que va a dormir temprano (edición domingo)" },
    ],
  },
  // 1: LUNES
  1: {
    morning: [
      { start: "05:40", end: "05:50", task: "Despertar", desc: "El momento más difícil del día. Ya pasó lo peor." },
      { start: "05:50", end: "06:30", task: "Ejercicio 💪", desc: "Rutina completa — glúteos, core, brazos. Manta en el piso." },
      { start: "06:30", end: "06:55", task: "Estiramiento", desc: "Ya está en la app — síguela, solo son ~4 min" },
      { start: "06:55", end: "09:00", task: "Estudiar o relajarse", desc: "Tareas, repasar, Roblox, YouTube — lo que necesites antes de que todos despierten 🎧" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Sales del cuarto, desayunas tranquila ☀️" },
      { start: "09:30", end: "10:15", task: "Tareas o lavar platos", desc: "Aprovechar antes de arreglarte — tu mamá lo nota 🍽️" },
      { start: "10:15", end: "11:15", task: "Bañarse y arreglarse", desc: "Con calma pero sin procrastinar — peinado incluido 💧" },
      { start: "11:15", end: "12:00", task: "Camino a la uni", desc: "Música, podcast, o simplemente existir 🎧" },
      { start: "12:00", end: "17:50", task: "Universidad", desc: "LOL. Pero tú puedes." },
    ],
    afternoon: [
      { start: "17:50", end: "18:10", task: "Llegué — descanso", desc: "MUSIC. 20 minutos solo para ti antes de nada más." },
      { start: "18:10", end: "18:40", task: "Ayudar en casa", desc: "Media horita — cocina, barrer, lo que toque. Tu mamá nota." },
      { start: "18:40", end: "19:30", task: "Tareas y pendientes 📝", desc: "Hacer lo que quedó del día. Concentración." },
      { start: "19:30", end: "20:00", task: "Lectura o escritura", desc: "30 min sin YouTube — entrena la concentración 📖" },
    ],
    evening: [
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena tranquila" },
      { start: "21:00", end: "21:30", task: "Revisar mañana", desc: "Organizar qué viene — 30 min que no se desperdician" },
      { start: "21:30", end: "22:00", task: "Tiempo tranquilo", desc: "Sin pantalla brillante idealmente — tu vista te lo agradece" },
      { start: "22:00", end: "05:40", task: "Dormir", desc: "Descanso total. Mañana hay que madrugar otra vez." },
    ],
  },
  // 2: MARTES
  2: {
    morning: [
      { start: "05:40", end: "05:50", task: "Despertar", desc: "Otra vez. Tú puedes." },
      { start: "05:50", end: "06:30", task: "Ejercicio 💪", desc: "La misma rutina. Ya lo sabes de memoria." },
      { start: "06:30", end: "06:55", task: "Estiramiento", desc: "Ya está en la app — síguela" },
      { start: "06:55", end: "09:00", task: "Estudiar o relajarse", desc: "Tareas, repaso, lo que necesites — en silencio antes de que todos despierten" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Sales del cuarto, desayunas tranquila ☀️" },
      { start: "09:30", end: "10:15", task: "Tareas o lavar platos", desc: "Se puso a ayudar, a su mamá le brillaron los ojos 💅" },
      { start: "10:15", end: "11:15", task: "Bañarse y arreglarse", desc: "Con calma 💧" },
      { start: "11:15", end: "12:00", task: "Camino a la uni", desc: "Trayecto 🎧" },
      { start: "12:00", end: "17:50", task: "Universidad", desc: "A repasar mates 😔" },
    ],
    afternoon: [
      { start: "17:50", end: "18:10", task: "Llegué — descanso", desc: "MUSICAAAAA" },
      { start: "18:10", end: "18:40", task: "Ayudar en casa", desc: "La ayudita de todos los días" },
      { start: "18:40", end: "19:30", task: "Tareas 📝", desc: "Ver un video de todas las líneas de Timmy puede esperar" },
      { start: "19:30", end: "20:00", task: "Lectura o escritura", desc: "30 min sin YouTube. Entrena ese cerebro. 📖" },
    ],
    evening: [
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena tranquila" },
      { start: "21:00", end: "21:30", task: "Revisar pendientes", desc: "Haber qué tengo para mañana" },
      { start: "21:30", end: "22:00", task: "Tiempo tranquilo", desc: "Actividades relajantes (ella jura)" },
      { start: "22:00", end: "05:40", task: "Dormir", desc: "Duermo" },
    ],
  },
  // 3: MIÉRCOLES — descanso activo (sin ejercicio fuerte)
  3: {
    morning: [
      { start: "05:40", end: "05:50", task: "Despertar", desc: "Ya no más 😭" },
      { start: "05:50", end: "06:15", task: "Caminata suave / estiramiento", desc: "Día de descanso activo — nada intenso, solo mover el cuerpo" },
      { start: "06:15", end: "06:45", task: "Ducha y arreglarte", desc: "Todo en calma 🚿" },
      { start: "06:45", end: "07:00", task: "Tiempo tranquilo", desc: "Tu momento" },
      { start: "07:00", end: "08:00", task: "Desayuno", desc: "Que pereza pero hay que comer" },
      { start: "08:00", end: "09:00", task: "Tareas / estudio 📚", desc: "Repaso de lo que venga" },
      { start: "09:00", end: "10:00", task: "Tareas adicionales", desc: "Por si me dejaron algo" },
      { start: "10:00", end: "10:20", task: "Prepararte pa irte", desc: "Pa irrrrrme" },
      { start: "10:20", end: "12:00", task: "Camino a la uni", desc: "Trayecto 🎧" },
      { start: "12:00", end: "17:50", task: "Universidad", desc: "YES" },
    ],
    afternoon: [
      { start: "17:50", end: "18:10", task: "Llegué — descanso", desc: "Estar with my pensamientos" },
      { start: "18:10", end: "18:40", task: "Ayudar en casa", desc: "Miércoles de aporte hogareño" },
      { start: "18:40", end: "19:30", task: "Estudio / tareas 📝", desc: "Concentración — no me emociona pero hay que hacerlo" },
      { start: "19:30", end: "20:00", task: "Lectura o escritura", desc: "30 min sin YouTube. Tú puedes." },
    ],
    evening: [
      { start: "20:00", end: "21:00", task: "Cena", desc: "Ceno" },
      { start: "21:00", end: "21:30", task: "Revisar lo de mañana", desc: "Me toca la peor materia pero bueno" },
      { start: "21:30", end: "22:00", task: "Tiempo tranquilo", desc: "Calma antes de dormir" },
      { start: "22:00", end: "05:40", task: "Dormir", desc: "Ño" },
    ],
  },
  // 4: JUEVES
  4: {
    morning: [
      { start: "05:40", end: "05:50", task: "Despertar", desc: "NOOOO 😭 (pero ya casi es viernes)" },
      { start: "05:50", end: "06:30", task: "Ejercicio 💪", desc: "Rutina completa — dale que mañana descansas." },
      { start: "06:30", end: "06:55", task: "Estiramiento", desc: "Ya está en la app — síguela" },
      { start: "06:55", end: "09:00", task: "Estudiar o relajarse", desc: "Tareas, repaso, o simplemente existir en silencio 🎧" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Que hambre ☀️" },
      { start: "09:30", end: "10:15", task: "Tareas o lavar platos", desc: "Pa que si ese día no toca nada... pero por si acaso" },
      { start: "10:15", end: "11:15", task: "Bañarse y arreglarse", desc: "SIII 💧" },
      { start: "11:15", end: "12:00", task: "Camino a la uni", desc: "Trayecto 🎧" },
      { start: "12:00", end: "17:50", task: "Universidad", desc: "Shazam" },
    ],
    afternoon: [
      { start: "17:50", end: "18:10", task: "Llegué — descanso", desc: "Llego y descanso (no duermo, solo respiro)" },
      { start: "18:10", end: "18:40", task: "Ayudar en casa", desc: "Jueves de apoyo hogareño" },
      { start: "18:40", end: "19:30", task: "Estudio / tareas 📝", desc: "Concentración — la profe no deja tareas pa la house (a veces)" },
      { start: "19:30", end: "20:00", task: "Lectura o escritura", desc: "30 min sin redes. Ya lo sabes. 📖" },
    ],
    evening: [
      { start: "20:00", end: "21:00", task: "Cena", desc: "Ceno" },
      { start: "21:00", end: "21:30", task: "Revisar pendientes", desc: "Mañana es viernes, ver qué falta" },
      { start: "21:30", end: "22:00", task: "Tiempo tranquilo", desc: "Never in my five years... pero descansa" },
      { start: "22:00", end: "05:40", task: "Dormir", desc: "Nah (pero sí)" },
    ],
  },
  // 5: VIERNES
  5: {
    morning: [
      { start: "05:40", end: "05:50", task: "Despertar", desc: "SIIII ES VIERNES 🎉" },
      { start: "05:50", end: "06:30", task: "Ejercicio 💪", desc: "Última sesión — motivación: ser como WW 🦸" },
      { start: "06:30", end: "06:55", task: "Estiramiento", desc: "Ya está en la app — síguela, que fue semana dura" },
      { start: "06:55", end: "09:00", task: "Estudiar o relajarse", desc: "Es viernes, te lo mereces — tareas o YouTube tranquila 🎧" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Bff 🍳 ☀️" },
      { start: "09:30", end: "10:15", task: "Tareas o lavar platos", desc: "Este sí es very very important según ella misma" },
      { start: "10:15", end: "11:15", task: "Bañarse y arreglarse", desc: "Viernes = esforzarse un poco más si quieres ✨💧" },
      { start: "11:15", end: "12:00", task: "Camino a la uni", desc: "Último trayecto de la semana 🎧" },
      { start: "12:00", end: "17:50", task: "Universidad", desc: "noporolo (pero ya casi)" },
    ],
    afternoon: [
      { start: "17:50", end: "18:10", task: "Llegué — descanso merecido", desc: "SEMANA TERMINADA. MUSIC. 🎉" },
      { start: "18:10", end: "18:40", task: "Ayudar en casa", desc: "Viernes de apoyo — terminar la semana bien" },
      { start: "18:40", end: "19:30", task: "Terminar pendientes 📝", desc: "Dejar todo limpio para no cargar el fin de semana" },
      { start: "19:30", end: "20:00", task: "Tiempo libre real", desc: "Ya terminaste todo. YouTube, lo que quieras. Sin culpa." },
    ],
    evening: [
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena de viernes — mereces algo rico" },
      { start: "21:00", end: "22:30", task: "Tiempo libre total", desc: "Batman Unlimited para ver a tu precioso (Tim) 🦇" },
      { start: "22:30", end: "08:00", task: "Dormir", desc: "Sábado no hay uni. Duerme rico." },
    ],
  },
  // 6: SÁBADO — oficios + recarga
  6: {
    morning: [
      { start: "08:00", end: "09:00", task: "Despertar tranquila", desc: "Sábado. Sin alarma ojalá. ☀️" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "Desayuno de sábado — con calma" },
      { start: "09:30", end: "11:30", task: "Oficios del hogar", desc: "Ayudarle a tu mamá — ella lo nota y te lo agradece 🧹" },
      { start: "11:30", end: "12:00", task: "Descanso", desc: "Pausa después de los oficios" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "Ho me toca lavar platos (pero con música suena mejor)" },
      { start: "13:00", end: "14:30", task: "Tiempo libre", desc: "YouTube, DC, lo que quieras 🎬" },
      { start: "14:30", end: "15:30", task: "Lectura o escritura", desc: "1 hora de concentración — sábado también entrena la mente 📖" },
      { start: "15:30", end: "17:00", task: "Hobbies / tiempo propio", desc: "Escribir, leer más, escuchar algo largo — lo tuyo" },
      { start: "17:00", end: "18:00", task: "Tiempo libre", desc: "Ver pelis de DC, YouTube largo 🦇" },
    ],
    evening: [
      { start: "18:00", end: "19:00", task: "Ayudar en casa", desc: "Preparar cena o lo que haga falta" },
      { start: "19:00", end: "20:00", task: "Tiempo libre", desc: "Quiero hamburguesa 🍔" },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena de sábado" },
      { start: "21:00", end: "21:30", task: "Preparar el domingo", desc: "Revisar que el pelo y todo esté listo" },
      { start: "21:30", end: "08:00", task: "Dormir", desc: "Mañana es domingo. Duerme bien." },
    ],
  },
}

/*2. FUNCIONES DE LÓGICA */
function calculateDuration(start, end) {
  const [h1, m1] = start.split(":").map(Number);
  const [h2, m2] = end.split(":").map(Number);
  let diff = h2 * 60 + m2 - (h1 * 60 + m1);
  if (diff < 0) diff += 24 * 60;
  return diff;
}

function updateDate() {
  const now = new Date();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  document.getElementById("current-day-title").textContent = dias[now.getDay()];
  document.getElementById("current-full-date").textContent =
    `${now.getDate()} de ${meses[now.getMonth()]}, ${now.getFullYear()}`;
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  let displayHours = hours % 12 || 12;

  document.getElementById("hour-display").textContent = displayHours
    .toString()
    .padStart(2, "0");
  document.getElementById("minute-display").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("second-display").textContent = seconds
    .toString()
    .padStart(2, "0");

  const amBtn = document.getElementById("am-indicator");
  const pmBtn = document.getElementById("pm-indicator");

  if (ampm === "AM") {
    amBtn.classList.add("active");
    pmBtn.classList.remove("active");
  } else {
    pmBtn.classList.add("active");
    amBtn.classList.remove("active");
  }
}

function updateLayout() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();

  const todaySchedule = fullSchedule[dayOfWeek];
  const container = document.getElementById("schedule-container");
  const badge = document.getElementById("phase-badge");
  const stars = document.getElementById("stars-container");

  let phase = "";
  let colors = { bg: "", clock: "", sec: "" };

  // LÓGICA DE FASES Y COLORES
  if (hour >= 6 && hour < 12) {
    phase = "morning";
    badge.textContent = "Mañana ☀️";
    colors = {
      bg: "#4699c2", clock: "#4699c2", sec: "#5da9d1",
      pageBg: "#e8f4f8", accentLight: "#d4eaf5", accentSoft: "#eaf5fb", border: "#e2eef4"
    };
    if (stars) stars.style.opacity = "0";
  } else if (hour >= 12 && hour < 19) {
    phase = "afternoon";
    badge.textContent = "Tarde 🌤️";
    colors = {
      bg: "#ff7e5f", clock: "#e07a5f", sec: "#f4a261",
      pageBg: "#fdf0eb", accentLight: "#fde0d6", accentSoft: "#fef5f2", border: "#f8ddd5"
    };
    if (stars) stars.style.opacity = "0";
  } else {
    phase = "evening";
    badge.textContent = "Noche 🌙";
    colors = {
      bg: "#1a2a33", clock: "#5c8a9e", sec: "#3e5871",
      pageBg: "#1a2a33", accentLight: "#243b47", accentSoft: "#1e3040", border: "#2c3e50"
    };
    document.documentElement.style.setProperty("--text", "#e8f4f8");
    document.documentElement.style.setProperty("--text-soft", "#8aacbb");
    document.documentElement.style.setProperty("--card", "#22343f");
    if (stars) stars.style.opacity = "1";
  }
  const isNight = hour >= 19 || hour < 6;
  document.documentElement.style.setProperty("--text", isNight ? "#e8f4f8" : "#1a2a33");
  document.documentElement.style.setProperty("--text-soft", isNight ? "#8aacbb" : "#6b8a99");
  document.documentElement.style.setProperty("--card", isNight ? "#22343f" : "#ffffff");

  // APLICAR VARIABLES CSS (nuevo diseño)
  document.documentElement.style.setProperty("--bg-actual", colors.bg);
  document.documentElement.style.setProperty("--reloj-actual", colors.clock);
  document.documentElement.style.setProperty("--reloj-sec", colors.sec);
  // Variables del nuevo diseño
  document.documentElement.style.setProperty("--bg", colors.pageBg);
  document.documentElement.style.setProperty("--accent", colors.clock);
  document.documentElement.style.setProperty("--accent-light", colors.accentLight);
  document.documentElement.style.setProperty("--accent-soft", colors.accentSoft);
  document.documentElement.style.setProperty("--border", colors.border);

  // RENDERIZAR TAREAS
  const phaseKey = `${dayOfWeek}-${phase}`;
  if (container && container.dataset.currentPhase !== phaseKey) {
    container.dataset.currentPhase = phaseKey;
    container.innerHTML = "";

    todaySchedule[phase].forEach((item) => {
      container.innerHTML += `
            <div class="task-card">
                <div class="time-tag">
                    <span class="time-start">${item.start}</span>
                    <span class="time-end">${item.end}</span>
                </div>
                <div class="task-info">
                    <div class="task-header">
                        <strong>${item.task}</strong>
                        <span class="duration-pill">${calculateDuration(item.start, item.end)} min</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </div>`;
    });
  }
  highlightCurrentTask();
}

function highlightCurrentTask() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll(".task-card").forEach((card) => {
    const startElem = card.querySelector(".time-start");
    const endElem = card.querySelector(".time-end");

    if (startElem && endElem) {
      const [hS, mS] = startElem.textContent.split(":").map(Number);
      const [hE, mE] = endElem.textContent.split(":").map(Number);

      const startTime = hS * 60 + mS;
      let endTime = hE * 60 + mE;
      if (endTime < startTime) endTime += 24 * 60;

      if (currentTime >= startTime && currentTime < endTime) {
        // ESTO aplica el borde de color y el resalto a TODA la tarjeta
        card.classList.add("active-now");
      } else {
        card.classList.remove("active-now");
      }
    }
  });
}

function createStars() {
  const container = document.getElementById("stars-container");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + "px";
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.setProperty("--duration", Math.random() * 3 + 2 + "s");
    container.appendChild(star);
  }
}

updateDate();
createStars();
updateClock();
updateLayout();

setInterval(updateClock, 1000);
setInterval(() => { updateLayout(); restoreAvatar(); }, 30000);

function restoreAvatar() {
  const sa = localStorage.getItem('profileAvatar');
  if (sa) document.getElementById('avatar-img').src = sa;
} // Revisa cambios cada 30 segundos

/* ============================================================
    FOTOS Y CALENDARIO (CORREGIDO)
   ============================================================ */

const calendarDays = document.getElementById("calendar-days");
const monthYearText = document.getElementById("month-year");
let selectedDay = null;
let navDate = new Date(); // Única fecha de referencia para navegar

function renderCalendar() {
  // Mes y año que estamos visualizando
  const viewYear = navDate.getFullYear();
  const viewMonth = navDate.getMonth();

  // Fecha de hoy real para el resaltado
  const today = new Date();
  const dHoy = today.getDate();
  const mHoy = today.getMonth();
  const aHoy = today.getFullYear();

  // Título del mes (ej: "marzo de 2026")
  monthYearText.innerText = navDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  calendarDays.innerHTML = '';

  // Espacios vacíos para el inicio del mes
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  // Dibujar los días
  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${viewYear}-${viewMonth}-${d}`;
    const hasPhoto = localStorage.getItem(dateKey) ? 'day-has-photo' : '';

    let isTodayClass = '';
    if (d === dHoy && viewMonth === mHoy && viewYear === aHoy) {
      isTodayClass = 'today';
    }

    calendarDays.innerHTML += `
            <div class="calendar-day ${hasPhoto} ${isTodayClass}" onclick="openModal('${dateKey}')">
                ${d}
            </div>`;
  }
}

// Esta función ahora sí funcionará porque navDate es global
function changeMonth(offset) {
  navDate.setMonth(navDate.getMonth() + offset);
  renderCalendar();
}

function openModal(dateKey) {
  selectedDay = dateKey;
  const modal = document.getElementById('photo-modal');
  modal.style.display = 'flex';

  const savedPhoto = localStorage.getItem(dateKey);
  const preview = document.getElementById('photo-preview');
  const deleteBtn = document.getElementById('btn-delete');

  if (savedPhoto) {
    preview.innerHTML = `<img src="${savedPhoto}" alt="Progreso" style="width:100%; border-radius:15px;">`;
    deleteBtn.style.display = 'inline-block';
  } else {
    preview.innerHTML = `<p style="margin: 40px 0; color: #888;">No hay foto para este día.</p>`;
    deleteBtn.style.display = 'none';
  }
}

function closeModal() {
  document.getElementById("photo-modal").style.display = "none";
}

function deletePhoto() {
  if (confirm("¿Quieres eliminar la foto?")) {
    localStorage.removeItem(selectedDay);
    renderCalendar();
    closeModal();
  }
}

// Lógica de carga de foto
document.getElementById("upload-photo").addEventListener("change", function (e) {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        localStorage.setItem(selectedDay, event.target.result);
        renderCalendar();
        openModal(selectedDay);
        // Limpia el input para que permita subir la misma foto otra vez si se desea
        e.target.value = "";
      } catch (error) {
        // El localStorage tiene un límite (aprox 5MB). 
        // Si la foto es muy pesada, dará error.
        alert("La imagen es muy pesada. Intenta con una más pequeña.");
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});
// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderCalendar);