import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { toggleAsideMode } from '../../store/reducers/settingsSlice';
import { AsideModes } from '../../models/IAside';

import MyButton from '../UI/MyButton';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import PanelUser from '../PanelUser/PanelUser';

import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import s from './Header.module.scss';

const Header = () => {
	const dispatch = useDispatch();
	let { asideMode } = useAppSelector(state => state.SettingsReducer);

	const toggleAsideHandler = () => {
    dispatch(toggleAsideMode());
  };

	return (
		<header className={`${s.Header} header panel_section`}>
			<div className={`${s.Content} content`}>
				<MyButton onclick={toggleAsideHandler} classes='border compact' icon={asideMode === AsideModes.FULL_MODE  ? <RiMenuFoldLine /> : <RiMenuUnfoldLine/>}/>
				<div className="space" style={{flex: 1}}></div>
				<ThemeToggler width="60px"/>
				<PanelUser/>
			</div>
		</header>
	)
}

export default Header;