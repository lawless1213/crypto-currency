import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/reducers/settingsSlice';
import { useAppSelector } from '../../hooks/redux';
import { icons } from 'components/Icons';

import s from './ThemeToggler.module.scss';

interface ThemeTogglerProps {
	width?: string;
}

const ThemeToggler = ({width}: ThemeTogglerProps) => {
	const dispatch = useDispatch();
	let { themeMode } = useAppSelector(state => state.SettingsReducer);
	const style = { "--custom-toggler-width": width } as React.CSSProperties;

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

	return(
		<button className={`${s.TogglerTheme} ${themeMode === 'dark' ? s.DarkMode : ''}`} style={style} onClick={toggleThemeHandler}>
			<div className ={s.Indicator}>
			{ themeMode === 'dark' ? icons.THEME_DARK : icons.THEME_LIGHT }
			</div>
		</button>
	)
}

export default ThemeToggler;