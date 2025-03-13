document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservaForm");
    const listaReservas = document.getElementById("listaReservas");

    function guardarReserva(reserva) {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let reserva = {
                nombre: document.getElementById("nombre").value,
                telefono: document.getElementById("telefono").value,
                fecha: document.getElementById("fecha").value,
                hora: document.getElementById("hora").value,
                personas: document.getElementById("personas").value
            };

            guardarReserva(reserva);
            alert("✅ Reserva guardada con éxito");
            form.reset();
        });
    }

    if (listaReservas) {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.forEach((reserva, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${reserva.nombre}</strong> 🕒 ${reserva.fecha} - ${reserva.hora}  
                📞 ${reserva.telefono} | 👥 ${reserva.personas} personas
                <button onclick="eliminarReserva(${index})">🗑 Eliminar</button>
            `;
            listaReservas.appendChild(li);
        });
    }
});

function eliminarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    location.reload();
}
