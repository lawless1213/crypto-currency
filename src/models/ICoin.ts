export interface ICoin {
	[key: string]: string | number | boolean | null | string[] | (string | null)[] | undefined;

	"btcPrice": string;
	"change": string;
	"coinrankingUrl": string;
	"color": string;
	"iconUrl": string;
	"listedAt": number;
	"lowVolume": boolean;
	"marketCap": string;
	"name": string;
	"price": string;
	"rank": number;
	"sparkline": (string | null)[];
	"symbol": string;
	"tier": number;
	"uuid": string;
	"24hVolume": string;
}