import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isLoadingUser: false,
    currentUser: null,
  },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setIsLoadingUser: (state, { payload }) => {
      state.isLoadingUser = payload;
    },
  },
});

export const { setIsLoading, setCurrentUser, setIsLoadingUser } =
  usersSlice.actions;

export default usersSlice.reducer;
