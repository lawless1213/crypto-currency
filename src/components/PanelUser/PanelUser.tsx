import { useAuth } from 'store/context/AuthContext';
import { NavLink } from 'react-router-dom';
import MyButton from '../UI/MyButton';
import { handleSignOut } from '../../services/AuthService';
import { useModalServices } from '../../services/ModalServices'
import { ModalView } from 'models/IModals';

import s from './PanelUser.module.scss';

const PanelUser = () => {
	const { openSignUpModal } = useModalServices();
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
				<MyButton onclick={() => openSignUpModal(ModalView.SIGNUP)} classes='success border' text='SIGNUP'/>
				<MyButton onclick={() => openSignUpModal(ModalView.SIGNIN)} classes='primary border' text='SIGNIN'/>
			</div>
		)
	}

	
}

export default PanelUser;