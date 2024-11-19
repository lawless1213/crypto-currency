import { getAuth, signOut } from "firebase/auth";
import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    .matches(emailRegex, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required field')
    .min(6, 'Password min 6 symbols')
    .max(20, 'Password max 20 symbols'),
})

const schemaSignUp = yup.object().shape({
  email: yup
    .string()
    .required('Email is required field')
    .matches(emailRegex, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required field')
    .min(6, 'Password min 6 symbols')
    .max(20, 'Password max 20 symbols'),
  retypePassword: yup
    .string()
    .required('Password is required field')
    .min(6, 'Password min 6 symbols')
    .max(20, 'Password max 20 symbols')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')

})

export { schemaLogin, schemaSignUp };