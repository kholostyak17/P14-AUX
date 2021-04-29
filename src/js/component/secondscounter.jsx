import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
//import StopClock from "./stopclock.jsx";

const SecondsCounter = () => {
	//const [myVar, setMyVar] = useState(0);
	let myVar = -1;

	window.setInterval(() => {
		if (myVar == 9) {
			myVar = 0;
		} else {
			myVar++;
		}
		console.log(myVar);
	}, 1000);

	return <div>{myVar}</div>;
};

export default SecondsCounter;

/* let second = window.setInterval(() => {
		<StopClock />;
	}, 1000);
	return <div>{second}</div>; */

//ReactDOM.render(<SecondsCounter />, document.querySelector("#myDiv"));
