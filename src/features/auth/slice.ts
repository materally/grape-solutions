import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from '../../utils';

const USERNAME_KEY = 'username';

const initialState = {
  username: loadState(USERNAME_KEY)
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.username = action.payload;
      saveState(USERNAME_KEY, action.payload);
    },
    logout(state) {
      saveState(USERNAME_KEY, undefined);
      state.username = undefined;
    }
  },
});

export const { saveUser, logout } = slice.actions;

export default slice.reducer;
