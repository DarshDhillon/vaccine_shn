import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isLoadingUser: false,
    currentUser: null,
    selectedAppointmentLocation: {
      locationName: '',
      locationAddress: '',
      locationPhoneNumber: '',
    },
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
    setSelectedAppointmentDetails: (state, { payload }) => {
      state.selectedAppointmentLocation.locationName = payload.locationName;
      state.selectedAppointmentLocation.locationAddress =
        payload.locationAddress;
      state.selectedAppointmentLocation.locationPhoneNumber =
        payload.locationPhoneNumber;
    },
  },
});

export const {
  setIsLoading,
  setCurrentUser,
  setIsLoadingUser,
  setSelectedAppointmentDetails,
} = usersSlice.actions;

export default usersSlice.reducer;
