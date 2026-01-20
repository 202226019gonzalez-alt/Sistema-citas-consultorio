document.addEventListener("DOMContentLoaded", () => {

    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    function agregarPaciente() {
        const nombre = document.getElementById("nombrePaciente").value;
        if (nombre === "") return;

        pacientes.push(nombre);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        document.getElementById("nombrePaciente").value = "";
        mostrarPacientes();
    }

    function mostrarPacientes() {
        const lista = document.getElementById("listaPacientes");
        if (!lista) return;

        lista.innerHTML = "";

        pacientes.forEach((paciente, i) => {
            lista.innerHTML += `
                <li>
                    ${paciente}
                    <button onclick="eliminarPaciente(${i})">Eliminar</button>
                </li>
            `;
        });
    }

    function eliminarPaciente(i) {
        pacientes.splice(i, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        mostrarPacientes();
    }

    // 👉 Hacemos funciones globales
    window.agregarPaciente = agregarPaciente;
    window.eliminarPaciente = eliminarPaciente;

    mostrarPacientes();
});
