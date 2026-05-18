const form = document.getElementById("entryForm");
const entriesList = document.getElementById("entriesList");

let entries = JSON.parse(localStorage.getItem("entries")) || [];

// Renderizar entradas
function renderEntries() {
  entriesList.innerHTML = "";

  entries.forEach((entry, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.description}</p>
      <p class="entry-date">${entry.date}</p>
      <button class="delete-btn" onclick="deleteEntry(${index})">
        Remover
      </button>
    `;

    entriesList.appendChild(li);
  });
}

// Salvar no localStorage
function saveEntries() {
  localStorage.setItem("entries", JSON.stringify(entries));
}

// Adicionar entrada
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  const newEntry = {
    title,
    description,
    date
  };

  entries.push(newEntry);

  saveEntries();
  renderEntries();

  form.reset();
});

// Remover entrada
function deleteEntry(index) {
  entries.splice(index, 1);

  saveEntries();
  renderEntries();
}

renderEntries();


// Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch((err) => console.log("Erro:", err));
  });
}


// Instalação PWA
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();

  deferredPrompt = e;

  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  installBtn.hidden = true;

  deferredPrompt.prompt();

  const { outcome } = await deferredPrompt.userChoice;

  console.log(`Resultado da instalação: ${outcome}`);

  deferredPrompt = null;
});