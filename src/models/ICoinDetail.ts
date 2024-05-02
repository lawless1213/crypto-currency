interface ILink {
  name: string;
  url: string;
  type: string;
}

interface ISupply {
  confirmed: boolean;
  supplyAt: number;
  max: string;
  total: string;
  circulating: string;
}

interface IAllTimeHigh {
  price: string;
  timestamp: number;
}

export interface ICoinDetail {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: ILink[];
  supply: ISupply;
  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  allTimeHigh: IAllTimeHigh;
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: boolean;
  notices: null;
  contractAddresses: any[];
  tags: string[];
}