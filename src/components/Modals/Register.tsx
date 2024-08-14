import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

import MyButton from '../UI/MyButton';

import { UserRegisterParams } from '../../models/IAPIUser';
import  { fetchRegister }  from '../../store/reducers/userSlice';



const RegisterBlock = () => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>();

	const newUser:UserRegisterParams = {
		"email": "test2@test.ua",
		"password": "12345",
		"fullName": "Андрій"
	}

	const register = (user:UserRegisterParams) => {
    dispatch(fetchRegister(user));
  };

	return (
		<form action="">
			<MyButton 
				classes='primary rounded border small'
				text='REGISTER'
				onclick={() => register(newUser)}
			/>
		</form>
	)
}

export default RegisterBlock;