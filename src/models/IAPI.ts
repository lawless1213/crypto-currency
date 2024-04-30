import { ICoin } from "./ICoin";
import { IStats } from "./IStats";

export interface ApiParams {
  limit?: number,
  referenceCurrencyUuid?: string,
  timePeriod?: string,
  'tiers[0]'?: string,
  'symbols[0]'?: string,
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