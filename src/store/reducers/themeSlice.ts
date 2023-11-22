import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
	mode: getStorageTheme() || ThemeModes.DARK_MODE,
}

export const themeSlice = createSlice({
	name: 'themeMode',
	initialState,
	reducers: {
		toggleTheme(state) {
			let newTheme = state.mode === ThemeModes.LIGHT_MODE ? ThemeModes.DARK_MODE : ThemeModes.LIGHT_MODE;
			localStorage.setItem(THEME_MODE_KEY, JSON.stringify(newTheme));

			return {...state, mode: newTheme}
		},
	}
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

