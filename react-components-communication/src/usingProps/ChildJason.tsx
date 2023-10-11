import React from "react";
import { IChildProps } from "../models/IChildProps";

/**
 * To make TypeScript happy, we need to tell it what to expect on that props object.
 * To accomplish this, we need to create an interface.
 * The interface will contain props that we're going to be referencing and their types.
 * @param param0
 * @returns
 */
const ChildJason: React.FC<IChildProps> = (props) => {
	// function ChildJason({ nickName, age, car, action }: IChildProps) {
	return (
		<div>
			<h3>ChildJason</h3>
			<h3>Nick Name : {props.nickName}</h3>
			<h3>Age : {props.age}</h3>
			<h3>Car Brand : {props.car?.brand}</h3>
			<h3>Car Price : {props.car?.price}</h3>
			<h3>Car Miles : {props.car?.miles}</h3>
			<button onClick={() => props.action(100)}>Call Parent Drive Car Method</button>
		</div>
	);
};

export default ChildJason;
