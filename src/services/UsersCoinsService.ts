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
			if (data?.portfolio) {
				await updateDoc(dbCoins, {
					[`portfolio.${coin.name}`]: coin.value
				});
			} else {
				await updateDoc(dbCoins, {
					portfolio: {
						[coin.name]: coin.value
					}
				});
			}
		} else {
			await setDoc(dbCoins, {
				portfolio: {
					[coin.name]: coin.value
				}
			});
			console.log("Document successfully created with portfolio!");
		}
	} catch (e) {
		console.error("Error writing or fetching document: ", e);
	}
};