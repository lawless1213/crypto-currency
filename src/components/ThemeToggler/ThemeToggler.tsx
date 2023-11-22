import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/reducers/themeSlice';
import { useAppSelector } from '../../hooks/redux';
import { MdLightMode, MdDarkMode  } from "react-icons/md";
import s from './ThemeToggler.module.scss';

const ThemeToggler = () => {
	const dispatch = useDispatch();
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

	return(
		<button className={`${s.TogglerTheme} ${mode === 'dark' ? s.DarkMode : ''}`} onClick={toggleThemeHandler}>
			<div className ={s.Indicator}>
			{ mode === 'dark' ? <MdDarkMode className={s.Icon} /> : <MdLightMode className={s.Icon} />}
			</div>
		</button>
	)
}

export default ThemeToggler;