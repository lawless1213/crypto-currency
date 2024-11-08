// context/PortfolioContext.tsx
import React, { createContext, useEffect, useState, FC, ReactNode } from "react";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { IUserCoin, IPortfolio } from "../../models/IUser";
import { useAuth } from "store/context/AuthContext";

interface PortfolioContextProps {
  portfolio: IPortfolio;
  addPortfolioItem: ( coin: IUserCoin) => Promise<void>;
  salePortfolioItem: ( coin: IUserCoin) => Promise<void>;
  getPortfolioItem: (uuid: string) => number;
}

export const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: FC<PortfolioProviderProps> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<IPortfolio>({});
	const { currentUser } = useAuth();

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!currentUser) return;
      const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);
      try {
        const docSnap = await getDoc(dbCoins);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPortfolio(data?.portfolio ?? {});
        }
      } catch (e) {
        console.error("Error fetching portfolio document: ", e);
      }
    };

    fetchPortfolio();
  }, [currentUser]);

  const addPortfolioItem = async (coin: IUserCoin) => {
    if (!currentUser) return;

    const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);
    try {
      const docSnap = await getDoc(dbCoins);
      let newValue: number | undefined = undefined;

      if (docSnap.exists()) {
        const data = docSnap.data();
        const oldValue = data?.portfolio?.[coin.name] ?? 0;
        newValue = Number(oldValue) + Number(coin.value);
        await updateDoc(dbCoins, {
          [`portfolio.${coin.name}`]: newValue
        });
      } else {
        newValue = Number(coin.value);
        await setDoc(dbCoins, {
          portfolio: {
            [coin.name]: newValue
          }
        });
      }

      setPortfolio((prevPortfolio) => ({
        ...prevPortfolio,
        [coin.name]: newValue as number,
      }));
    } catch (e) {
      console.error("Error updating portfolio document: ", e);
    }
  };

  const salePortfolioItem = async (coin: IUserCoin) => {
    if (!currentUser) return;

    const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);
    try {
      const docSnap = await getDoc(dbCoins);
      let newValue: number | undefined = undefined;

      if (docSnap.exists()) {
        const data = docSnap.data();
        const oldValue = data?.portfolio?.[coin.name] ?? 0;
        if (Number(coin.value) > oldValue) return;

        newValue = Number(oldValue) - Number(coin.value);
        await updateDoc(dbCoins, {
          [`portfolio.${coin.name}`]: newValue
        });
      }

      if(newValue) {
        setPortfolio((prevPortfolio) => ({
          ...prevPortfolio,
          [coin.name]: newValue as number,
        }));
      }
    } catch (e) {
      console.error("Error updating portfolio document: ", e);
    }
  };

	const getPortfolioItem = (uuid:string) => {
		if (!currentUser) return 0;

		const targetCoin = portfolio.hasOwnProperty(uuid) ? portfolio[uuid] : 0;
		
		return targetCoin;
	}

  const value = { portfolio, addPortfolioItem, salePortfolioItem, getPortfolioItem };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
