/**
 * ==========================================================================
 * INVITATION.JS - TRANSICIONES Y REVELADO SUAVE EN SCROLL
 * INVITACIÓN INFANTIL DISNEY MICKEY & FRIENDS - JACKSON
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-invitation-container");
  const envelope = document.getElementById("envelope-screen");
  const isEnvelopePresent = envelope && !envelope.classList.contains("hidden");

  if (mainContainer) {
    mainContainer.classList.add("page-dreamy-entrance");

    if (!isEnvelopePresent) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          mainContainer.classList.add("page-ready");
        }, 60);
      });
    } else {
      window.addEventListener(
        "envelopeOpened",
        () => {
          setTimeout(() => {
            mainContainer.classList.add("page-ready");
          }, 120);
        },
        { once: true }
      );
    }
  }

  const revealGroups = [
    { selector: ".hero-section", class: "scroll-reveal", delay: "delay-1" },
    { selector: ".kid-callout-section", class: "scroll-reveal-scale", delay: "delay-2" },
    { selector: ".event-details-section", class: "scroll-reveal" },
    { selector: ".countdown-section", class: "scroll-reveal" },
    { selector: ".gift-registry-section", class: "scroll-reveal-scale" },
    { selector: ".rsvp-section", class: "scroll-reveal" },
    { selector: ".mickey-photo-section", class: "scroll-reveal-scale" },
    { selector: ".closing-section", class: "scroll-reveal" }
  ];

  const allTargets = [];
  revealGroups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((node, index) => {
      node.classList.add(group.class);
      if (group.delay) {
        node.classList.add(group.delay);
      }
      if (group.stagger) {
        const staggerIndex = (index % 4) + 1;
        node.classList.add(`delay-${staggerIndex}`);
      }
      allTargets.push(node);
    });
  });

  if (!("IntersectionObserver" in window)) {
    allTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -25px 0px",
      threshold: 0.06
    }
  );

  const startObserving = () => {
    allTargets.forEach((el) => observer.observe(el));
  };

  if (!isEnvelopePresent) {
    setTimeout(startObserving, 100);
  } else {
    window.addEventListener(
      "envelopeOpened",
      () => {
        setTimeout(startObserving, 250);
      },
      { once: true }
    );
  }
});
