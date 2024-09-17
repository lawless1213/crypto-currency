import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyButton from '../../UI/MyButton';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
          onclick={() => handleLogin(email, pass)}
        />
      </div>
		</div>
	)
}

export default Login;