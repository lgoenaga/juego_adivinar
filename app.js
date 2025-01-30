var numeroSecreto;
var intentos;
var listaNumeros = [];
const numeroMaximo = 20;
const numeroIntentos = 5;
iniciarJuego();
document
	.getElementById("botonIntentar")
	.addEventListener("click", verificarIntento);
document.getElementById("reiniciar").addEventListener("click", iniciarJuego);

//document.getElementById("reiniciar").disabled = true;

function insertarTexto(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return elementoHTML;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

	if (isNaN(numeroUsuario)) {
		insertarTexto("p", "Ingresa un número válido");
		return;
	}

	if (numeroUsuario === numeroSecreto) {
		insertarTexto(
			"p",
			`¡Felicidades! Adivinaste el número secreto en ${intentos} intento${
				intentos > 1 ? "s" : ""
			}`
		);
		intercambiarBoton();
	} else {
		if (numeroUsuario > numeroSecreto) {
			insertarTexto("p", "El número secreto es menor");
		} else {
			insertarTexto("p", "El número secreto es mayor");
		}
		if (intentos < numeroIntentos) {
			intentos++;
			limpiarInput();
		} else {
			insertarTexto(
				"p",
				`Se te acabaron los intentos. El número secreto era ${numeroSecreto}`
			);
			intercambiarBoton();
		}
	}
}

function numeroAleatorio() {

  let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);

  if (listaNumeros.length < numeroMaximo) {

  if (listaNumeros.includes(numeroGenerado)) {
    return numeroAleatorio();
  } else {
    listaNumeros.push(numeroGenerado);
    return numeroGenerado;
  }
  } else {
    listaNumeros = [];
    return numeroAleatorio();
  }
}

function limpiarInput() {
	document.getElementById("valorUsuario").value = "";
}

function iniciarJuego() {
	intercambiarBoton();
	numeroSecreto = numeroAleatorio();
	intentos = 1;
	console.log("Número secreto: ", numeroSecreto);
	insertarTexto("p", `Ingresa un número del 1 al ${numeroMaximo}`);
	limpiarInput();
  let titulo = insertarTexto("#titulo", "Juego Adivina el número");
  titulo.style.color = "violet";
}

function intercambiarBoton() {
	if (document.getElementById("reiniciar").disabled) {
		document.getElementById("botonIntentar").disabled = true;
		document.getElementById("reiniciar").disabled = false;
	} else {
		document.getElementById("botonIntentar").disabled = false;
		document.getElementById("reiniciar").disabled = true;
	}
}
