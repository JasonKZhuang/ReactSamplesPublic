import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Remote Application</h1>
			<div className="card">
				<Button />
			</div>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
