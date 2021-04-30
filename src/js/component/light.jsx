import React from "react";
import PropTypes from "prop-types";

const Light = props => {
	return <div className={props.color}></div>;
};

export default Light;

Light.propTypes = {
	color: PropTypes.string
};
