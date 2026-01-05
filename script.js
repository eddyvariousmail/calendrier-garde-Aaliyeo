function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    loadCalendar();
  } else {
    alert("Mot de passe incorrect");
  }
}

function loadCalendar() {
  const calendarEl = document.getElementById("calendar");
  const year = new Date().getFullYear();

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "fr",
    events: generateYear(year),
    height: "auto"
  });

  calendar.render();
}
