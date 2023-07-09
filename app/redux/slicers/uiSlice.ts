import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface UIState {
  tabbarVisible: boolean;
  animation: boolean;
}

const initialState: UIState = {
  tabbarVisible: true,
  animation: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    hideTabbar: (state, action) => {
      state.tabbarVisible = !action.payload;
    },
    toggleAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});

export const tabbarVisible = (state: RootState) => state.ui.tabbarVisible;

export const {hideTabbar, toggleAnimation} = uiSlice.actions;

export default uiSlice.reducer;
