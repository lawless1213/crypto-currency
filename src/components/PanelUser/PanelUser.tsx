import { user } from '../../data/user';
import { NavLink } from 'react-router-dom';
import s from './PanelUser.module.scss';

const PanelUser = () => {
	return (
		<div className={s.PanelUser}>
			<NavLink 
				className={({ isActive }) =>
					[
						'link primary',
						isActive ? 'active' : ""
					].join(" ")
				}	 
					to={'/profile'}
				>
					<span>{user.firstName} {user.lastName}</span>
				</NavLink>	
		</div>
	)
}

export default PanelUser;