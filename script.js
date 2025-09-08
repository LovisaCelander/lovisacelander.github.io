window.dataLayer = window.dataLayer || [];

document.addEventListener("DOMContentLoaded", function() {
  function registreraKlickEvent(id, knappnamn) {
      const element = document.getElementById(id);
      if (element) {
          element.addEventListener("click", function () {
              dataLayer.push({
                  event: "menyKlick",
                  knapp: knappnamn
              });
              console.log(`Klick på ${knappnamn} skickat till dataLayer`);
          });
      }
  }

  registreraKlickEvent("omMigKnapp", "Om mig");
  registreraKlickEvent("portfolioKnapp", "Portfolio");
  registreraKlickEvent("kontaktKnapp", "Kontakt");
});


