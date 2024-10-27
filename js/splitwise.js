class Usuario {
    constructor(nombre, pathImg) {
        this.nombre = nombre;
        this.gastos = [];
        this.pathImg = pathImg;
        this.deudas = 0;
    }

    // Suma los gastos al usuario
    sumarGastos(monto) {
        this.deudas += monto;
    }

    // Añade gastos al usuario
    añadirGasto(gasto) {
        this.gastos.push(gasto);
        this.deudas += gasto.monto;
    }

    // Calcula el total de gastos por usuario
    totalPagado() {
        return this.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    }
}

class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
}

//Declaración de usuarios 
const usuarios = [
    new Usuario('Juan', 'img/usuarios/avatar_a.png'),
    new Usuario('Ana', 'img/usuarios/avatar_b.png'),
    new Usuario('Carlos', 'img/usuarios/avatar_c.png')
];

// REGEX 
let tituloValido = /^[A-Za-z0-9\s]{1,20}$/;
let importeValido = /^\d+(\.\d{1,2})?$/;
let fechaValida = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

document.addEventListener('submit', function (event) {
    event.preventDefault();

    let usuarioSeleccionado = document.getElementById('usuario');
    let titulo = document.getElementById('titulo');
    let importe = document.getElementById('importe');
    let fecha = document.getElementById('fecha');

    // Valida cada campo y pone el borde de cada input verde (OK) o rojo (MAL)
    let esValido = true;

    if (tituloValido.test(titulo.value)) {
        titulo.classList.remove('invalid');
        titulo.classList.add('valid');
    } else {
        titulo.classList.remove('valid');
        titulo.classList.add('invalid');
        esValido = false;
    }

    if (importeValido.test(importe.value)) {
        let importeFormulario = parseFloat(importe.value);
        if (importeFormulario < 0.00 || importeFormulario > 1000.00) {
            importe.classList.remove('valid');
            importe.classList.add('invalid');
            esValido = false;
        } else{
            importe.classList.remove('invalid');
            importe.classList.add('valid');
        }
    } else {
        importe.classList.remove('valid');
        importe.classList.add('invalid');
        esValido = false; 
    }

    if (fechaValida.test(fecha.value)) {
        fecha.classList.remove('invalid');
        fecha.classList.add('valid');
    } else {
        fecha.classList.remove('valid');
        fecha.classList.add('invalid');
        esValido = false;
    }

    if (!esValido) {
        alert('Completa todos los campos correctamente.');
        return;
    }

    // Se guarda el nombre del usuario y compruebo que el usuario coincida con alguno de los usuarios disponibles
    let nombreUsuario = usuarioSeleccionado.value;
    let usuarioEncontrado = usuarios.find(u => u.nombre === nombreUsuario);

    //Se crea el gasto y se añade al usuario que se encontró
    let nuevoGasto = new Gasto(titulo.value, parseFloat(importe.value), fecha.value);
    usuarioEncontrado.añadirGasto(nuevoGasto);

    // Crea las tarjetas en cada apartado (Resumen y Cuenta)
    crearElementoResumen(usuarioEncontrado, nuevoGasto);
    crearElementoCuenta(usuarios);

    // Vacia los campos cuando se envia el formulario
    usuarioSeleccionado.value = '';
    titulo.value = '';
    importe.value = '';
    fecha.value = '';

});

function crearElementoResumen(usuarioP, gasto) {

    //Creación de la tarjeta
    let resumen = document.getElementById("ventanaResumen");

    let primerDiv = document.createElement("div");
    primerDiv.className = "card mb-12 espacio";

    let segundoDiv = document.createElement("div");
    segundoDiv.className = "row g-0";

    let divImagen = document.createElement("div");
    divImagen.className = "col-md-2";

    let imagen = document.createElement("img");
    imagen.className = "img-fluid rounded-start";
    imagen.src = usuarioP.pathImg;
    divImagen.appendChild(imagen);

    let contenido = document.createElement("div");
    contenido.className = "col-md-10";

    let tarjeta = document.createElement("div");
    tarjeta.className = "card-body";

    let tituloTarjeta = document.createElement("h5");
    tituloTarjeta.className = "card-title";
    tituloTarjeta.textContent = usuarioP.nombre;

    let textoTarjeta = document.createElement("p");
    textoTarjeta.className = "card-text";
    //Añado el texto que quiero que se ponga en la tarjeta
    textoTarjeta.textContent = `Pagó ${gasto.monto.toFixed(2)}€ el ${gasto.fecha}.`;

    tarjeta.append(tituloTarjeta, textoTarjeta);
    contenido.appendChild(tarjeta);
    segundoDiv.append(divImagen, contenido);
    primerDiv.appendChild(segundoDiv);
    resumen.appendChild(primerDiv);
}


function crearElementoCuenta(usuarios) {
    let resumen = document.getElementById("ventanaCuenta");
    resumen.innerHTML = '';

    // Calcular el total de los gastos de todos los usuarios
    let totalGastos = usuarios.reduce((total, usuario) => total + usuario.totalPagado(), 0);
    //Divide la cantidad entre el número de usuarios
    let cantidadCadaUno = totalGastos / usuarios.length;


    usuarios.forEach(usuario => {
        //Creación de la tarjeta
        let primerDiv = document.createElement("div");
        primerDiv.className = "card mb-12 espacio";

        let segundoDiv = document.createElement("div");
        segundoDiv.className = "row g-0";

        let divImagen = document.createElement("div");
        divImagen.className = "col-md-2";

        let imagen = document.createElement("img");
        imagen.className = "img-fluid rounded-start";
        imagen.src = usuario.pathImg;

        divImagen.appendChild(imagen);

        let contenido = document.createElement("div");
        contenido.className = "col-md-10";

        let tarjeta = document.createElement("div");
        tarjeta.className = "card-body";

        let tituloTarjeta = document.createElement("h5");
        tituloTarjeta.className = "card-title";
        tituloTarjeta.textContent = usuario.nombre;

        let textoTarjeta = document.createElement("p");
        textoTarjeta.className = "card-text";

        // Calculo la diferencia entre lo que pagó y lo que debería haber pagado
        let totalPagado = usuario.totalPagado();
        let diferencia = totalPagado - cantidadCadaUno;

        // Se muestra lo que ha pagado el usuario y su saldo (si debe o le deben)
        if (diferencia < 0) {
            textoTarjeta.textContent = `${usuario.nombre} ha pagado ${totalPagado}€, debe ${Math.abs((diferencia)).toFixed(2)} €`;
        } else if (diferencia > 0) {
            textoTarjeta.textContent = `${usuario.nombre} ha pagado ${totalPagado}€, se le debe ${(diferencia).toFixed(2)} €`;
        } else {
            textoTarjeta.textContent = `${usuario.nombre} ha pagado ${totalPagado}€, ha saldado las deudas.`;
        }


        tarjeta.append(tituloTarjeta, textoTarjeta);
        contenido.appendChild(tarjeta);
        segundoDiv.append(divImagen, contenido);
        primerDiv.appendChild(segundoDiv);
        resumen.appendChild(primerDiv);
    });
}
