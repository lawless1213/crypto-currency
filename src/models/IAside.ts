import { ReactElement } from "react";

export enum AsideModes {
	FULL_MODE = 'full',
	SMALL_MODE = 'compact'
}

export interface IAsideMenuItem {
	title: string,
	url: string,
	icon: ReactElement,
}