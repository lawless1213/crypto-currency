enum CoinsCharacter {
	NAME = "Name",
	PRICE = "Price",
	CHANGE = "Change",
	VOLUME24 = "Volume (24h)",
	MARKETCAP = "Market Cap",
	COUNT = "Count",
}

interface coinsTable {
	columns: {
		[key: string]: string
	},
	rowsValues?: string[],
	periodValues: string[],
	defaultValues: {
		rows: string,
		period: string,
	}
}

export const coinsTableParams: coinsTable = {
	columns: {
		name: CoinsCharacter.NAME,
		price: CoinsCharacter.PRICE,
		change: CoinsCharacter.CHANGE,
		volume24h: CoinsCharacter.VOLUME24,
		marketCap: CoinsCharacter.MARKETCAP,
	},
	rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
	periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
	defaultValues: {
		rows: '10',
		period: '24h',
	}
}

export const portfolioTableParams: coinsTable = {
	columns: {
		name: CoinsCharacter.NAME,
		price: CoinsCharacter.PRICE,
		change: CoinsCharacter.CHANGE,
		count: CoinsCharacter.COUNT,
	},
	periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
	defaultValues: {
		rows: '10',
		period: '24h',
	}
}