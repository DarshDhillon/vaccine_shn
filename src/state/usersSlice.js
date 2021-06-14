import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from '../firebase';

export const createNewUserAsync = createAsyncThunk(
  'users/createNewUserAsync',
  async ({ email, password }) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }
);

export const logoutCurrentUserAsync = createAsyncThunk(
  'users/logoutCurrentUserAsync',
  async () => {
    try {
      await firebaseAuth.signOut();
    } catch (e) {
      console.log(e);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  'users/loginUserAsync',
  async ({ email, password }) => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: true,
    currentUserUid: '',
  },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setCurrentUserUid: (state, { payload }) => {
      state.currentUserUid = payload;
    },
  },
});

export const { setIsLoading, setCurrentUserUid } = usersSlice.actions;

export default usersSlice.reducer;
