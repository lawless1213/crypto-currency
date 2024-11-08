import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/FormComponents/MyInput';

import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { useState } from 'react';
import MyBadge from 'components/UI/MyBadge';
import { schemaLogin as schema } from 'services/AuthService';
import { LoginInteface }  from '../../../models/IAuth';


const Login = () => {
  const [errorText, setErrorText] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginInteface>({
    mode: "onSubmit",
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
        let errorText;
      
        switch (errorCode) {
          case AuthErrorCodes.INVALID_PASSWORD:
            errorText = 'Invalid credentials';
            break;
          case AuthErrorCodes.INVALID_EMAIL:
            errorText = 'Invalid credentials';
            break;
            case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
            errorText = 'Invalid credentials';
            break;
          case AuthErrorCodes.USER_DELETED:
            errorText = 'User not found';
            break;
          default:
            errorText = 'Something went wrong';
            break;
        }

        setErrorText(errorText);
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
            onChange={(e) => {
              setErrorText(null); 
              field.onChange(e);
            }}
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
            onChange={(e) => {
              setErrorText(null); 
              field.onChange(e);
            }}
          />
        }
      />

      { errorText &&<MyBadge text={errorText} classes='danger transparent'/> }
      
      <div className="actions_wrap center">
        <MyButton 
          classes={`primary border wide`}
          text='LOGIN'
        />
      </div>
		</form>
	)
}

export default Login;