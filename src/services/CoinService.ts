import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CoinsListResponse } from "../models/IAPIResponses";
import { ICoin } from "../models/ICoin";

export const CoinAPI = createApi({
	reducerPath: 'coinAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com/'}),
	endpoints: (build) => ({
		fetchAllCoins: build.query<CoinsListResponse, number>({
			query: (limit: number = 5) => ({
				url: '/coins',
				params: {
					limit: limit,
					// referenceCurrencyUuid: 'yhjMzLPhuIDl',
					// timePeriod: '24h',
					// 'tiers[0]': '1',
					// orderBy: 'price',
					// orderDirection: 'desc',
					// offset: '0'
				},
				headers: {
					'X-RapidAPI-Key': '8f3327a863mshf1d76badd7b8c7cp1f13b4jsn4dc544205eb9',
    			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
				}
			})
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