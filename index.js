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
        task: "Despertar tranquilo",
        desc: "Aprovecha para descansar un poco más.",
      },
      {
        start: "09:00",
        end: "11:30",
        task: "Lavar y arreglar pelo",
        desc: "Día de autocuidado y mimos. 🧴",
      },
      {
        start: "11:30",
        end: "13:00",
        task: "Descanso",
        desc: "Tiempo relax antes del almuerzo.",
      },
    ],
    afternoon: [
      {
        start: "13:00",
        end: "18:00",
        task: "Tiempo libre",
        desc: "Disfruta de la tarde a tu manera.",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Preparar semana",
        desc: "Revisar agenda y organizar todo para el lunes. 📝",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Últimos momentos de relax.",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Cena ligera para dormir mejor.",
      },
      {
        start: "21:30",
        end: "06:30",
        task: "Dormir temprano",
        desc: "Descanso profundo para empezar con energía. 😴",
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
        desc: "Empieza el día con calma.",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Rutina de ejercicio",
        desc: "Sentadillas, Hip thrust, Fire hydrants, Russian twist y Plancha.",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento / Ducha",
        desc: "Estiramiento rápido o ducha temprana.",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno simple",
        desc: "Huevo+pan, yogurt+avena o fruta+arepa.",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Tiempo tranquilo",
        desc: "Arreglarte, revisar horario y preparar bolso.",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Repasar lo visto en clase.",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Momento para despejar la mente.",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas del día",
        desc: "Lectura o revisar Computacional.",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Preparación",
        desc: "Alistarte para salir.",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Clases y estudio en campus.",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Llegada y Descanso",
        desc: "Merienda y música.",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio principal",
        desc: "Terminar tareas y avanzar exposiciones.",
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
        desc: "Series o hablar con amigas.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisión Mañana",
        desc: "Organizar mochila y pendientes.",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Breve descanso.",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena Familiar",
        desc: "Tiempo para compartir.",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Leer o practicar alemán.",
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
        desc: "¡Buenos días! Martes con energía.",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Misma rutina del lunes: ¡no te rindas!",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento / Ducha",
        desc: "Relaja los músculos tras el ejercicio.",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Carga energías para el día.",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Arreglarte y revisar el bolso.",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Repasar / Mates",
        desc: "Repasar clases o practicar ejercicios.",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Despeja la mente un poco.",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Avanzar pendientes de la semana.",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Preparación",
        desc: "Alistarte para salir.",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Jornada académica.",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Llegada a casa, merienda y relax.",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio principal",
        desc: "Concentración máxima en tareas.",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura / Alemán",
        desc: "30 min de conocimiento extra.",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Relájate como prefieras.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar pendientes",
        desc: "Ver qué falta para mañana y organizar.",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Pausa antes de cenar.",
      },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena tranquila." },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Actividades relajantes.",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "Desconexión total.",
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
        desc: "Mitad de semana, ¡tú puedes!",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Rutina habitual para activar el cuerpo.",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "Momento de soltar tensión.",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Nutrición para el cerebro.",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Alistarse con calma.",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Repaso de temas clave.",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Pausa necesaria.",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Avanzar con los trabajos de la semana.",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "Todo listo para salir.",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Clases del miércoles.",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Llegar y desconectar un momento.",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio",
        desc: "Sesión de estudio enfocado.",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura / Alemán",
        desc: "Tu momento de cultura y lengua.",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Disfruta de tu tarde.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar día siguiente",
        desc: "Anticípate al jueves.",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Relajación pre-cena.",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Momento de compartir.",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Lectura o hobby relajante.",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "Recupera energías.",
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
        desc: "Ya casi termina la semana, ¡mantén el ritmo!",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Activa tu energía con la rutina habitual.",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "Ducha o estiramiento para despejarte.",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "No te saltes la comida.",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Arreglarte y organizar tus cosas.",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Repaso de conceptos.",
      },
      {
        start: "09:30",
        end: "09:45",
        task: "Descanso",
        desc: "Camina un poco y toma agua.",
      },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Avanza en los proyectos pendientes.",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "Últimos detalles antes de salir.",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Clases y actividades académicas.",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Llegada a casa y merienda rápida.",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Estudio",
        desc: "Estudio enfocado.",
      },
      {
        start: "18:00",
        end: "18:30",
        task: "Lectura / Alemán",
        desc: "Tu momento de idiomas.",
      },
      {
        start: "18:30",
        end: "19:00",
        task: "Tiempo libre",
        desc: "Desconecta de todo.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "19:40",
        task: "Revisar pendientes",
        desc: "Organiza todo para un viernes sin estrés.",
      },
      {
        start: "19:40",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Relajación antes de la cena.",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Comparte y disfruta.",
      },
      {
        start: "21:00",
        end: "21:40",
        task: "Tiempo tranquilo",
        desc: "Lectura o música suave.",
      },
      {
        start: "22:00",
        end: "06:30",
        task: "Dormir",
        desc: "Descanso profundo.",
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
        desc: "¡Último esfuerzo! Ya es viernes.",
      },
      {
        start: "06:40",
        end: "06:55",
        task: "Ejercicio",
        desc: "Mantén la disciplina hasta el final.",
      },
      {
        start: "06:55",
        end: "07:05",
        task: "Estiramiento",
        desc: "Ducha rápida o estiramiento suave.",
      },
      {
        start: "07:05",
        end: "07:20",
        task: "Desayuno",
        desc: "Energía para el último día.",
      },
      {
        start: "07:20",
        end: "08:00",
        task: "Prepararte",
        desc: "Organiza todo para salir.",
      },
      {
        start: "08:00",
        end: "09:30",
        task: "Estudio ligero",
        desc: "Repaso final de la semana.",
      },
      { start: "09:30", end: "09:45", task: "Descanso", desc: "Pausa breve." },
      {
        start: "09:45",
        end: "10:30",
        task: "Tareas",
        desc: "Avanza lo último.",
      },
      {
        start: "10:30",
        end: "11:00",
        task: "Prepararte",
        desc: "Alistando los últimos detalles.",
      },
      {
        start: "11:10",
        end: "16:40",
        task: "Universidad",
        desc: "Jornada de clases.",
      },
    ],
    afternoon: [
      {
        start: "16:40",
        end: "17:00",
        task: "Descanso",
        desc: "Llegada y desconexión inicial.",
      },
      {
        start: "17:00",
        end: "18:00",
        task: "Terminar pendientes",
        desc: "Cierra todo lo de la semana.",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Tiempo libre",
        desc: "¡Disfruta! Te lo has ganado.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Relajación",
        desc: "Momento de ocio antes de cenar.",
      },
      {
        start: "20:00",
        end: "21:00",
        task: "Cena",
        desc: "Cena de viernes, relax total.",
      },
      {
        start: "21:00",
        end: "22:00",
        task: "Relajarte",
        desc: "Series, música o simplemente descansar.",
      },
      {
        start: "22:30",
        end: "08:00",
        task: "Dormir",
        desc: "Descanso reparador.",
      },
    ],
  },

  6: {
    morning: [
      {
        start: "08:00",
        end: "09:30",
        task: "Despertar sin prisa",
        desc: "Disfruta de la mañana, no hay afán hoy.",
      },
      {
        start: "09:30",
        end: "11:00",
        task: "Actividades personales",
        desc: "Tiempo para ti: skin care, lectura o hobbies.",
      },
      {
        start: "11:00",
        end: "13:00",
        task: "Tiempo libre",
        desc: "Momento para relajarse o adelantar algo personal.",
      },
    ],
    afternoon: [
      {
        start: "13:00",
        end: "15:30",
        task: "Almuerzo y Relax",
        desc: "Disfruta de la comida sin afanes.",
      },
      {
        start: "15:30",
        end: "18:00",
        task: "Salir o Hobbies",
        desc: "Momento ideal para salir a caminar, ver a alguien o practicar un hobby.",
      },
      {
        start: "18:00",
        end: "19:00",
        task: "Descanso tranquilo",
        desc: "Bajando el ritmo para la noche.",
      },
    ],
    evening: [
      {
        start: "19:00",
        end: "20:00",
        task: "Tiempo libre",
        desc: "Relajación pre-cena.",
      },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Cena de sábado." },
      {
        start: "21:00",
        end: "23:59",
        task: "Cine / Amigas",
        desc: "Series, películas o hablar con tus amigas. ¡Disfruta!",
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
   FOTOS
   ============================================================ */

const calendarDays = document.getElementById("calendar-days");
const monthYearText = document.getElementById("month-year");
let selectedDay = null;

function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  monthYearText.innerText = now.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarDays.innerHTML = "";

  // Espacios en blanco
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  // Días del mes
  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${year}-${month}-${d}`;
    const hasPhoto = localStorage.getItem(dateKey) ? "day-has-photo" : "";
    calendarDays.innerHTML += `<div class="calendar-day ${hasPhoto}" onclick="openModal('${dateKey}')">${d}</div>`;
  }
}

function openModal(dateKey) {
  selectedDay = dateKey;
  document.getElementById('photo-modal').style.display = 'flex';
  const savedPhoto = localStorage.getItem(dateKey);
  const preview = document.getElementById('photo-preview');
  const deleteBtn = document.getElementById('btn-delete');

  if (savedPhoto) {
    preview.innerHTML = `<img src="${savedPhoto}" alt="Progreso">`;
    deleteBtn.style.display = 'inline-block';
  } else {
    preview.innerHTML = `<p style="margin: 40px 0; color: #888;">No hay foto para este día.</p>`;
    deleteBtn.style.display = 'none';
  }
}

function deletePhoto() {
  if (confirm("¿Quieres eliminar la foto de este día?")) {
    localStorage.removeItem(selectedDay); // Borra del almacenamiento
    renderCalendar(); 
    closeModal();     
  }
}

// Lógica para guardar la foto
document
  .getElementById("upload-photo")
  .addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem(selectedDay, reader.result);
      function renderCalendar() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Creamos una fecha que represente exactamente el día de HOY
    const hoyReal = new Date(); 
    const diaHoy = hoyReal.getDate();
    const mesHoy = hoyReal.getMonth();
    const anioHoy = hoyReal.getFullYear();

    monthYearText.innerText = now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarDays.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const dateKey = `${currentYear}-${currentMonth}-${d}`;
        const hasPhoto = localStorage.getItem(dateKey) ? 'day-has-photo' : '';
        
        // COMPARACIÓN TRIPLE: Día, Mes y Año deben coincidir
        let isTodayClass = '';
        if (d === diaHoy && currentMonth === mesHoy && currentYear === anioHoy) {
            isTodayClass = 'today';
        }

        calendarDays.innerHTML += `
            <div class="calendar-day ${hasPhoto} ${isTodayClass}" onclick="openModal('${dateKey}')">
                ${d}
            </div>`;
    }
}
      openModal(selectedDay);
    };
    reader.readAsDataURL(e.target.files[0]);
  });

function closeModal() {
  document.getElementById("photo-modal").style.display = "none";
}

renderCalendar();
function renderCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    const monthYearText = document.getElementById('month-year');
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Fecha de hoy exacta para comparar
    const hoy = new Date();
    const diaHoy = hoy.getDate();
    const mesHoy = hoy.getMonth();
    const anioHoy = hoy.getFullYear();

    monthYearText.innerText = now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarDays.innerHTML = '';

    // Espacios antes del día 1
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const dateKey = `${currentYear}-${currentMonth}-${d}`;
        const hasPhoto = localStorage.getItem(dateKey) ? 'day-has-photo' : '';
        
        // Verificación de hoy
        let isTodayClass = '';
        if (d === diaHoy && currentMonth === mesHoy && currentYear === anioHoy) {
            isTodayClass = 'today';
        }

        calendarDays.innerHTML += `
            <div class="calendar-day ${hasPhoto} ${isTodayClass}" onclick="openModal('${dateKey}')">
                ${d}
            </div>`;
    }
}


document.addEventListener('DOMContentLoaded', renderCalendar);
