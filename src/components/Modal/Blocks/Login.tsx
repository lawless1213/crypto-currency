import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/FormComponents/MyInput';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface LoginInteface {
  email: string,
  password: string,
}

const schema = yup.object().shape({
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

const Login = () => {
  const { control, register, handleSubmit, formState: { errors, isValid } } = useForm<LoginInteface>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {}
  })

  const submit: SubmitHandler<LoginInteface> = data => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
			.then(({user}) => {
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
  }

	return (
		<form onSubmit={handleSubmit(submit)} noValidate autoComplete='off'>

      <Controller
        name = 'email'
        control={control}
        render={
          ({field}) => <MyInput 
            {...field}
            name = 'email'
            type="email"
            label = 'Email'
            required = {true}
            error = { errors.email?.message }
            success={!errors.email && !!field.value}
          />
        }
      />

      <Controller
        name = 'password'
        control={control}
        render={
          ({field}) => <MyInput 
            {...field}
            name = 'password'
            type="password"
            label = 'Password'
            required = {true}
            error = { errors.password?.message }
            template = 'password' 
            success = {!errors.password && !!field.value}
          />
        }
      />

      
      <div className="actions_wrap center">
        <MyButton 
          classes={`primary border wide ${!isValid && 'disabled'}`}
          text='LOGIN'
        />
      </div>
		</form>
	)
}

export default Login;