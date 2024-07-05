import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialStateUser {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IInitialStateUser = {
  email: null,
  token: null,
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialStateUser>) => {
      /* eslint-disable no-param-reassign */
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    }
    /* elsint-enable no-param-reassign */
  }
});

const { reducer, actions } = userSlice;

export default reducer;

export const { setUser, removeUser } = actions;
