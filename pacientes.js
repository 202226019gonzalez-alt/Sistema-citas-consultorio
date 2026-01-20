console.log("pacientes.js cargado");

let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

function agregarPaciente() {
    const nombre = document.getElementById("nombrePaciente").value;
    if (nombre === "") return;

    pacientes.push(nombre);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    mostrarPacientes();
}

function mostrarPacientes() {
    const lista = document.getElementById("listaPacientes");
    lista.innerHTML = "";
    pacientes.forEach((p, i) => {
        lista.innerHTML += `<li>${p}
            <button onclick="eliminarPaciente(${i})">Eliminar</button>
        </li>`;
    });
}

function eliminarPaciente(index) {
    pacientes.splice(index, 1);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    mostrarPacientes();
}

mostrarPacientes();
