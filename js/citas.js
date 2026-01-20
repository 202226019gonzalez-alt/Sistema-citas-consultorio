let citas = JSON.parse(localStorage.getItem("citas")) || [];
let indiceEditar = null;

function agregarCita() {
    const paciente = document.getElementById("pacienteCita").value;
    const medico = document.getElementById("medicoCita").value;
    const fecha = document.getElementById("fechaCita").value;

    if (paciente === "" || medico === "" || fecha === "") return;

    if (indiceEditar === null) {
        citas.push({ paciente, medico, fecha });
    } else {
        citas[indiceEditar] = { paciente, medico, fecha };
        indiceEditar = null;
        document.getElementById("btnCita").innerText = "Agregar cita";
    }

    localStorage.setItem("citas", JSON.stringify(citas));
    limpiarFormulario();
    mostrarCitas();
}

function mostrarCitas() {
    const lista = document.getElementById("listaCitas");
    lista.innerHTML = "";

    citas.forEach((cita, i) => {
        lista.innerHTML += `
            <li>
                ${cita.paciente} - ${cita.medico} - ${cita.fecha}
                <div>
                    <button onclick="editarCita(${i})">Modificar</button>
                    <button onclick="eliminarCita(${i})">Cancelar</button>
                </div>
            </li>
        `;
    });
}

function editarCita(i) {
    const cita = citas[i];
    document.getElementById("pacienteCita").value = cita.paciente;
    document.getElementById("medicoCita").value = cita.medico;
    document.getElementById("fechaCita").value = cita.fecha;

    indiceEditar = i;
    document.getElementById("btnCita").innerText = "Guardar cambios";
}

function eliminarCita(i) {
    citas.splice(i, 1);
    localStorage.setItem("citas", JSON.stringify(citas));
    mostrarCitas();
}

function limpiarFormulario() {
    document.getElementById("pacienteCita").value = "";
    document.getElementById("medicoCita").value = "";
    document.getElementById("fechaCita").value = "";
}

mostrarCitas();
