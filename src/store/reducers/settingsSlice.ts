import { createSlice} from "@reduxjs/toolkit";

enum ThemeModes {
	DARK_MODE = 'dark',
	LIGHT_MODE = 'light'
}

const THEME_MODE_KEY: string = 'themeMode';

function getStorageTheme(): ThemeModes.DARK_MODE | ThemeModes.LIGHT_MODE | null {
  const mode: string | null = localStorage.getItem(THEME_MODE_KEY);
  return mode ? JSON.parse(mode) : null;
}

const initialState = {
	themeMode: getStorageTheme() || ThemeModes.DARK_MODE,
	shortAsideMode: true,
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
	}
})

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;

