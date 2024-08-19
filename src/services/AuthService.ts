import { getAuth, signOut } from "firebase/auth";

export const handleSignOut = () => {
	const auth = getAuth();

	signOut(auth).catch((error) => {
		console.error("An error happened during sign-out:", error);
	});
};