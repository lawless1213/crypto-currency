export enum TableTypes {
	COIN_MAIN = "main",
	COIN_PORTFOLIO = "portfolio",
	COIN_FAVORITES = "favorites"
}

export enum CoinsCharacter {
	NAME = "name",
	PRICE = "price",
	VOLUME24 = "24hVolume",
	MARKETCAP = "marketCap",
	COUNT = "count",
}

export interface ICoinsTable {
	columns: Record<CoinsCharacter, {
		title: string,
		show: boolean,
		required?: boolean,
	}>,
	rowsValues?: string[],
	periodValues: string[],
	defaultValues: {
		rows: string,
		period: string,
		order?: string,
	}
}