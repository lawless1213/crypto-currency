// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import MyButton from '../../UI/MyButton';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface MyForm {
  email: string,
  password: string,
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MyForm>({
    defaultValues: {}
  })

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data);
  }

  const error: SubmitErrorHandler<MyForm> = data => {
    console.log(data);
  }

	// const navigate = useNavigate();

	// const handleLogin = (email:string, password:string) => {
	// 	const auth = getAuth();

	// 	signInWithEmailAndPassword(auth, email, password)
	// 		.then(({user}) => {
	// 			navigate('/');
	// 		})
	// 		.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 		});
	// }

	return (
		<form onSubmit={handleSubmit(submit, error)} noValidate autoComplete='off'>
			<input
        type="email"
        placeholder="email"
        {...register('email', {required: true, })}
        aria-invalid={errors.email ? true : false}
      />
      <input
        type="password"
        placeholder="password"
        {...register('password', {required: true})}
        aria-invalid={errors.password ? true : false}
      />
      <div className="actions_wrap center">
        <MyButton 
          classes='primary rounded border'
          text='LOGIN'
        />
      </div>
		</form>
	)
}

export default Login;