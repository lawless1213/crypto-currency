import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { useModalServices } from '../../services/ModalServices'
import { ModalView } from 'models/IModals';
import { toggleAsideMode } from '../../store/reducers/settingsSlice';
import { AsideModes } from '../../models/IAside';
import { menu } from '../../data/asideMenu';
import MyLogo from '../UI/MyLogo/MyLogo';
import MyButton from '../UI/MyButton';
import { icons } from 'components/Icons';

import s from './Aside.module.scss'

const Aside = () => {
	const { openModalHandler } = useModalServices();
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
					<MyButton onClick={() => openModalHandler(ModalView.SIGNUP)} classes={`${s.Item} button success big border jc_left`} icon={icons.WALLET} text={asideMode === AsideModes.FULL_MODE ? 'Deposit' : undefined}/>
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
								<div className={`${s.Icon} icon`}>{ item.icon }</div>
								{
									asideMode === AsideModes.FULL_MODE && <div className={`caption t-body`}>{item.title}</div>
								}
							</NavLink>	
						)
					}
					<MyButton onClick={toggleAsideHandler} classes={`${s.Item} button primary big border`} icon={asideMode === AsideModes.FULL_MODE  ? icons.MENU_HIDE : icons.MENU_OPEN}/>
				</div>
			</div>
		</aside>
	)
}

export default Aside;