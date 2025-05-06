import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialStateUser {
  email: string | null;
  schedule_id: string | null;
  role: 'admin' | 'teacher' | null;
  name: string | null;
  post: string | null;
  // token: string | null;
  id: string | null;
}

const initialState: IInitialStateUser = {
  email: null,
  schedule_id: null,
  role: null,
  name: null,
  post: null,
  // token: null,
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialStateUser>) => {
      /* eslint-disable no-param-reassign */
      state.email = action.payload.email;
      // state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.post = action.payload.post;
      state.schedule_id = action.payload.schedule_id;
      state.role = action.payload.role;
    },
    removeUser: (state) => {
      state.email = null;
      state.name = null;
      state.role = null;
      state.schedule_id = null;
      state.post = null;
      // state.token = null;
      state.id = null;
    }
    /* elsint-enable no-param-reassign */
  }
});

const { reducer, actions } = userSlice;

export default reducer;

export const { setUser, removeUser } = actions;
