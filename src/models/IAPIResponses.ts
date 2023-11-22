import { ICoin } from "./ICoin";

export interface ApiResponse {
  status: string;
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
      // Інші властивості stats, якщо вони є
    };
    coins: ICoin[];
  };
}