let medicos = JSON.parse(localStorage.getItem("medicos")) || [];

function agregarMedico() {
    const nombre = document.getElementById("nombreMedico").value;
    if (nombre === "") return;

    medicos.push(nombre);
    localStorage.setItem("medicos", JSON.stringify(medicos));
    mostrarMedicos();
}

function mostrarMedicos() {
    const lista = document.getElementById("listaMedicos");
    lista.innerHTML = "";
    medicos.forEach((m, i) => {
        lista.innerHTML += `<li>${m}
            <button onclick="eliminarMedico(${i})">Eliminar</button>
        </li>`;
    });
}

function eliminarMedico(index) {
    medicos.splice(index, 1);
    localStorage.setItem("medicos", JSON.stringify(medicos));
    mostrarMedicos();
}

mostrarMedicos();
