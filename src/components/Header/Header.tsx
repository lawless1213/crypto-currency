import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { toggleAsideMode } from '../../store/reducers/settingsSlice';
import { AsideModes } from '../../models/IAside';

import MyButton from '../UI/MyButton';
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import s from './Header.module.scss';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

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
				<ThemeToggler width="60px"/>
			</div>
		</header>
	)
}

export default Header;