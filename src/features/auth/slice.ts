import { createSlice } from "@reduxjs/toolkit";
import { loadState } from '../../utils';

const USERNAME_KEY = 'username';

const initialState = {
  username: loadState(USERNAME_KEY)
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default slice.reducer;
