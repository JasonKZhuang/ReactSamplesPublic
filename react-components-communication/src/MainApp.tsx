import "./MainApp.css";
import Parent from "./usingProps/Parent";
import MyPage from "./usingContext/MyPage";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function MainApp() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/usingProps"
					element={<Parent />}
				/>
				<Route
					path="/usingContext"
					element={<MyPage />}
				/>
			</Routes>
		</>
	);
}

export default MainApp;
