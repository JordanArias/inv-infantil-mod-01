/**
 * ==========================================================================
 * COUNTDOWN.JS - CUENTA REGRESIVA EN VIVO (DÍAS : HORAS : MIN : SEG)
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const configDate =
    window.INVITATION_CONFIG?.fecha?.fechaHoraISO || "2027-04-28T15:00:00";
  const targetDate = new Date(configDate);

  const daysEl =
    document.getElementById("countdown-days") || document.getElementById("days");
  const hoursEl =
    document.getElementById("countdown-hours") || document.getElementById("hours");
  const minutesEl =
    document.getElementById("countdown-minutes") || document.getElementById("minutes");
  const secondsEl =
    document.getElementById("countdown-seconds") || document.getElementById("seconds");

  // Respaldo de 159d 08h 40m 55s si la fecha objetivo ya pasó
  let fallbackTotalSeconds = 159 * 24 * 3600 + 8 * 3600 + 40 * 60 + 55;

  function updateCountdown() {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();

    let days, hours, minutes, seconds;

    if (diff > 0 && !Number.isNaN(diff)) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((diff % (1000 * 60)) / 1000);
    } else {
      if (fallbackTotalSeconds > 0) fallbackTotalSeconds--;
      days = Math.floor(fallbackTotalSeconds / (3600 * 24));
      hours = Math.floor((fallbackTotalSeconds % (3600 * 24)) / 3600);
      minutes = Math.floor((fallbackTotalSeconds % 3600) / 60);
      seconds = Math.floor(fallbackTotalSeconds % 60);
    }

    const pad = (n) => String(n).padStart(2, "0");

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
