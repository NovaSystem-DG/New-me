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
      {
        start: "08:00",
        end: "09:00",
        task: "Despertar de forma tranq",
        desc: "Puedo dormir mas.",
      },
      {
        start: "09:00",
        end: "11:30",
        task: "Lavar y arreglar pelo",
        desc: "Se supone pero nunca lo hago a esa hora",
      },
      {
        start: "11:30",
        end: "13:00",
        task: "Descanso",
        desc: "Tiempo relax antes del lunch lunch",
      },
    ],
    afternoon: [
      {
        start: "13:00",
        end: "18:00",
        task: "Tiempo libre",
        desc: "Youtube",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Preparar la week",
        desc: "Revisar ese horario a ver que mas dejaron como siempre",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Últimos momentos de relax",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Cena",
      },
      {
        start: "21:30",
        end: "06:30",
        task: "Dormir temprano",
        desc: "Ella jura que va a dormir temprano",
      },
    ],
  },
  // 1: LUNES
  1: {
    morning: [
      {
        start: "06:30",
        end: "06:40",
        task: "Despertar",
        desc: "Despierto",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Rutina de ejercicio",
        desc: "Me ejercito",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento o Duchita",
        desc: "A esa hora?",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno simple",
        desc: "Mejor me lo salto",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Tiempo tranquilo",
        desc: "Usar el roblox",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Repaso sobre todo mates",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Despejar mi mind",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas del día",
        desc: "Revisar si me dejaron algo y ps hacer",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Preparación",
        desc: "Estoy esque me estudio",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "LOL",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Llego y Descanso",
        desc: "MUSIC",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio principal",
        desc: "Hacer tareas y expos si tengo",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Cultura General",
        desc: "Lectura, geografía o alemán.",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Hablar conmigo misma",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisión Mañana",
        desc: "Organizar",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Break",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Ceno",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Read please",
      },
      { start: "22:00", end: "06:30", task: "Dormir", desc: "Descanso total." },
    ],
  },
  // 2: MARTES
  2: {
    morning: [
      {
        start: "06:30",
        end: "06:40",
        task: "Despertar",
        desc: "Despierto",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Lo mismo de ayer",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento o Duchita",
        desc: "PQ A ESA HORA!!??",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "SISISIS",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Se preparo, se puso linda a su amiga llamaba",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Repasar",
        desc: "Repasar lo de clases",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Descansa",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Las hago",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Preparación",
        desc: "Me preparo",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "YEI",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "MUSICAAAAA",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio principal",
        desc: "A repasar mates 😔",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura o lemán",
        desc: "Ninguno",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Ver un video de todas las lineas de Timmy",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar pendientes",
        desc: "Haber que tengo",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Pausa activa",
      },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena tranquila." },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Actividades relajantes (ella jura)",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "Duermo",
      },
    ],
  },
  // 3: MIÉRCOLES
  3: {
    morning: [
      {
        start: "06:30",
        end: "06:40",
        task: "Despertar",
        desc: "Ya no mas",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "LO MISMO",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "LEAVE ME ALONE 😭",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Que pereza",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Pa irrrrrme",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio",
        desc: "Repaso",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Descansa",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Por si me dejaron",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "Shi",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "YES",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Estar with my pensamientos",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio",
        desc: "Estudiar",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura o Alemán",
        desc: "Ninguno",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Youtube",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar lo de mañana",
        desc: "No me emociona, me toca la peor materia",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Relax",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Ceno",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Calma",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "Ño",
      },
    ],
  },
  // 4: JUEVES
  4: {
    morning: [
      {
        start: "06:30",
        end: "06:40",
        task: "Despertar",
        desc: "NOOOO",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Otra vez 😒",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "Estiro los brazos",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Que hambre",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "ME PREPARO",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Pa que si ese dia no toca nada important",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Descansa",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "No",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "SIII",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Shazam",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Llego y duermo",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio",
        desc: "Concentracion",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura o Alemán",
        desc: "Ya no mas",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Youtube",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar pendientes",
        desc: "La profe no deja tareas pa la house",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "SISISISIS",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Ceno",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Never in my five years-",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "NAh",
      },
    ],
  },
  // 5: VIERNES
  5: {
    morning: [
      {
        start: "06:30",
        end: "06:40",
        task: "Despertar",
        desc: "SIIII",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Motivacion, ser como WW",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "OK mañana",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Bff",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Por que?",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "REPASO este si es very very important",
      },
      { start: "09:30", end: "09:45", task: "Descanso", desc: "Pausa breve." },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Tareos",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "sipirili",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "noporolo",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Dormirrrr",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Terminar pendientes",
        desc: "Hacer lo de esta week",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Dormir",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Relajación",
        desc: "Dormir",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Dormir y me salto la cena",
      },
      {
        start: "21:00",
        end: "22:00",
        task: "Relajarte",
        desc: "Dormir",
      },
      {
        start: "22:30",
        end: "08:00",
        task: "Dormir",
        desc: "Verme Batman Unlimited para ver a mi precioso (tim)",
      },
    ],
  },

  6: {
    morning: [
      {
        start: "08:00",
        end: "09:30",
        task: "Despertar",
        desc: "tan early?",
      },
      {
        start: "09:30",
        end: "11:00",
        task: "Actividades personales",
        desc: "Puessss",
      },
      {
        start: "11:00",
        end: "13:00",
        task: "Tiempo libre",
        desc: "Ver yutu",
      },
    ],
    afternoon: [
      {
        start: "13:00",
        end: "15:30",
        task: "Almuerzo",
        desc: "Ho me toca lavar platos",
      },
      {
        start: "15:30",
        end: "18:00",
        task: "Hobbies",
        desc: "No tengo",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Descanso",
        desc: "Ver peliculas de DC",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Quiero hamburguesa",
      },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena de sábado." },
      {
        start: "21:00",
        end: "23:59",
        task: "Dormir",
        desc: "Dormir",
      },
    ],
  },
};

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
    badge.textContent = "Mañana";
    colors = { bg: "#4699c2", clock: "#7dc3e6", sec: "#5da9d1" };
    if (stars) stars.style.opacity = "0";
  } else if (hour >= 12 && hour < 19) {
    phase = "afternoon";
    badge.textContent = "Tarde";
    colors = { bg: "#ff7e5f", clock: "#e94e33", sec: "#feb47b" };
    if (stars) stars.style.opacity = "0.4";
  } else {
    phase = "evening";
    badge.textContent = "Noche";
    colors = { bg: "#1a2a33", clock: "#2c3e50", sec: "#3e5871" };
    if (stars) stars.style.opacity = "1";
  }

  // APLICAR VARIABLES CSS
  document.documentElement.style.setProperty("--bg-actual", colors.bg);
  document.documentElement.style.setProperty("--reloj-actual", colors.clock);
  document.documentElement.style.setProperty("--reloj-sec", colors.sec);

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
setInterval(updateLayout, 30000); // Revisa cambios cada 30 segundos

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
