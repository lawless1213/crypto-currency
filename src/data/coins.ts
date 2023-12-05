interface coinsTable {
	columns: string[],
	rowsValues: string[],
	periodValues: string[],
	defaultValues: {
		rows: string,
		period: string,
	}
}

export const coinsTableParams: coinsTable = {
	columns: ["Name", "Price", "Change", "Volume (24h)", "Market Cap"],
	rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
	periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
	defaultValues: {
		get rows(){
			return coinsTableParams.rowsValues[1];
		},
		get period() {
			return coinsTableParams.periodValues[1];
		}
	}
}