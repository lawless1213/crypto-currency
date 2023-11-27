import { createSlice} from "@reduxjs/toolkit";
import { ThemeModes, THEME_MODE_KEY } from "../../models/IThemeMode";
import { AsideModes } from "../../models/IAside";


function getStorageTheme(): ThemeModes.DARK_MODE | ThemeModes.LIGHT_MODE | null {
  const mode: string | null = localStorage.getItem(THEME_MODE_KEY);
  return mode ? JSON.parse(mode) : null;
}

const initialState = {
	themeMode: getStorageTheme() || ThemeModes.DARK_MODE,
	asideMode: AsideModes.FULL_MODE,
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleTheme(state) {
			let newTheme = state.themeMode === ThemeModes.LIGHT_MODE ? ThemeModes.DARK_MODE : ThemeModes.LIGHT_MODE;
			localStorage.setItem(THEME_MODE_KEY, JSON.stringify(newTheme));

			return {...state, themeMode: newTheme}
		},
		toggleAsideMode(state) {
			const newAsideMode = state.asideMode === AsideModes.FULL_MODE ? AsideModes.SMALL_MODE : AsideModes.FULL_MODE;

			return {...state, asideMode: newAsideMode}
		},
	}
})

export const { toggleTheme, toggleAsideMode } = settingsSlice.actions;
export default settingsSlice.reducer;

