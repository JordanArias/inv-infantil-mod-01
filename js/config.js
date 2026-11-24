/**
 * ==========================================================================
 * CONFIGURACIÓN CENTRALIZADA - INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS
 * JACKSON - ¡CUMPLE 5 AÑITOS!
 * ==========================================================================
 * Este archivo centraliza todos los datos editables de la invitación.
 */

const INVITATION_CONFIG = {
  festejado: {
    nombre: "Jackson",
    edadNumero: 5,
    edadTexto: "cumple 5 añitos",
    lemaSuperior: "¡El Más Feliz",
    lemaInferior: "Del Mundo!",
    subtituloInvitacion: "¡Acompáñanos a celebrar!",
    fraseMagica: "¡No podemos esperar para celebrar la magia contigo!",
    fechaCorta: "24.11.2026"
  },
  fecha: {
    diaSemana: "Martes",
    diaNumero: 24,
    mesNombre: "Noviembre",
    mesNumero: 11,
    anio: 2026,
    fechaTexto: "24 de Noviembre de 2026",
    horaTexto: "A las 5:00 PM",
    fechaLimiteRsvp: "15 de Octubre",
    // Fecha y hora en formato ISO para la cuenta regresiva en vivo
    fechaHoraISO: "2026-11-24T17:00:00"
  },
  lugar: {
    titulo: "Ubicación",
    nombreSalon: "125 Willow Lane,",
    direccion: "Rosewood, CA 90210",
    mapsUrl: "https://maps.google.com/?q=125+Willow+Lane+Rosewood+CA+90210"
  },
  regalos: {
    titulo: "Mesa de Regalos",
    mensaje:
      "Tu presencia y cariño son el mejor regalo de todos. Si deseas hacernos llegar un detalle especial, puedes consultar nuestra lista de regalos aquí:",
    url: "#rsvp-section"
  },
  papas: {
    etiqueta: "Con el cariño de sus papás:",
    nombres: "Familia de Jackson"
  },
  whatsapp: {
    telefono: "", // Coloca aquí el número con código de país (ej. "59170000000" o "5215512345678")
    mensajePredefinido:
      "¡Hola! Confirmo con mucha alegría mi asistencia al cumpleaños Nº 5 de Jackson 🐭✨🎂"
  },
  musica: {
    archivo: "music/cancion_boda.mp3",
    titulo: "Música Mágica de Cumpleaños - Jackson"
  }
};

if (typeof window !== "undefined") {
  window.INVITATION_CONFIG = INVITATION_CONFIG;
  window.WEDDING_CONFIG = INVITATION_CONFIG;
}
