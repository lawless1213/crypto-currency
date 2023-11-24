import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";

interface IMenuItem {
	title: string,
	url: string,
	icon: IconType,
}

export const menu: IMenuItem[] = [
	{
		title: 'Main',
		url: '/',
		icon: MdSpaceDashboard
	},
	{
		title: 'UI Components',
		url: '/ui-components',
		icon: TbAppsFilled
	}
]