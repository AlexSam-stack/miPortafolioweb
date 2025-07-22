let semanaActual = 1;
const totalSemanas = 15;

function mostrarSemana(numero) {
  semanaActual = numero;
  const principal = document.getElementById("pagina-principal");
  if (principal) principal.style.display = "none";

  const container = document.getElementById("paginas-semanas");
  fetch(`../semanas/semana${numero}.html`)
    .then((res) => res.text())
    .then((html) => {
      container.innerHTML = `
        <div class="pagina-semana" id="semana-${numero}" style="display:block;">
          <div class="navegacion-semana">
            <button class="btn-navegacion btn-volver" onclick="volverAInicio()">← Volver al índice</button>
            <div class="navegacion-botones">
              <button class="btn-navegacion" onclick="semanaAnterior()" ${
                numero === 1 ? "disabled" : ""
              }>← Anterior</button>
              <button class="btn-navegacion" onclick="semanaSiguiente()" ${
                numero === totalSemanas ? "disabled" : ""
              }>Siguiente →</button>
            </div>
          </div>
          <div class="contenido-semana">
            ${html}
          </div>
        </div>
      `;
    });
}

function volverAInicio() {
  const principal = document.getElementById("pagina-principal");
  if (principal) principal.style.display = "block";
  document.getElementById("paginas-semanas").innerHTML = "";
}

function semanaAnterior() {
  if (semanaActual > 1) mostrarSemana(semanaActual - 1);
}
function semanaSiguiente() {
  if (semanaActual < totalSemanas) mostrarSemana(semanaActual + 1);
}
