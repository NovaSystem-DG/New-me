//FUNCIO DEL RELOJ
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  document.getElementById("hour-display").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minute-display").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("second-display").textContent = seconds.toString().padStart(2, "0");

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

setInterval(updateClock, 1000);
updateClock();

// ── HORARIO DE VACACIONES ──────────────────────────────────────────────────────
// Lunes · Miércoles · Viernes = ejercicio
// Martes · Jueves = descanso activo (caminata)
// Sábado · Domingo = recarga

const fullSchedule = {

  // 0: DOMINGO — recarga total
  0: {
    morning: [
      { start: "08:00", end: "09:00", task: "Despertar", desc: "a" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "I want to eat something" },
      { start: "09:30", end: "11:30", task: "Lavar y arreglar pelo", desc: "Haber si lo hago mas temprano" },
      { start: "11:30", end: "12:00", task: "Ayudar en casa", desc: "NOOOOOOO" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "Muy temprano" },
      { start: "13:00", end: "14:00", task: "Descanso", desc: "dormirrr o leer DC" },
      { start: "14:00", end: "15:30", task: "Lectura o alemán 🇩🇪", desc: "Cualquier cosa que no sea redes" },
      { start: "15:30", end: "17:00", task: "Tiempo libre", desc: "Ver vainas, que no sea redes" },
      { start: "17:00", end: "18:00", task: "CS50", desc: "Pa terminarlo antes" },
    ],
    evening: [
      { start: "18:00", end: "19:00", task: "Ayudar en casa", desc: "No quiero" },
      { start: "19:00", end: "20:00", task: "Tiempo tranquilo", desc: "Llenar mi diario" },
      { start: "20:00", end: "21:00", task: "Cena", desc: "Ceno" },
      { start: "21:00", end: "21:30", task: "Preparar la semana", desc: "Pues..." },
      { start: "21:30", end: "22:00", task: "Tiempo tranquilo", desc: "Haber si logro dormir" },
      { start: "22:00", end: "06:00", task: "Dormir", desc: "Duermo" },
    ],
  },

  // 1: LUNES — ejercicio + CS50
  1: {
    morning: [
      { start: "06:00", end: "06:10", task: "Despertar", desc: "Por fin" },
      { start: "06:10", end: "06:15", task: "Tomar agua", desc: "No quiero" },
      { start: "06:15", end: "06:35", task: "Ejercicio", desc: "YEA" },
      { start: "06:35", end: "06:50", task: "Estiramiento", desc: "a" },
      { start: "06:50", end: "07:30", task: "Etutdy?", desc: "mrybe freetime" },
      { start: "07:30", end: "08:30", task: "Desayuno + tiempo libre", desc: "eat eat" },
      { start: "08:30", end: "10:30", task: "CS50 ", desc: "adelantar" },
      { start: "10:30", end: "11:00", task: "Pausa activa", desc: "walkbitch walk" },
      { start: "11:00", end: "12:00", task: "Alemán 🇩🇪", desc: "bleh" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "ño" },
      { start: "13:00", end: "14:00", task: "Oficios del hogar", desc: "help" },
      { start: "14:00", end: "15:30", task: "Tiempo libre", desc: "Tiempo libre" },
      { start: "15:30", end: "16:30", task: "Matemáticas o tema extra", desc: "haber si aprendo por fin" },
      { start: "16:30", end: "17:30", task: "Lectura", desc: "shakespere" },
    ],
    evening: [
      { start: "17:30", end: "18:30", task: "Tiempo libre", desc: "free time" },
      { start: "18:30", end: "19:30", task: "Ayudar en casa", desc: "asih" },
      { start: "19:30", end: "20:30", task: "Cena", desc: "aish" },
      { start: "20:30", end: "21:30", task: "Tiempo tranquilo", desc: "stay still" },
      { start: "21:30", end: "22:00", task: "Preparar mañana", desc: "jjust look" },
      { start: "22:00", end: "06:00", task: "Dormir", desc: "sleep, dont look un godam phone" },
    ],
  },

  // 2: MARTES — descanso activo + alemán
  2: {
    morning: [
      { start: "06:00", end: "06:10", task: "Despertar", desc: "huh" },
      { start: "06:10", end: "06:35", task: "Caminata suave", desc: "driving in my car right after a beeeer" },
      { start: "06:35", end: "07:15", task: "Etutdy?", desc: "fra" },
      { start: "07:15", end: "08:15", task: "Desayuno + tiempo libre", desc: "huh" },
      { start: "08:15", end: "10:15", task: "CS50 ", desc: "HUH" },
      { start: "10:15", end: "10:45", task: "Pausa activa", desc: "HUH!" },
      { start: "10:45", end: "11:45", task: "Alemán 🇩🇪", desc: "HUUH!!?" },
      { start: "11:45", end: "12:00", task: "Tiempo libre", desc: "HUH" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "AH?" },
      { start: "13:00", end: "14:00", task: "Oficios del hogar", desc: "AH!?" },
      { start: "14:00", end: "15:30", task: "Tiempo libre", desc: "AAH!?" },
      { start: "15:30", end: "16:30", task: "Matemáticas o tema extra", desc: "AAAAAH" },
      { start: "16:30", end: "17:30", task: "Lectura", desc: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH" },
    ],
    evening: [
      { start: "17:30", end: "18:30", task: "Tiempo libre", desc: "HUH?" },
      { start: "18:30", end: "19:30", task: "Ayudar en casa", desc: "hmm" },
      { start: "19:30", end: "20:30", task: "Cena", desc: " HMM" },
      { start: "20:30", end: "21:30", task: "Tiempo tranquilo", desc: "HM" },
      { start: "21:30", end: "22:00", task: "Preparar mañana", desc: "HHMMM" },
      { start: "22:00", end: "06:00", task: "Dormir", desc: "UHUM" },
    ],
  },

  // 3: MIÉRCOLES — ejercicio + CS50
  3: {
    morning: [
      { start: "06:00", end: "06:10", task: "Despertar", desc: "GLO" },
      { start: "06:10", end: "06:15", task: "Tomar agua", desc: "refresco" },
      { start: "06:15", end: "06:35", task: "Ejercicio", desc: "shit" },
      { start: "06:35", end: "06:50", task: "Estiramiento", desc: "ahe" },
      { start: "06:50", end: "07:30", task: "Etutdy?", desc: "a" },
      { start: "07:30", end: "08:30", task: "Desayuno + tiempo libre", desc: "ña" },
      { start: "08:30", end: "10:30", task: "CS50 ", desc: "auhg" },
      { start: "10:30", end: "11:00", task: "Pausa activa", desc: "laffy taffy" },
      { start: "11:00", end: "12:00", task: "Alemán 🇩🇪", desc: "she swears" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "Almuerzo" },
      { start: "13:00", end: "14:00", task: "Oficios del hogar", desc: "bff" },
      { start: "14:00", end: "15:30", task: "Tiempo libre", desc: "l" },
      { start: "15:30", end: "16:30", task: "Matemáticas o tema extra ", desc: "o" },
      { start: "16:30", end: "17:30", task: "Lectura ", desc: "l" },
    ],
    evening: [
      { start: "17:30", end: "18:30", task: "Tiempo libre", desc: "l" },
      { start: "18:30", end: "19:30", task: "Ayudar en casa", desc: "o" },
      { start: "19:30", end: "20:30", task: "Cena", desc: "l" },
      { start: "20:30", end: "21:30", task: "Tiempo tranquilo", desc: "a" },
      { start: "21:30", end: "22:00", task: "Preparar mañana", desc: "a" },
      { start: "22:00", end: "06:00", task: "Dormir", desc: "a" },
    ],
  },

  // 4: JUEVES — descanso activo + repaso CS50
  4: {
    morning: [
      { start: "06:00", end: "06:10", task: "Despertar", desc: "shti" },
      { start: "06:10", end: "06:35", task: "Caminata suave", desc: "shot" },
      { start: "06:35", end: "07:15", task: "Etutdy?", desc: "shit" },
      { start: "07:15", end: "08:15", task: "Desayuno + tiempo libre", desc: "shit" },
      { start: "08:15", end: "10:15", task: "CS50", desc: "shi" },
      { start: "10:15", end: "10:45", task: "Pausa activa", desc: "shi" },
      { start: "10:45", end: "11:45", task: "Alemán 🇩🇪", desc: "shi" },
      { start: "11:45", end: "12:00", task: "Tiempo libre", desc: "shi" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "URE SUPOSSE TO BE IN CHARGE" },
      { start: "13:00", end: "14:00", task: "Oficios del hogar", desc: "URE TO BE THE LEADER" },
      { start: "14:00", end: "15:30", task: "Tiempo libre", desc: "LEAD US TO SOME BREAKFAST THEN" },
      { start: "15:30", end: "16:30", task: "Matemáticas o tema extra ", desc: "NGGA" },
      { start: "16:30", end: "17:30", task: "Lectura ", desc: "O!?" },
    ],
    evening: [
      { start: "17:30", end: "18:30", task: "Tiempo libre", desc: "c" },
      { start: "18:30", end: "19:30", task: "Ayudar en casa", desc: "r" },
      { start: "19:30", end: "20:30", task: "Cena", desc: "a" },
      { start: "20:30", end: "21:30", task: "Tiempo tranquilo", desc: "n" },
      { start: "21:30", end: "22:00", task: "Preparar el viernes", desc: "k" },
      { start: "22:00", end: "06:00", task: "Dormir", desc: "Dat" },
    ],
  },

  // 5: VIERNES — ejercicio + cierre de semana
  5: {
    morning: [
      { start: "06:00", end: "06:10", task: "Despertar", desc: "ick" },
      { start: "06:10", end: "06:15", task: "Tomar agua ", desc: "do it" },
      { start: "06:15", end: "06:35", task: "Ejercicio", desc: "fua" },
      { start: "06:35", end: "06:50", task: "Estiramiento", desc: "fua" },
      { start: "06:50", end: "07:30", task: "Etutdy?", desc: "ha" },
      { start: "07:30", end: "08:30", task: "Desayuno + tiempo libre", desc: "nao nao" },
      { start: "08:30", end: "10:30", task: "CS50", desc: "more for hardvard2" },
      { start: "10:30", end: "11:00", task: "Pausa activa", desc: "maybe think about me" },
      { start: "11:00", end: "12:00", task: "Alemán 🇩🇪", desc: "yei" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "a" },
      { start: "13:00", end: "14:00", task: "Oficios del hogar", desc: "a" },
      { start: "14:00", end: "16:00", task: "Tiempo libre total", desc: "a" },
      { start: "16:00", end: "17:00", task: "Lectura", desc: "a" },
    ],
    evening: [
      { start: "17:00", end: "19:00", task: "Tiempo libre", desc: "e" },
      { start: "19:00", end: "20:00", task: "Ayudar en casa", desc: "e" },
      { start: "20:00", end: "21:00", task: "Cena", desc: "e" },
      { start: "21:00", end: "22:30", task: "Tiempo libre total", desc: "e" },
      { start: "22:30", end: "08:00", task: "Dormir", desc: "e" },
    ],
  },

  // 6: SÁBADO — recarga + oficios
  6: {
    morning: [
      { start: "08:00", end: "09:00", task: "Despertar tranquila", desc: "yea" },
      { start: "09:00", end: "09:30", task: "Desayuno", desc: "iagh" },
      { start: "09:30", end: "11:30", task: "Oficios del hogar", desc: "nao" },
      { start: "11:30", end: "12:00", task: "Descanso", desc: "ouch" },
    ],
    afternoon: [
      { start: "12:00", end: "13:00", task: "Almuerzo", desc: "ish" },
      { start: "13:00", end: "14:30", task: "Tiempo libre", desc: "ish" },
      { start: "14:30", end: "15:30", task: "CS50 o repaso", desc: "seeee" },
      { start: "15:30", end: "17:00", task: "Hobbies (cuales)", desc: "ashkasassa" },
      { start: "17:00", end: "18:00", task: "Tiempo libre", desc: "hmm" },
    ],
    evening: [
      { start: "18:00", end: "19:00", task: "Ayudar en casa", desc: "nao" },
      { start: "19:00", end: "20:00", task: "Tiempo libre", desc: "nao" },
      { start: "20:00", end: "21:00", task: "Cena", desc: "nao" },
      { start: "21:00", end: "21:30", task: "Preparar el domingo", desc: "nao" },
      { start: "21:30", end: "08:00", task: "Dormir", desc: "nao" },
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
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  document.getElementById("current-day-title").textContent = dias[now.getDay()];
  document.getElementById("current-full-date").textContent =
    `${now.getDate()} de ${meses[now.getMonth()]}, ${now.getFullYear()}`;
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
    if (stars) stars.style.opacity = "1";
  }

  const isNight = hour >= 19 || hour < 6;
  document.documentElement.style.setProperty("--text", isNight ? "#e8f4f8" : "#1a2a33");
  document.documentElement.style.setProperty("--text-soft", isNight ? "#8aacbb" : "#6b8a99");
  document.documentElement.style.setProperty("--card", isNight ? "#22343f" : "#ffffff");

  document.documentElement.style.setProperty("--bg", colors.pageBg);
  document.documentElement.style.setProperty("--accent", colors.clock);
  document.documentElement.style.setProperty("--accent-light", colors.accentLight);
  document.documentElement.style.setProperty("--accent-soft", colors.accentSoft);
  document.documentElement.style.setProperty("--border", colors.border);

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
}

/* ── FOTOS Y CALENDARIO ─────────────────────────────────────────────────────── */

const calendarDays = document.getElementById("calendar-days");
const monthYearText = document.getElementById("month-year");
let selectedDay = null;
let navDate = new Date();

function renderCalendar() {
  const viewYear = navDate.getFullYear();
  const viewMonth = navDate.getMonth();

  const today = new Date();
  const dHoy = today.getDate();
  const mHoy = today.getMonth();
  const aHoy = today.getFullYear();

  monthYearText.innerText = navDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  calendarDays.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

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

document.getElementById("upload-photo").addEventListener("change", function (e) {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        localStorage.setItem(selectedDay, event.target.result);
        renderCalendar();
        openModal(selectedDay);
        e.target.value = "";
      } catch (error) {
        alert("La imagen es muy pesada. Intenta con una más pequeña.");
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

document.addEventListener('DOMContentLoaded', renderCalendar);