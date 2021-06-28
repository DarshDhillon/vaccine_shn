import { useState } from 'react';
import styled from 'styled-components';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAppointmentDateAndTime } from '../state/usersSlice';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const DateAndTimePicker = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const chosenAppointmentLocationName = useSelector(
    (state) => state.usersSlice.selectedAppointmentDetails.locationName
  );

  const handleSaveDateAndTime = () => {
    if (!chosenAppointmentLocationName) {
      return alert('You must choose a locaton first');
    }

    dispatch(
      setSelectedAppointmentDateAndTime({
        appointmentDate: moment(day).format('DD/MM/YYYY'),
        appointmentTime: moment(time).format('hh:mm A'),
      })
    );
    history.push('/create-appointment/confirmation');
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateAndTimeContainer>
        <DateAndTimeWrapper>
          <DateAndTimeSection>
            <StepIconWrapper>
              <StepIcon>3</StepIcon>
            </StepIconWrapper>
            <SubHeading $lighter>
              1. Choose a date for your appointment
            </SubHeading>
            <DatePicker
              style={{
                width: '40%',
                marginBottom: '2rem',
                fontWeight: 'bolder',
              }}
              //   openTo='month'
              format='dd/MM/yyyy'
              disablePast={true}
              onChange={(newValue) => setDay(newValue)}
              value={day}
            />
            <SubHeading $lighter>
              2. Choose the time of your appointment
            </SubHeading>
            <TimePicker
              style={{ width: '40%', marginBottom: '2rem' }}
              value={time}
              onChange={(newTime) => setTime(newTime)}
            />
            <ButtonWrapper>
              <SaveButton onClick={handleSaveDateAndTime}>SAVE</SaveButton>
            </ButtonWrapper>
          </DateAndTimeSection>
        </DateAndTimeWrapper>
      </DateAndTimeContainer>
    </MuiPickersUtilsProvider>
  );
};

export default DateAndTimePicker;

const DateAndTimeContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 2rem 1rem;
`;

const DateAndTimeWrapper = styled.div`
  border: 1px solid blue;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const StepIconWrapper = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const StepIcon = styled.h1`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  background: #005eb8;
  color: #fff;
  border-radius: 50%;
`;

const DateAndTimeSection = styled.div`
  padding: 0rem 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 0.5rem;
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
  width: 40%;
  /* justify-content: flex-end; */
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const SaveButton = styled.button`
  background-color: #007f3b;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #00401e;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0;
  padding: 1rem 1.5rem;
  text-align: center;
  vertical-align: top;
  width: auto;
  text-decoration: none;

  :hover {
    background-color: #046933;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
