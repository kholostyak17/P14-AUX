import React, { useState } from "react";
import Light from "./light.jsx";
import PropTypes from "prop-types";

const TrafficLight = () => {
	const [lightStatus, setLightStatus] = useState({
		redLight: "bg-danger",
		ambarLight: "bg-warning",
		greenLight: "bg-success"
	});

	return (
		<div className="box container border border-dark d-flex flex-column">
			<Light
				status={lightStatus.redLight}
				myOnClick={() => {
					setLightStatus({
						redLight: "bg-danger glow",
						ambarLight: "bg-warning",
						greenLight: "bg-success"
					});
				}}
			/>
			<Light
				myOnClick={() =>
					setLightStatus({
						redLight: "bg-danger",
						ambarLight: "bg-warning glow",
						greenLight: "bg-success"
					})
				}
				status={lightStatus.ambarLight}
			/>
			<Light
				myOnClick={() =>
					setLightStatus({
						redLight: "bg-danger",
						ambarLight: "bg-warning",
						greenLight: "bg-success glow"
					})
				}
				status={lightStatus.greenLight}
			/>
		</div>
	);
};

export default TrafficLight;
