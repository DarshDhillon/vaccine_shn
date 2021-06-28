import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetAllAppointmentDetails } from '../state/usersSlice';
import { firebaseDatabase } from '../firebase';

const NewAppointmentConfirmation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  const { firstName, secondName, dateOfBirth } = useSelector(
    (state) => state.usersSlice.newUserPersonalInfo
  );

  const {
    locationName,
    locationAddress,
    locationPhoneNumber,
    appointmentDate,
    appointmentTime,
    appointmentReference,
  } = useSelector((state) => state.usersSlice.selectedAppointmentDetails);

  const handleStartAgain = () => {
    dispatch(resetAllAppointmentDetails());
    history.push('/create-appointment/personal-info');
  };

  const handleSaveAppointment = () => {
    firebaseDatabase.users.doc(currentUserUid).set({
      personalDetails: {
        firstName,
        secondName,
        dateOfBirth,
      },
      appointmentDetails: {
        locationName,
        locationAddress,
        appointmentDate,
        appointmentTime,
        locationPhoneNumber,
        appointmentReference: currentUserUid.substr(0, 7).toUpperCase(),
      },
    });
    history.push('/user-dashboard');
  };

  return (
    <ConfirmationContainer>
      <ConfirmationWrapper>
        <Heading>
          Your coronavirus (COVID-19) vaccination appointment details:
        </Heading>
        <AppointmentInfoWrapper>
          <SubHeadingSection>
            <Label>Name:</Label>
            <SubHeading>
              {firstName} {secondName}
            </SubHeading>
          </SubHeadingSection>
          <SubHeadingSection>
            <Label>Date of birth:</Label>
            <SubHeading>{dateOfBirth}</SubHeading>
          </SubHeadingSection>
          <SubHeadingSection>
            <Label>Location:</Label>
            <SubHeading $small>
              {locationName} {locationAddress}
            </SubHeading>
          </SubHeadingSection>
          <SubHeadingSection>
            <Label>Scheduled:</Label>
            <SubHeading>
              {appointmentDate} at {appointmentTime}
            </SubHeading>
          </SubHeadingSection>
        </AppointmentInfoWrapper>
        <ButtonWrapper>
          <Button onClick={handleSaveAppointment}>
            {appointmentReference ? 'AMEND APPOINTMENT' : 'BOOK APPOINTMENT'}
          </Button>
          <Button onClick={handleStartAgain} $secondary>
            START AGAIN
          </Button>
        </ButtonWrapper>
      </ConfirmationWrapper>
    </ConfirmationContainer>
  );
};

export default NewAppointmentConfirmation;

const ConfirmationContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #f0f4f5; */
`;

const ConfirmationWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const AppointmentInfoWrapper = styled.div``;

const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SubHeadingSection = styled.div`
  display: flex;
  padding: 0 1rem;
  /* margin-bottom: 2rem; */
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 1rem;
  font-size: ${({ $small }) => ($small ? '1.3rem' : '1.5rem')};
  text-transform: capitalize;
  /* margin-left: auto; */

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Label = styled.label`
  /* font-weight: bold; */
  font-size: 1.5rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;

  /* margin: 0 auto; */
`;

const Button = styled.button`
  background-color: ${({ $secondary }) => ($secondary ? '#4c6272' : '#007f3b')};
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: ${({ $secondary }) =>
    $secondary ? '0 4px 0 #263139' : ' 0 4px 0 #00401e'};
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
  margin: 0.5rem;

  :hover {
    background-color: ${({ $secondary }) =>
      $secondary ? '#223846' : '#046933'};
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
