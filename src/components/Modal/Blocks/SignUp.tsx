import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/FormComponents/MyInput';
import { useModalServices } from '../../../services/ModalServices'
import { ModalView } from 'models/IModals';

interface SignUpInteface {
  email: string,
  password: string,
  retypePassword: string,
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
  retypePassword: yup
    .string()
    .required('Password is required field')
    .min(6, 'Password min 6 symbols')
    .max(20, 'Password max 20 symbols')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')

})

const SignUp = () => {
	const { openModalHandler } = useModalServices();
	const { control, register, handleSubmit, formState: { errors, isValid } } = useForm<SignUpInteface>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {}
  })

	const submit: SubmitHandler<SignUpInteface> = data => {
    const auth = getAuth();

    createUserWithEmailAndPassword (auth, data.email, data.password)
			.then(({user}) => {
				openModalHandler(ModalView.SUCCESS);
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
          />
        }
      />

      <Controller
        name = 'retypePassword'
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
          />
        }
      />

      <Controller
        name = 'password'
        control={control}
        render={
          ({field}) => <MyInput 
            {...field}
            name = 'retypePassword'
            type="password"
            label = 'retypePassword'
            required = {true}
            error = { errors.retypePassword?.message }
            template = 'password' 
          />
        }
      />

      
      <div className="actions_wrap center">
        <MyButton 
          classes={`primary border wide ${!isValid && 'disabled'}`}
          text='REGISTER'
        />
      </div>
		</form>
	)
}

export default SignUp;