import { NavLink } from 'react-router-dom';
import MyLogo from '../UI/MyLogo/MyLogo';
import { menu } from '../../data/asideMenu';

import s from './HeaderNav.module.scss';

const HeaderNav = () => {
	const items = menu;

	return (
		<nav className={`${s.HeaderNav} header panel_section mobile_only`}>
			<div className={`${s.Content} content`}>
				<MyLogo compact={true}/>
				<div className={`actions_wrap ${s.Menu}`}>
					{
						items.map( item => 
							<NavLink 
							className={({ isActive }) =>
								[
									'button primary compact',
									isActive ? 'active' : "border"
								].join(" ")
							}	 
								to={item.url} key={item.title}
							>
								<div className={`${s.Icon} icon`}><item.icon /></div>
							</NavLink>	
						)
					}
				</div>
			</div>
		</nav>
	)
}

export default HeaderNav;