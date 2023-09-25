import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';

type AuthorState = {
  author: User | null
};

const initialState: AuthorState = {
  author: null,
};

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        author: action.payload,
      };
    },
  },
});

export default authorSlice.reducer;
export const { setAuthor } = authorSlice.actions;