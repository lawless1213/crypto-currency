import { ICoin } from "./ICoin";
import { ICoinDetail } from "./ICoinDetail";
import { IStats } from "./IStats";

// Coins List
export interface CoinsListApiParams {
  limit?: number,
  referenceCurrencyUuid?: string,
  timePeriod?: string,
  'tiers[0]'?: string,
  symbols?: string[],
  orderBy?: string,
  orderDirection?: string,
  offset?: string
};

export interface CoinsListResponse {
  status: string;
  data: {
    stats: IStats;
    coins: ICoin[];
  };
}

// Coin Detail
export interface CoinDetailApiParams {
  uuid: string,
  referenceCurrencyUuid?: string,
  timePeriod?: string,
};

export interface CoinDetailResponse {
  status: string;
  data: {
    coin: ICoinDetail;
  };
}