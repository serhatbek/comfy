import { applyTheme } from '@/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system';

const initialTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'system';
  applyTheme(theme);
  return theme;
};

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: initialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem('theme', action.payload);
    },
  },
});

export default themeSlice.reducer;
