import { useAuth } from 'store/context/AuthContext';
import { NavLink } from 'react-router-dom';
import MyButton from '../UI/MyButton';
import { handleSignOut } from '../../services/AuthService';

import s from './PanelUser.module.scss';

const PanelUser = () => {
	const { currentUser } = useAuth();

	if (currentUser) {
		return (
			<div className={s.PanelUser}>
				<NavLink 
					className='link success'
					to={'/profile'}
				>
						<span>{currentUser.email}</span>
				</NavLink>
				<MyButton onclick={handleSignOut} classes='primary border' text='LOGOUT'/>
			</div>
		)
	} else {
		return (
			<div className={s.PanelUser}>
				<NavLink 
					className='link primary small'
					to={'/register'}
				>
						<span>REGISTER</span>
				</NavLink>
				<NavLink 
					className='link success small'
					to={'/login'}
				>
						<span>LOGIN</span>
				</NavLink>	
			</div>
		)
	}

	
}

export default PanelUser;