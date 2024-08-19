import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { Form } from "./Form";

const SignUp = () => {
	const navigate = useNavigate();

	const handleRegister = (email:string, password:string) => {
		const auth = getAuth();

		createUserWithEmailAndPassword (auth, email, password)
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
				<div className="section_title t-h2">REGISTER</div>
			</div>
			<div className="content">
				<Form
					title="REGISTER"
					handleClick={handleRegister}
				/>
			</div>
		</section>
	)
}

export default SignUp;