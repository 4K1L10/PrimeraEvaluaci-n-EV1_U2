document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        var valid = true;

        // Validaciones
        var nombre = document.getElementById("nombre");
        if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
            valid = false;
            nombre.setCustomValidity("Debe ingresar un dato correcto");
        }

        var apellido = document.getElementById("apellido");
        if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
            valid = false;
            apellido.setCustomValidity("Debe ingresar un dato correcto");
        }

        var telefono = document.getElementById("telefono");
        if (!/^[0-9]{9}$/.test(telefono.value) || parseInt(telefono.value) < 222222222 || parseInt(telefono.value) >= 999999999) {
            valid = false;
            telefono.setCustomValidity("Debe ingresar un dato correcto");
        }

        var carrera = document.getElementById("carrera");
        if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(carrera.value)) {
            valid = false;
            carrera.setCustomValidity("Debe ingresar un dato correcto");
        }

        var edad = document.getElementById("edad");
        var edadValue = parseInt(edad.value);
        if (isNaN(edadValue) || edadValue < 17 || edadValue > 60) {
            valid = false;
            edad.setCustomValidity("Debe ingresar un dato correcto");
        }

        var mensaje = document.getElementById("mensaje");
        if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(mensaje.value)) {
            valid = false;
            mensaje.setCustomValidity("Debe ingresar un dato correcto");
        }
        
        var boton = document.getElementById("boton").value;
        var botonInput = document.getElementById("boton");

        if (boton.trim() === "") {
            nombreInput.setCustomValidity("Debe ingresar un dato correcto");
            alert("Mensaje no enviado. Revisa los datos ingresados");
        } else {
            botonInput.setCustomValidity("");
            alert("Datos enviados correctamente");
        }
    });
});
