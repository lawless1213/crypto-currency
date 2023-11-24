import { NavLink } from 'react-router-dom';
import { menu } from '../../data/asideMenu';

import s from './Aside.module.scss'

const Aside = () => {
	const items = menu;
	
	return (
		<div className={`${s.Aside} panel_section`}>
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
								<div className="icon"><item.icon /></div>
								<div className={`${s.Caption} t-body`}>{item.title}</div>
							</NavLink>	
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Aside;