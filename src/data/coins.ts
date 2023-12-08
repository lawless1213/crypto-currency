export enum TableTypes {
	COIN_MAIN = "main",
	COIN_PORTFOLIO = "portfolio",
	COIN_FAVORITES = "favorites"
}

export enum CoinsCharacter {
	NAME = "Name",
	PRICE = "Price",
	CHANGE = "Change",
	VOLUME24 = "Volume (24h)",
	MARKETCAP = "Market Cap",
	COUNT = "Count",
}

export interface ICoinsTable {
	columns: {
		[key: string]: {
			title: string,
			show: boolean,
		}
	},
	rowsValues?: string[],
	periodValues: string[],
	defaultValues: {
		rows: string,
		period: string,
	}
}

export const portfolioTableParams: ICoinsTable = {
	columns: {
		name: {
			title: CoinsCharacter.NAME,
			show: true,
		},
		price: {
			title: CoinsCharacter.PRICE,
			show: true,
		},
		change: {
			title: CoinsCharacter.CHANGE,
			show: true,
		},
		count: {
			title: CoinsCharacter.COUNT,
			show: true,
		},
	},
	rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
	periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
	defaultValues: {
		rows: '10',
		period: '24h',
	}
}