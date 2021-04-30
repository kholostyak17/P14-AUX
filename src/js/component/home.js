import React from "react";
import Light from "./light.jsx";

export function Home() {
	return (
		<div className="box container m-auto border border-dark d-flex flex-column">
			<Light color="bg-success" />
			<Light color="bg-danger" />
			<Light color="bg-warning" />
		</div>
	);
}
