import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "store/reducers/userSlice";
// import { useAppDispatch } from "hooks/redux";

const SignUp = () => {
	// const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleRegister = (email:string, password:string) => {
		const auth = getAuth();

		createUserWithEmailAndPassword (auth, email, password)
			.then(({user}) => {
				// dispatch(setUser({
					// email: user.email,
					// token: user.refreshToken,
					// id: user.uid,
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
				title="register"
				handleClick={handleRegister}
			/>
		</div>
	)
}

export default SignUp;