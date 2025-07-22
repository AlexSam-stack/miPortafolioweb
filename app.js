// Estructura base de secciones (puedes expandir con más contenido)
const sections = {
  portada: {
    title: "¡Bienvenido a mi Portafolio!",
    content: `./portada/Portada.html`,
  },
  "sobre-mi": {
    title: "Sobre Mí",
    content: `sobre_Mi/SobreMi.html`, // Archivo externo
  },
  proyectos: {
    title: "Proyectos",
    content: `./proyectos/Proyectos.html`, // Archivo externo
  },
  cuaderno: {
    title: "Cuaderno",
    content: `./cuaderno/Cuaderno.html`, // Archivo externo
  },
  "reflexion-final": {
    title: "Reflexión Final",
    content: `./reflexion_final/ReflexionFinal.html`, // Archivo externo
  },
  bibliografia: {
    title: "Bibliografía",
    content: `./bibliografia/Bibliografia.html`, // Archivo externo
  },
};

// Función para animar el cambio de sección (con soporte para archivos externos)
function animateSectionChange(newHTML) {
  const section = document.getElementById("main-section");
  section.classList.add("fade-out");
  setTimeout(() => {
    section.innerHTML = newHTML;
    section.classList.remove("fade-out");
    section.classList.add("fade-in");
    setTimeout(() => section.classList.remove("fade-in"), 400);
  }, 400);
}

// Función para cargar contenido (interno o externo)

function loadSection(sectionKey) {
  const sectionData = sections[sectionKey];
  if (!sectionData) return;
  const content = sectionData.content;

  if (
    typeof content === "string" &&
    content.trim().toLowerCase().endsWith(".html")
  ) {
    fetch(content)
      .then((res) => res.text())
      .then((html) => {
        animateSectionChange(html);

        // Si es el cuaderno, espera a que el DOM cambie, luego carga el script
        if (content.toLowerCase().includes("./cuaderno/cuaderno.html")) {
          setTimeout(() => {
            const script = document.createElement("script");
            script.src = "./cuaderno/Cuaderno.js";
            script.onload = () => {
              console.log("Cuaderno.js cargado");
              if (typeof generarPaginasSemanas === "function") {
                generarPaginasSemanas();
              } else {
                console.warn("No se encontró la función generarPaginasSemanas");
              }
            };
            document.body.appendChild(script);
          }, 500); // Espera medio segundo para asegurar que el DOM ya tiene el contenedor
        }
      })
      .catch(() =>
        animateSectionChange(
          "<p style='color:red'>No se pudo cargar el contenido.</p>"
        )
      );
  } else {
    animateSectionChange(`<h1>${sectionData.title}</h1>${content}`);
  }
}

// Asigna eventos a los botones de navegación
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const sectionKey = this.getAttribute("data-section");
    loadSection(sectionKey);
  });
});

// Terminal toggle
document.getElementById("toggle-terminal").onclick = function () {
  document.getElementById("terminal-panel").classList.remove("hidden");
};
document.getElementById("close-terminal").onclick = function () {
  document.getElementById("terminal-panel").classList.add("hidden");
};

// Mostrar portada al cargar
loadSection("portada");
