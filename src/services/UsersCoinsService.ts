import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { IUserCoin } from "../models/IUser";
import { User } from "firebase/auth";

export const addCoinToPortfolio = async (coin: IUserCoin, currentUser: User | null) => {
	if (!currentUser) return;
	const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);

	try {
		const docSnap = await getDoc(dbCoins);

		if (docSnap.exists()) {
			const data = docSnap.data();

			const oldValue = data?.portfolio?.[coin.name] ?? 0;
			const newValue = Number(oldValue) + Number(coin.value);
			
			await updateDoc(dbCoins, {
				[`portfolio.${coin.name}`]: newValue
			});
		} else {
			await setDoc(dbCoins, {
				portfolio: {
					[coin.name]: Number(coin.value)
				}
			});
		}
	} catch (e) {
		console.error("Error writing or fetching document: ", e);
	}
};

export const getAllPortfolio = async (currentUser: User | null) => {
  if (!currentUser) return [];

  const dbCoins = doc(collection(db, "usersCoins"), currentUser.uid);

  try {
    const docSnap = await getDoc(dbCoins);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data?.portfolio ?? [];
    }
  } catch (e) {
    console.error("Error writing or fetching document: ", e);
  }

  return [];
};