import { ICoin } from "./ICoin";
import { ICoinDetail, ICoinPriceHistory } from "./ICoinDetail";
import { IStats } from "./IStats";

// Coins List
export interface CoinsListApiParams {
  limit?: number,
  referenceCurrencyUuid?: string,
  timePeriod?: string,
  'tiers[0]'?: string,
  symbols?: string[],
  uuids?: string[],
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

// Coin Detail
export interface CoinPriceHistoryApiParams {
  uuid: string,
  referenceCurrencyUuid?: string,
  timePeriod?: string,
};

export interface CoinPriceHistoryResponse {
  status: string;
  data: {
    change: string;
    history: ICoinPriceHistory[];
  };
}