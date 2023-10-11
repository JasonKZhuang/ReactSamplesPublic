import { useRef, useState } from "react";
import ChildJason from "./ChildJason";
import ChildPeter from "./ChildPeter";
import { ICar } from "../models/ICar";

/**
 * 1. passing key and value from Parent to Child we can use Props with key-value, the value could be not only primitive types such as string, number but also object type such as ICar interface.
 * 2. passing a function from Parent to Child, so the child can call parent method, the fact is that exposing the parent's function-pointer-address to child, so the child can call parent function via access that function-pointer, whatever the contents in that parent function.
 * 3. how the parent call child function?
 *
 *
 *
 */
function Parent() {
	// useState
	const [title, setTitle] = useState("");
	const [nickName, setNickName] = useState("Jason");
	const [age, setAge] = useState(30);
	const [car, setCar] = useState<ICar>({
		brand: "Toyota",
		price: 50000,
		miles: 0,
	});

	//useRef
	const peterRef = useRef<any>(null);
	// const jasonRef = useRef<any>(null);

	// customized methods
	// this method is to update only the miles of the car object
	const parentMethodToDriveCar = (val: number) => {
		setCar((prevState) => ({
			...prevState,
			miles: prevState?.miles ? prevState?.miles + val : val,
		}));
	};

	//
	const callChildFunction = () => {
		if (peterRef.current) {
			const val: string = peterRef.current.childPeterFunction1();
			setTitle(val);
		} else {
			console.log("first");
			setNickName("ChildFunction");
			setAge(100);
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				border: "1px solid red",
				width: "1280px",
				height: "auto",
				padding: "5px",
			}}
		>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h1>Parent-{title}</h1>
				<h2>{nickName}</h2>
				<h2>{car?.miles}</h2>
				<h2></h2>
				<button onClick={callChildFunction}>Call Child Peter Function</button>
			</div>
			<div style={{ display: "flex", flexDirection: "column", border: "1px solid yellow" }}>
				<h2>Children</h2>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<div style={{ width: "45%", border: "1px solid white" }}>
						Jason
						<ChildJason
							nickName={nickName}
							age={age}
							car={car}
							action={parentMethodToDriveCar}
						/>
					</div>
					<div style={{ width: "45%", border: "1px solid white" }}>
						Peter
						<ChildPeter
							ref={peterRef}
							nickName={"Peter"}
							age={18}
							car={car}
							action={parentMethodToDriveCar}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Parent;
