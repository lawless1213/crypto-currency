import { IconType } from "react-icons";

export enum AsideModes {
	FULL_MODE = 'full',
	SMALL_MODE = 'compact'
}

export interface IAsideMenuItem {
	title: string,
	url: string,
	icon: IconType,
}