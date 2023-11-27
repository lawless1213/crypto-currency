import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AsideModes } from '../../models/IAside';
import { menu } from '../../data/asideMenu';

import s from './Aside.module.scss'

const Aside = () => {
	const items = menu;
	let { asideMode } = useAppSelector(state => state.SettingsReducer);
	
	return (
		<aside className={`${s.Aside} ${s[asideMode] ?? ''} aside panel_section`}>
			<div className="content">
				<div className={s.Menu}>
					{
						items.map( item => 
							<NavLink 
								className={({ isActive }) =>
									[
										s.Item,
										isActive ? s.Active : ""
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