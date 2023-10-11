import { forwardRef, useImperativeHandle, useState } from "react";

/**
 * To make TypeScript happy, we need to tell it what to expect on that props object.
 * To accomplish this, we need to create an interface.
 * The interface will contain props that we're going to be referencing and their types.
 */
	const ChildPeter = (props: any, ref: any) => {
		//
		const [childAge, setChildAge] = useState(0);

		//
		useImperativeHandle(ref, () => ({
			childPeterFunction1() {
				console.log("this is the child peter function 1.");
				setChildAge((prev) => prev + 1);
				return "Peter Child function is called.";
			},
			childPeterFunction2() {
				console.log("this is the child peter function 2.");
			},
		}));

		return (
			<div>
				<h3>ChildPeter</h3>
				<h3>Nick Name : {props.nickName}</h3>
				<h3>Age : {childAge}</h3>
				<h3>Car Brand : {props.car?.brand}</h3>
				<h3>Car Price : {props.car?.price}</h3>
				<h3>Car Miles : {props.car?.miles}</h3>
				<button onClick={() => props.action(-100)}>Call Parent Drive Car Method</button>
			</div>
		);
	};

export default forwardRef<any, any>(ChildPeter);
