import { NavLink } from 'react-router-dom';
import s from './PanelUser.module.scss';

const PanelUser = () => {
	return (
		<div className={s.PanelUser}>
			<NavLink 
				className='link primary small'
				to={'/profile'}
			>
					<span>REGISTER</span>
			</NavLink>
			<NavLink 
				className='link success small'
				to={'/profile'}
			>
					<span>LOGIN</span>
			</NavLink>	
		</div>
	)
}

export default PanelUser;