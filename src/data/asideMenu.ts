
import { icons } from "components/Icons";
import { IAsideMenuItem } from "../models/IAside";

export const menu: IAsideMenuItem[] = [
	{
		title: 'Main',
		url: '/',
		icon: icons.APPS
	},
	{
		title: 'Market',
		url: '/market',
		icon: icons.CHART_PIE
	},
	{
		title: 'All Markets',
		url: '/allmarkets',
		icon: icons.COINS
	},
	{
		title: 'UI Components',
		url: '/ui-components',
		icon: icons.APPS_ADD
	}
]