import { getAuth, signOut } from "firebase/auth";
import * as yup from 'yup';

export const handleSignOut = () => {
	const auth = getAuth();

	signOut(auth).catch((error) => {
		console.error("An error happened during sign-out:", error);
	});
};

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email is required field')
    .email(),
  password: yup
    .string()
    .required('Password is required field')
    .min(6, 'Password min 6 symbols')
    .max(20, 'Password max 20 symbols'),
})

export { schemaLogin };