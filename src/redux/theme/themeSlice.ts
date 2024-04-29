import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system';

const initialState = {
  name: 'user slice',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
