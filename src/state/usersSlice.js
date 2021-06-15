import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from '../firebase';

export const createNewUserAsync = createAsyncThunk(
  'users/createNewUserAsync',
  async ({ email, password }) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e);
    }
  }
);

export const logoutCurrentUserAsync = createAsyncThunk(
  'users/logoutCurrentUserAsync',
  async () => {
    try {
      await firebaseAuth.signOut();
    } catch (e) {
      console.error(e);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  'users/loginUserAsync',
  async ({ email, password }) => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e);
    }
  }
);

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

  extraReducers: {
    [loginUserAsync.pending]: (state) => {
      state.isLoadingUser = true;
    },
    [loginUserAsync.fulfilled]: (state) => {
      state.isLoadingUser = false;
    },
    [createNewUserAsync.pending]: (state) => {
      state.isLoadingUser = true;
    },
    [createNewUserAsync.fulfilled]: (state) => {
      state.isLoadingUser = false;
    },
  },
});

export const { setIsLoading, setCurrentUser, setIsLoadingUser } =
  usersSlice.actions;

export default usersSlice.reducer;
