import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoinsCharacter, ICoinsTable, TableTypes } from "../../data/coins";

interface IInitialState {
	coinTables: Record<TableTypes, ICoinsTable>;
}

const initialState: IInitialState = {
	coinTables: {
		[TableTypes.COIN_MAIN]: {
			columns: {
				[CoinsCharacter.NAME]: {
					title: CoinsCharacter.NAME,
					show: true,
					required: true,
				},
				[CoinsCharacter.PRICE]: {
					title: CoinsCharacter.PRICE,
					show: true,
				},
				[CoinsCharacter.VOLUME24]: {
					title: CoinsCharacter.VOLUME24,
					show: true,
				},
				[CoinsCharacter.MARKETCAP]: {
					title: CoinsCharacter.MARKETCAP,
					show: true,
				},
				[CoinsCharacter.COUNT]: {
					title: CoinsCharacter.COUNT,
					show: false,
				},
			},
			rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
			periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
			defaultValues: {
				rows: '10',
				period: '24h',
				order: CoinsCharacter.MARKETCAP,
			}
		},
		[TableTypes.COIN_PORTFOLIO]: {
			columns: {
				[CoinsCharacter.NAME]: {
					title: CoinsCharacter.NAME,
					show: true,
					required: true,
				},
				[CoinsCharacter.PRICE]: {
					title: CoinsCharacter.PRICE,
					show: true,
				},
				[CoinsCharacter.VOLUME24]: {
					title: CoinsCharacter.VOLUME24,
					show: false,
				},
				[CoinsCharacter.MARKETCAP]: {
					title: CoinsCharacter.MARKETCAP,
					show: false,
				},
				[CoinsCharacter.COUNT]: {
					title: CoinsCharacter.COUNT,
					show: true,
				},
			},
			periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
			defaultValues: {
				rows: '50',
				period: '24h',
				order: CoinsCharacter.MARKETCAP,
			}
		},
		[TableTypes.COIN_FAVORITES]: {
			columns: {
				[CoinsCharacter.NAME]: {
					title: CoinsCharacter.NAME,
					show: true,
					required: true,
				},
				[CoinsCharacter.PRICE]: {
					title: CoinsCharacter.PRICE,
					show: true,
				},
				[CoinsCharacter.VOLUME24]: {
					title: CoinsCharacter.VOLUME24,
					show: false,
				},
				[CoinsCharacter.MARKETCAP]: {
					title: CoinsCharacter.MARKETCAP,
					show: false,
				},
				[CoinsCharacter.COUNT]: {
					title: CoinsCharacter.COUNT,
					show: true,
				},
			},
			rowsValues: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
			periodValues: ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'],
			defaultValues: {
				rows: '10',
				period: '24h',
				order: CoinsCharacter.MARKETCAP,
			}
		}
	}
}

export const TablesParamsSlice = createSlice({
	name: 'tableParams',
	initialState,
	reducers: {
		toggleOrder(state, action: PayloadAction<{ table: TableTypes, order: CoinsCharacter }>) {
			const { table, order: newOrder } = action.payload;

			return {
				...state,
				coinTables: {
					...state.coinTables,
					[table]: {
						...state.coinTables[table],
						defaultValues: {
							...state.coinTables[table].defaultValues,
							order: newOrder,
						},
					},
				},
			};
		}
	}
})

export const { toggleOrder } = TablesParamsSlice.actions;
export default TablesParamsSlice.reducer;