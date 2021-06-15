import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

const store = configureStore({
  reducer: {
    usersSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
