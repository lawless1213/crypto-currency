import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { toggleAsideMode } from '../../store/reducers/settingsSlice';
import { AsideModes } from '../../models/IAside';
import { menu } from '../../data/asideMenu';
import MyLogo from '../UI/MyLogo/MyLogo';
import MyButton from '../UI/MyButton';
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";


import s from './Aside.module.scss'

const Aside = () => {
	const dispatch = useDispatch();
	const items = menu;

	let { asideMode } = useAppSelector(state => state.SettingsReducer);
	const toggleAsideHandler = () => {
    dispatch(toggleAsideMode());
  };
	
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
					<MyButton onClick={toggleAsideHandler} classes={`${s.Item} button primary big border`} icon={asideMode === AsideModes.FULL_MODE  ? <RiMenuFoldLine /> : <RiMenuUnfoldLine/>}/>
				</div>
			</div>
		</aside>
	)
}

export default Aside;