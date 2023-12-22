import { MdSpaceDashboard } from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaCoins, FaChartPie } from "react-icons/fa";

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
		icon: FaChartPie 
	},
	{
		title: 'All Markets',
		url: '/allmarkets',
		icon: FaCoins
	},
	// {
	// 	title: 'UI Components',
	// 	url: '/ui-components',
	// 	icon: TbAppsFilled
	// }
]