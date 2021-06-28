import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseDatabase } from '../firebase';
import { setIsLoading } from '../state/usersSlice';
import { setRetrievedAppointmentDetails } from '../state/usersSlice';
import LoadingSpinnerBlue from '../assets/images/loading_spinner_blue.gif';
import CancelAppointmentModal from './CancelAppointmentModal';
import { Link } from 'react-router-dom';

// import { firestore } from '../firebase';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.usersSlice.isLoading);

  const [showCancelAppointmentModal, setShowCancelAppointmentModal] =
    useState(false);

  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  const selectedAppointmentDetails = useSelector(
    (state) => state.usersSlice.selectedAppointmentDetails
  );

  const newUserPersonalInfo = useSelector(
    (state) => state.usersSlice.newUserPersonalInfo
  );

  const getUserAppointmentDetails = () => {
    dispatch(setIsLoading(true));
    firebaseDatabase.users
      .doc(currentUserUid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(
            setRetrievedAppointmentDetails({
              appointmentDetails: { ...doc.data().appointmentDetails },
              personalDetails: { ...doc.data().personalDetails },
            })
          );
        } else {
          console.error('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });

    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    getUserAppointmentDetails();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerImage src={LoadingSpinnerBlue} alt='loading spinner' />
      ) : (
        <ConfirmationContainer>
          <ConfirmationWrapper>
            <Heading>Hi, {newUserPersonalInfo.firstName}</Heading>
            <SubHeading $lighter>
              Your coronavirus (COVID-19) vaccination appointment:
            </SubHeading>
            <AppointmentInfoWrapper>
              <SubHeadingSection>
                <Label>Location:</Label>
                <SubHeading>
                  {selectedAppointmentDetails.locationName}
                </SubHeading>
              </SubHeadingSection>
              <SubHeadingSection>
                <Label>Scheduled:</Label>
                <SubHeading>
                  {selectedAppointmentDetails.appointmentDate} at{' '}
                  {selectedAppointmentDetails.appointmentTime}
                </SubHeading>
              </SubHeadingSection>
              <SubHeadingSection>
                <Label>Appointment reference:</Label>
                <SubHeading>
                  {selectedAppointmentDetails.appointmentReference}
                </SubHeading>
              </SubHeadingSection>
            </AppointmentInfoWrapper>
            <ButtonWrapper>
              <Link to='/create-appointment/choose-location'>
                <Button>CHANGE APPOINTMENT</Button>
              </Link>
              <Button
                $secondary
                onClick={() => setShowCancelAppointmentModal((prev) => !prev)}
              >
                CANCEL APPOINTMENT
              </Button>
            </ButtonWrapper>
          </ConfirmationWrapper>
        </ConfirmationContainer>
      )}
      <CancelAppointmentModal
        showCancelAppointmentModal={showCancelAppointmentModal}
        setShowCancelAppointmentModal={setShowCancelAppointmentModal}
      />
    </>
  );
};

export default UserDashboard;

const LoadingSpinnerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 200px;
  transform: translate(-50%, -50%);
`;

const ConfirmationContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #f0f4f5; */
`;

const ConfirmationWrapper = styled.div`
  border: 1px solid red;
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
  text-transform: capitalize;

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

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  /* margin-left: auto; */
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
  /* margin: 0 auto; */
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: ${({ $secondary }) => ($secondary ? '#cc2424' : '#007f3b')};
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
      $secondary ? '#940e0e' : '#046933'};
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// setUserAppointmentData({
//   appointmentDetails: { ...doc.data().appointmentDetails },
//   personalDetails: { ...doc.data().personalDetails },
// });

// const [userAppointmentData, setUserAppointmentData] = useState({
//   appointmentDetails: {},
//   personalDetails: {},
// });
