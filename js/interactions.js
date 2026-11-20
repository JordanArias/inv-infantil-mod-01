/**
 * ==========================================================================
 * INTERACTIONS.JS - ENLACES DE UBICACIÓN Y MESA DE REGALOS
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.INVITATION_CONFIG;
  if (!config) return;

  const venueLink =
    document.getElementById("check-location-btn") ||
    document.getElementById("venue-map-card");
  if (venueLink && config.lugar?.mapsUrl) {
    venueLink.href = config.lugar.mapsUrl;
  }

  const registryLink = document.getElementById("registry-link-btn");
  if (registryLink && config.regalos?.url) {
    registryLink.href = config.regalos.url;
  }
});
