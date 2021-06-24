import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isLoadingUser: false,
    currentUser: null,
    selectedAppointmentDetails: {
      locationName: '',
      locationAddress: '',
      locationPhoneNumber: '',
      appointmentDate: '',
      appointmentTime: '',
    },
    newUserPersonalInfo: {
      firstName: '',
      secondName: '',
      dateOfBirth: '',
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

    setSelectedAppointmentLocation: (state, { payload }) => {
      state.selectedAppointmentDetails.locationName = payload.locationName;
      state.selectedAppointmentDetails.locationAddress =
        payload.locationAddress;
      state.selectedAppointmentDetails.locationPhoneNumber =
        payload.locationPhoneNumber;
    },

    setSelectedAppointmentDateAndTime: (state, { payload }) => {
      state.selectedAppointmentDetails.appointmentDate =
        payload.appointmentDate;
      state.selectedAppointmentDetails.appointmentTime =
        payload.appointmentTime;
    },

    setNewUserPersonalInfo: (state, { payload }) => {
      state.newUserPersonalInfo.firstName = payload.firstName;
      state.newUserPersonalInfo.secondName = payload.secondName;
      state.newUserPersonalInfo.dateOfBirth = payload.dateOfBirth;
    },
    resetAllAppointmentDetails: (state) => {
      return {
        ...state,
        selectedAppointmentDetails: {
          locationName: '',
          locationAddress: '',
          locationPhoneNumber: '',
          appointmentDate: '',
          appointmentTime: '',
        },
        newUserPersonalInfo: {
          firstName: '',
          secondName: '',
          dateOfBirth: '',
        },
      };
    },
  },
});

export const {
  setIsLoading,
  setCurrentUser,
  setIsLoadingUser,
  setSelectedAppointmentLocation,
  setSelectedAppointmentDateAndTime,
  setNewUserPersonalInfo,
  resetAllAppointmentDetails,
} = usersSlice.actions;

export default usersSlice.reducer;

// setSelectedAppointmentDetails: (state, { payload }) => {
//   state.selectedAppointmentDetails.locationName = payload.locationName;
//   state.selectedAppointmentDetails.locationAddress =
//     payload.locationAddress;
//   state.selectedAppointmentDetails.locationPhoneNumber =
//     payload.locationPhoneNumber;
//   state.selectedAppointmentDetails.appointmentDate =
//     payload.appointmentDate;
//   state.selectedAppointmentDetails.appointmentTime =
//     payload.appointmentTime;
// },

// setSelectedAppointmentDetails: (state, { payload }) => {
//   return {
//     locationName: payload.locationName,
//     locationAddress: payload.locationAddress,
//     locationPhoneNumber: payload.locationPhoneNumber,
//     appointmentDate: payload.appointmentDate,
//     appointmentTime: payload.appointmentTime,
//   };
// },
