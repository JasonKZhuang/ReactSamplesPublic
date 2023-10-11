import { ICar } from "./ICar";

export interface IChildProps {
	nickName: string;
	age?: number;
	car?: ICar;
	action: (arg: number) => void;
}
