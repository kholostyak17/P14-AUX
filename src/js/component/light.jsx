import React, { useState } from "react";
import PropTypes from "prop-types";

const Light = props => {
	return <div className={props.status} onClick={props.myOnClick}></div>;
};

export default Light;

Light.propTypes = {
	status: PropTypes.bool,
	myOnClick: PropTypes.func
};
