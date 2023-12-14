import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CoinsListResponse } from "../models/IAPI";
import { ICoin } from "../models/ICoin";
import { ApiParams } from "../models/IAPI"
import { CoinsCharacter } from "../data/coins";


export const availableSort: CoinsCharacter[] = [CoinsCharacter.PRICE, CoinsCharacter.MARKETCAP, CoinsCharacter.VOLUME24];

export const CoinAPI = createApi({
	reducerPath: 'coinAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com/'}),
	endpoints: (build) => ({
		fetchAllCoins: build.query<CoinsListResponse, { limit: number, referenceCurrencyUuid?: string, timePeriod?: string, tiers?: string[], orderBy?: string, orderDirection?: string, offset?: string }>({
			query: (params) => {
				const defaultParams: ApiParams = {
					limit: 5,
					referenceCurrencyUuid: 'yhjMzLPhuIDl',
					timePeriod: '24h',
					'tiers[0]': '1',
					orderBy: 'marketCap',
					orderDirection: 'desc',
					offset: '0'
				};

				const mergedParams = { ...defaultParams, ...params };

				return {
					url: '/coins',
					params: mergedParams,
					headers: {
							'X-RapidAPI-Key': '8f3327a863mshf1d76badd7b8c7cp1f13b4jsn4dc544205eb9',
							'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
					}
				};
			}
		})
	})
})

export const isIncrementalChange = (coin: ICoin): boolean => {
	return coin.change.charAt(0) !== '-';
};

export const setCurrency = (value: string | number): string => {
	let res = '$' + Number(value).toLocaleString();
	return res;
}

export const setAmount = (value: string | number, price: string | number): string =>  {
	return setCurrency(Number(value ?? 0) * Number(price));
}