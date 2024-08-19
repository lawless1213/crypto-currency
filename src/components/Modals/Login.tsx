import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (email:string, password:string) => {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				navigate('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	return (
		<section className={`panel_section middle_section`}>
			<div className="header">
				<div className="section_title t-h2">LOGIN</div>
			</div>
			<div className="content">
				<Form
					title="LOGIN"
					handleClick={handleLogin}
				/>
			</div>
		</section>
	)
}

export default Login;