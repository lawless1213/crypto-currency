import { createSlice} from "@reduxjs/toolkit";
import { CoinsCharacter, ICoinsTable, TableTypes } from "../../data/coins";

interface IInitialState {
	coinTables: Record<TableTypes, ICoinsTable>;
}

const initialState: IInitialState = {
	coinTables: {
		[TableTypes.COIN_MAIN]: {
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
				volume24h: {
					title: CoinsCharacter.VOLUME24,
					show: true,
				},
				marketCap: {
					title: CoinsCharacter.MARKETCAP,
					show: true,
				},
			},
			rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
			periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
			defaultValues: {
				rows: '10',
				period: '24h',
			}
		},
		[TableTypes.COIN_PORTFOLIO]: {
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
		},
		[TableTypes.COIN_FAVORITES]: {
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
	}
}

export const TablesParamsSlice = createSlice({
	name: 'tableParams',
	initialState,
	reducers: {
		
	}
})

// export const {  } = settingsSlice.actions;
export default TablesParamsSlice.reducer;