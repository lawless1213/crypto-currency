import React, { createContext, FC, useContext, useEffect, useState, ReactNode } from "react";
import { User } from "firebase/auth";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";
import { IUserCoin, IPortfolio } from "../../models/IUser";

interface PortfolioContextProps {
  portfolio: IPortfolio;
  fetchPortfolio: (currentUser: User | null) => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: FC<PortfolioProviderProps> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<IPortfolio>({});

  const fetchPortfolio = async (currentUser: User | null) => {
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

	const addPortfolioItem = async (currentUser: User | null, coin: IUserCoin) => {
		if (!currentUser) return;
		const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);
	
		try {
			const docSnap = await getDoc(dbCoins);
			let newValue:number;

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
	
			setPortfolio(prevPortfolio => ({
				...prevPortfolio,
				[coin.name]: newValue,
			}));
		} catch (e) {
			console.error("Error updating portfolio document: ", e);
		}
	};

  const value = { portfolio, fetchPortfolio, addPortfolioItem };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
