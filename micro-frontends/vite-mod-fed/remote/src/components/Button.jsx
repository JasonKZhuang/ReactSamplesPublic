import { useState } from "react";
import "./Button.css";
// import useCount from "./store";

export const Button = () => {
	const [state, setState] = useState(0);
	return (
		<div className="div-container">
			<button
				className="shared-btn"
				onClick={() => setState((s) => s + 1)}
			>
				Click Remote Button: {state}
			</button>
		</div>
	);
};

export default Button;
