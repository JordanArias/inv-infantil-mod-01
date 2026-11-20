/**
 * ==========================================================================
 * RSVP.JS - CONFIRMACIÓN DE ASISTENCIA INTEGRADA CON WHATSAPP
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.getElementById("rsvp-form");
  const whatsappBtn = document.getElementById("whatsapp-rsvp-btn");
  const nameInput = document.getElementById("guest-name");
  const phoneInput = document.getElementById("guest-phone");
  const messageInput = document.getElementById("guest-message");
  const toast = document.getElementById("copy-toast");

  function getAttendanceValue() {
    const checkedRadio = document.querySelector(
      'input[name="attending"]:checked'
    );
    if (checkedRadio) return checkedRadio.value;
    const attendSelect = document.getElementById("guest-attending");
    return attendSelect ? attendSelect.value : "si";
  }

  function sendWhatsAppConfirmation(e) {
    if (e) e.preventDefault();

    const config = window.INVITATION_CONFIG || {};
    const phone = config.whatsapp?.telefono || "";
    const kidName =
      config.festejado?.nombre || config.festejada?.nombre || "Jackson";

    const guestName = nameInput ? nameInput.value.trim() : "";
    const guestPhone = phoneInput ? phoneInput.value.trim() : "";
    const attendVal = getAttendanceValue();
    const customMsg = messageInput ? messageInput.value.trim() : "";

    let fullMessage = "";

    if (!guestName && !guestPhone && !customMsg) {
      fullMessage =
        config.whatsapp?.mensajePredefinido ||
        `¡Hola! Confirmo con mucha alegría mi asistencia al cumpleaños de ${kidName} 🐭✨🎂`;
    } else {
      const attendingText =
        attendVal === "no"
          ? "No podré asistir esta vez 😢"
          : "¡Sí! Ahí estaré para celebrar 🎉";

      fullMessage = `🏰 *CONFIRMACIÓN DE ASISTENCIA - CUMPLEAÑOS DE ${kidName.toUpperCase()}* 🐭✨\n\n`;
      if (guestName) {
        fullMessage += `👤 *Nombre:* ${guestName}\n`;
      }
      fullMessage += `🎈 *¿Asistirás?:* ${attendingText}\n`;
      if (guestPhone) {
        fullMessage += `📱 *Teléfono:* ${guestPhone}\n`;
      }
      if (customMsg) {
        fullMessage += `💌 *Mensaje:* ${customMsg}\n`;
      }
    }

    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(30);
      } catch (_) {}
    }

    if (toast) {
      toast.textContent = "✨ ¡Abriendo WhatsApp para enviar tu confirmación!";
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2800);
    }

    const baseWa = phone ? `https://wa.me/${phone}` : "https://wa.me/";
    const url = `${baseWa}?text=${encodeURIComponent(fullMessage)}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 350);
  }

  if (formEl) {
    formEl.addEventListener("submit", sendWhatsAppConfirmation);
  } else if (whatsappBtn) {
    whatsappBtn.addEventListener("click", sendWhatsAppConfirmation);
  }
});
