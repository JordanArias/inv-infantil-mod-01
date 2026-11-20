/**
 * ==========================================================================
 * MUSIC.JS - REPRODUCTOR Y CONTROL DE MÚSICA (BOTÓN SUPERIOR + FLOTANTE)
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const floatingBtn = document.getElementById("floating-music-btn");
  const topMickeyBtn = document.getElementById("music-toggle-btn");
  const musicStatusText = document.getElementById("music-status-text");
  const audio = document.getElementById("wedding-music");

  if (!audio) return;

  audio.volume = 0.75;

  function updateVisual(isPlaying) {
    [floatingBtn, topMickeyBtn].forEach((btn) => {
      if (!btn) return;
      if (isPlaying) {
        btn.classList.remove("is-paused");
        btn.classList.add("is-playing");
        btn.setAttribute("title", "Pausar música");
        btn.setAttribute("aria-label", "Pausar música");
      } else {
        btn.classList.remove("is-playing");
        btn.classList.add("is-paused");
        btn.setAttribute("title", "Reproducir música");
        btn.setAttribute("aria-label", "Reproducir música");
      }
    });

    if (musicStatusText) {
      musicStatusText.textContent = isPlaying
        ? "Música sonando"
        : "Música incluida";
    }
  }

  function toggleAudio(e) {
    if (e) e.stopPropagation();
    if (audio.paused) {
      audio
        .play()
        .then(() => updateVisual(true))
        .catch((err) => console.log("Error al reproducir audio:", err));
    } else {
      audio.pause();
      updateVisual(false);
    }
  }

  if (floatingBtn) {
    floatingBtn.addEventListener("click", toggleAudio);
  }

  if (topMickeyBtn) {
    topMickeyBtn.addEventListener("click", toggleAudio);
  }

  window.addEventListener("musicStateChanged", (e) => {
    updateVisual(Boolean(e.detail?.isPlaying));
  });
});
