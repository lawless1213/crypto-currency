import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "store/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const handleSignOut = () => {
	const navigate = useNavigate();
	const auth = getAuth();

	signOut(auth).then(() => {
		removeUser();
		navigate('/');
	}).catch((error) => {
		console.error("An error happened during sign-out:", error);
	});
};

export default { handleSignOut }