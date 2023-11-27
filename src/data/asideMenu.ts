import { MdSpaceDashboard } from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";

import { IAsideMenuItem } from "../models/IAside";

export const menu: IAsideMenuItem[] = [
	{
		title: 'Main',
		url: '/',
		icon: MdSpaceDashboard
	},
	{
		title: 'Market',
		url: '/market',
		icon: TbAppsFilled
	},
	{
		title: 'UI Components',
		url: '/ui-components',
		icon: TbAppsFilled
	}
]