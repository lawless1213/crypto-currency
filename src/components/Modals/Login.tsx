import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "store/reducers/userSlice";
import { useAppDispatch } from "hooks/redux";

const Login = () => {
	// const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogin = (email:string, password:string) => {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				// console.log(user);
				// dispatch(setUser({
				// 	email: user.email,
				// 	token: user.refreshToken,
				// 	id: user.uid,
				// }))
				navigate('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	return (
		<div>
			<Form
				title="sign_in"
				handleClick={handleLogin}
			/>
		</div>
	)
}

export default Login;