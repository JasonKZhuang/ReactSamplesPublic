import { createContext, useContext, useState } from "react";
import "./MyPage.css";

// Step-1 define theme context type
type User = {
	name: string;
	email: string;
};
interface ThemeContextType {
	theme: string;
	user: User;
	message: string;
	action: (arg: string) => void;
}

// Step-2 Create the initial context
const defaultContextValue: ThemeContextType = {
	theme: "light",
	user: { name: "Jason", email: "jason@gmail.com" },
	message: "Top level Action",
	action: (arg: string) => {
		console.log("================== This is top level " + arg + " action.");
	},
};

// step-3 Create the theme context with initial value
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// step-3 apply Context provider and consumer, wrapping all hierarchy consumer components inside context provider
export default function MyPage() {
	//
	const [myContext, setMyContext] = useState<ThemeContextType>(defaultContextValue);
	//
	const toggleTheme = () => {
		// setMyContext({
		// 	theme: "light",
		// 	user: { name: "", email: "" },
		// 	action: myAction,
		// });
		setMyContext((prev) => ({
			...prev,
			theme: prev?.theme === "dark" ? "light" : "dark",
		}));
	};

	const toggleAction = (arg: (arg: string) => void) => {
		setMyContext((prev) => ({
			...prev,
			action: arg,
		}));
	};

	const firstAction = (arg: string) => {
		setMyContext((prev) => ({
			...prev,
			message: "==== Switch to Top level First Action with " + arg + " ====",
		}));
	};

	const secondAction = (arg: string) => {
		setMyContext((prev) => ({
			...prev,
			message: "==== Switch to Top level Second Action with " + arg + " ====",
		}));
	};

	//
	return (
		<ThemeContext.Provider value={myContext}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					border: "1px solid red",
					width: "1280px",
					height: "auto",
					padding: "15px",
				}}
			>
				<h2>{myContext.message}</h2>
				<button onClick={toggleTheme}>Toggle Theme - all under top level hierarchy will change the theme</button>
				<button onClick={() => toggleAction(myContext.theme === "dark" ? firstAction : secondAction)}>
					{myContext.theme === "dark" ? "Toggle Action - Dark:FirstAction" : "Toggle Action - Light:SecondAction"}
				</button>
				<AustraliaComponent />
			</div>
		</ThemeContext.Provider>
	);
}

function AustraliaComponent() {
	const myThemeContext = useContext(ThemeContext);
	return (
		<div
			className={myThemeContext.theme}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
			}}
		>
			<h2>The current theme is {myThemeContext.theme} in Australia.</h2>
			<RmitUniversity />
		</div>
	);
}

function RmitUniversity() {
	const myThemeContext = useContext(ThemeContext);
	const className = "panel-" + myThemeContext.theme;
	return (
		<div
			className={className}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
				width: "80%",
			}}
		>
			<h3>This is RMIT University in Australia</h3>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "5px",
				}}
			>
				<JasonComponent />
				<PeterComponent />
			</div>
		</div>
	);
}

function JasonComponent() {
	//
	const myThemeContext = useContext(ThemeContext);
	//
	return (
		<div style={{ backgroundColor: "green", margin: "10px" }}>
			<h4>This a Jason From RMIT Australia </h4>
			<button
				style={{ border: "1px solid red", borderRadius: "10px", backgroundColor: "grey" }}
				onClick={() => myThemeContext.action("Jason")}
			>
				Call top level action by Jason
			</button>
		</div>
	);
}

function PeterComponent() {
	//
	const myThemeContext = useContext(ThemeContext);
	//
	return (
		<div style={{ backgroundColor: "blue", margin: "10px" }}>
			<h4>This a Peter From RMIT Australia </h4>
			<button
				style={{ border: "1px solid red", borderRadius: "10px", backgroundColor: "grey" }}
				onClick={() => myThemeContext.action("Peter")}
			>
				Call top level action by Peter
			</button>
		</div>
	);
}
