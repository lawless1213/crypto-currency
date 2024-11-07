// hooks/usePortfolio.ts
import { useContext, useCallback } from "react";
import { PortfolioContext } from "../store/context/PortfolioContext";
import { User } from "firebase/auth";
import { IUserCoin } from "../models/IUser";

// Хук для отримання поточного портфоліо
export const usePortfolioData = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolioData must be used within a PortfolioProvider");
  return context.portfolio;
};

// Хук для додавання монети до портфоліо
export const useAddPortfolioItem = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("useAddPortfolioItem must be used within a PortfolioProvider");

  return useCallback(
    (coin: IUserCoin) => context.addPortfolioItem(coin),
    [context]
  );
};

// Хук для додавання монети до портфоліо
export const useGetPortfolioItem = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("useAddPortfolioItem must be used within a PortfolioProvider");

  return useCallback(
    (uuid: string) => context.getPortfolioItem(uuid),
    [context]
  );
};
