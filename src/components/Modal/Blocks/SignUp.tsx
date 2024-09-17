import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { useState } from 'react';
import MyButton from '../../UI/MyButton';
import { useModalServices } from '../../../services/ModalServices'
import { ModalView } from 'models/IModals';


const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const { openSignUpModal } = useModalServices();

	const handleRegister = (email:string, password:string) => {
		// const auth = getAuth();
		openSignUpModal(ModalView.SUCCESS);

		// createUserWithEmailAndPassword (auth, email, password)
		// 	.then(({user}) => {
		// 		navigate('/');
		// 		openSignUpModal(ModalView.SUCCESS);
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 	});
	}

	return (
		<div>
			<input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <div className="actions_wrap center">
        <MyButton 
          classes='primary rounded border'
          text='Submit'
          onclick={() => handleRegister(email, pass)}
        />
      </div>
		</div>
	)
}

export default SignUp;