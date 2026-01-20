let citas = JSON.parse(localStorage.getItem("citas")) || [];

function agregarCita() {
    const fecha = document.getElementById("fechaCita").value;
    const paciente = document.getElementById("pacienteCita").value;
    const medico = document.getElementById("medicoCita").value;

    if (!fecha || !paciente || !medico) return;

    citas.push({ fecha, paciente, medico });
    localStorage.setItem("citas", JSON.stringify(citas));
    mostrarCitas();
}

function mostrarCitas() {
    const lista = document.getElementById("listaCitas");
    lista.innerHTML = "";
    citas.forEach((c, i) => {
        lista.innerHTML += `<li>
            ${c.fecha} - ${c.paciente} - ${c.medico}
            <button onclick="eliminarCita(${i})">Cancelar</button>
        </li>`;
    });
}

function eliminarCita(index) {
    citas.splice(index, 1);
    localStorage.setItem("citas", JSON.stringify(citas));
    mostrarCitas();
}

mostrarCitas();
