function pad(value) {
  return String(value).padStart(2, '0');
}

function getAmPm(hours) {
  return hours >= 12 ? 'PM' : 'AM';
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const ampm = getAmPm(hours);

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function formatDate(date) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  return `${dayName} - ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
}

function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');

  if (!timeEl || !dateEl) return;

  timeEl.textContent = formatTime(now);
  dateEl.textContent = formatDate(now);
}

function requestFullscreen() {
  const element = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

updateClock();
setInterval(updateClock, 1000);

const fullscreenBtn = document.getElementById('fullscreenBtn');
if (fullscreenBtn) {
  fullscreenBtn.addEventListener('click', requestFullscreen);
}
