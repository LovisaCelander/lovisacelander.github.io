window.dataLayer = window.dataLayer || [];

document.addEventListener("DOMContentLoaded", function () {
  // Funktion för att registrera klick på navigationsknappar
  function registreraNavigationsKlick(id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault(); // Stoppar direkt navigering

        const linkUrl = element.href;
        const eventData = {
          event: "navigation_click",
          link_id: id,
          link_text: text,
          link_url: linkUrl,
          timestamp: new Date().toISOString()
        };

        window.dataLayer.push(eventData);
        console.log("Event skickat till dataLayer:", eventData);

        // Vänta 200ms innan navigering för att taggen ska skickas
        setTimeout(function () {
          window.location.href = linkUrl;
        }, 200);
      });
    }
  }

  registreraNavigationsKlick("omMigKnapp", "Om mig");
  registreraNavigationsKlick("kontaktKnapp", "Kontakt");
  registreraNavigationsKlick("portfolioKnapp", "Portfolio");
  registreraNavigationsKlick("cvKnapp", "CV");

  // Accordion klick-event
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    acc.addEventListener('click', function () {
      const eventData = {
        event: 'accordion_click',
        link_id: this.id || null,
        link_text: this.textContent.trim(),
        // Accordion är inte länkar, men vi kan använda nuvarande sida url
        link_url: window.location.href,
        timestamp: new Date().toISOString()
      };

      window.dataLayer.push(eventData);
      console.log('Accordion click event skickat:', eventData);
    });
  });
});








