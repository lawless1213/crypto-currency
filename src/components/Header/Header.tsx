import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../store';
import { useAppSelector } from '../../hooks/redux';
import { toggleAsideMode } from '../../store/reducers/settingsSlice';
// import  { fetchRegister }  from '../../store/reducers/userSlice';
import { AsideModes } from '../../models/IAside';

import MyButton from '../UI/MyButton';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import PanelUser from '../PanelUser/PanelUser';

import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import s from './Header.module.scss';
import { UserRegisterParams } from '../../models/IAPIUser';

const Header = () => {
	// const dispatch = useDispatch<AppDispatch>();
	const dispatch = useDispatch();
	let { asideMode } = useAppSelector(state => state.SettingsReducer);
	// let { user } = useAppSelector(state => state.UserReducer);

	const newUser:UserRegisterParams = {
		"email": "test@test.ua",
		"password": "12345",
		"fullName": "Андрій"
	}

	// const register = (newUser: UserRegisterParams) => {
  //   dispatch(fetchRegister(newUser));
  // };

	const toggleAsideHandler = () => {
    dispatch(toggleAsideMode());
  };

	return (
		<header className={`${s.Header} header panel_section`}>
			<div className={`${s.Content} content`}>
				<MyButton onclick={toggleAsideHandler} classes='primary transparent compact desktop_only' icon={asideMode === AsideModes.FULL_MODE  ? <RiMenuFoldLine /> : <RiMenuUnfoldLine/>}/>
				<div className="space" style={{flex: 1}}></div>
				<ThemeToggler width="60px"/>
				{/* <MyButton onclick={register} classes='primary' text='register'/> */}
				<PanelUser/>
			</div>
		</header>
	)
}

export default Header;