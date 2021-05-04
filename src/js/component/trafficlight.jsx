import React, { useState } from "react";
import Light from "./light.jsx";
import PropTypes from "prop-types";

const TrafficLight = () => {
    const [lightStatus, setLightStatus] = useState({
        green: false,
        red: false,
        yellow: false
    });

    return (
        <div className="box container m-auto border border-dark d-flex flex-column">
            <Light
                color="green"
                myOnClick={() => {
                    setLightStatus({
                        green: true,
                        red: false,
                        yellow: false
                    });
                    if (LightStatus.green == true) {
                        color.concat(" glow");
                    }
                    if (LightStatus.green == false) {
                        color = "green";
                    }
                    console.log(lightStatus.green);
                }}
                status={lightStatus.green}
            />
            <Light
                color="red"
                myOnClick={() =>
                    setLightStatus({
                        green: false,
                        red: true,
                        yellow: false
                    });
                    if (LightStatus.red == true) {
                        color.concat(" glow");
                    }
                    if (LightStatus.red == false) {
                        color = "red";
                    }
                    
					console.log(lightStatus.red);)
				}
				status={lightStatus.red}
			/>
            <Light
                color="yellow"
                myOnClick={() =>
                    setLightStatus({
                        green: false,
                        red: false,
                        yellow: true
                    });
                    if (LightStatus.yellow == true) {
                        color.concat(" glow");
                    }
                    if (LightStatus.yellow == false) {
                        color = "yellow";
                    }
					console.log(lightStatus.green);)
				}
				status={lightStatus.yellow}
			/>
        </div>
    );
};

export default TrafficLight;
