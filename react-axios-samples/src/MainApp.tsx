import "./MainApp.css";
import GetRequestExample from "./components/GetRequestExample";
import MinimalExample from "./components/MinimalExample";

function MainApp() {
	return (
		<div className="flex flex-col items-center justify-start h-[200px]">
			<MinimalExample />
			<GetRequestExample />
		</div>
	);
}

export default MainApp;
