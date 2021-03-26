import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import PropTypes from "prop-types";

//Creamos la función que nos solicita el ejercicio SecondsCounter
export function SecondsCounter(props) {
	return (
		<div className="BCKGContainer">
			<p className="MiTitle">Seconds Counter</p>
			<div className="Reloj">
				<i class="fas fa-stopwatch"></i>
			</div>
			<div className="Seis">{props.sextoDigito % 10}</div>
			<div className="Cinco">{props.quintoDigito % 10}</div>
			<div className="Cuatro">{props.cuartoDigito % 10}</div>
			<div className="Tres">{props.tercerDigito % 10}</div>
			<div className="Dos">{props.segundoDigito % 10}</div>
			<div className="Uno">{props.primerDigito % 10}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	sextoDigito: PropTypes.number,
	quintoDigito: PropTypes.number,
	cuartoDigito: PropTypes.number,
	tercerDigito: PropTypes.number,
	segundoDigito: PropTypes.number,
	primerDigito: PropTypes.number
};
//Inicializo mi variable "counter" en 0
let counter = 0;
setInterval(function() {
	const Seis = Math.floor(counter / 100000);
	const Cinco = Math.floor(counter / 10000);
	const Cuatro = Math.floor(counter / 1000);
	const Tres = Math.floor(counter / 100);
	const Dos = Math.floor(counter / 10);
	const Uno = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SecondsCounter
			primerDigito={Uno}
			segundoDigito={Dos}
			tercerDigito={Tres}
			cuartoDigito={Cuatro}
			quintoDigito={Cinco}
			sextoDigito={Seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
