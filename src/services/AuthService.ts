import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "store/reducers/userSlice";

export const handleSignOut = () => {
	const auth = getAuth();

	signOut(auth).then(() => {
		removeUser();
	}).catch((error) => {
		console.error("An error happened during sign-out:", error);
	});
};