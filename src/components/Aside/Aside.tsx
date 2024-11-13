import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AsideModes } from '../../models/IAside';
import { menu } from '../../data/asideMenu';
import MyLogo from '../UI/MyLogo/MyLogo';

import s from './Aside.module.scss'

const Aside = () => {
	const items = menu;
	let { asideMode } = useAppSelector(state => state.SettingsReducer);
	
	
	return (
		<aside className={`${s.Aside} ${s[asideMode] ?? ''} aside panel_section desktop_only`}>
			<div className="header">
				<MyLogo compact={asideMode === AsideModes.SMALL_MODE}/>
			</div>
			<div className="content">
				<div className={s.Menu}>
					{
						items.map( item => 
							<NavLink 
								className={({ isActive }) =>
									[
										s.Item,
										'button primary big jc_left',
										isActive ? 'active' : "border"
									].join(" ")
								}	 
								to={item.url} key={item.title}
							>
								<div className={`${s.Icon} icon`}><item.icon /></div>
								{
									asideMode === AsideModes.FULL_MODE && <div className={`${s.Caption} t-body`}>{item.title}</div>
								}
							</NavLink>	
						)
					}
				</div>
			</div>
		</aside>
	)
}

export default Aside;