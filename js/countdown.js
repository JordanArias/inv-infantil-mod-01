/**
 * ==========================================================================
 * COUNTDOWN.JS - CUENTA REGRESIVA EN VIVO (DÍAS : HORAS : MIN : SEG)
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const configDate =
    window.INVITATION_CONFIG?.fecha?.fechaHoraISO || "2026-11-24T17:00:00";
  const targetDate = new Date(configDate);

  const daysEl =
    document.getElementById("countdown-days") || document.getElementById("days");
  const hoursEl =
    document.getElementById("countdown-hours") || document.getElementById("hours");
  const minutesEl =
    document.getElementById("countdown-minutes") || document.getElementById("minutes");
  const secondsEl =
    document.getElementById("countdown-seconds") || document.getElementById("seconds");

  let intervalId = null;

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    let days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0;

    if (diff > 0 && !Number.isNaN(diff)) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((diff % (1000 * 60)) / 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    const pad = (n) => String(n).padStart(2, "0");

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});
