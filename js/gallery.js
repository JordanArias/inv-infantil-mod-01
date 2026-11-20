/**
 * ==========================================================================
 * GALLERY.JS - VISOR LIGHTBOX PARA EL MARCO DE FOTO CON OREJAS DE MICKEY
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const clickablePhotos = document.querySelectorAll(
    ".mickey-photo-trigger, .envelope-photo-card"
  );

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Jackson - Cumpleaños Nº 5";
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  clickablePhotos.forEach((el) => {
    el.addEventListener("click", () => {
      const mainImg =
        el.querySelector("img") ||
        document.querySelector(".mickey-portrait-img");
      if (mainImg) {
        openLightbox(mainImg.src, mainImg.alt);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
});
