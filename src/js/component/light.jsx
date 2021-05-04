import React from "react";
import PropTypes from "prop-types";

const Light = props => {
	let statusAndColor = props.color;
	if (props.status == true) {
		statusAndColor.concat(" glow");
	}
	if (props.status == false) {
		statusAndColor = props.color;
	}
	return <div className={statusAndColor} onClick={props.myOnClick}></div>;
};

export default Light;

Light.propTypes = {
	color: PropTypes.string,
	status: PropTypes.bool,
	myOnClick: PropTypes.func
};

/*
const semaforo = {
	color: props.color,     //rojo, verde, amarillo
    state: state            //apagado o encendido
};
*/
