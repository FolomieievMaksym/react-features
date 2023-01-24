import React from "react";
import '../styles/Button.scss'
const Button = function (props) {
	
	return (
		<button className="btn">
			{props.text}
		</button>
	);
}

export default Button;