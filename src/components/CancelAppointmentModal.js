import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { firebaseDatabase, firebaseAuth } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { resetAllAppointmentDetails } from '../state/usersSlice';
import PropTypes from 'prop-types';

const APPOINTMENT_ROOT = document.getElementById(
  'cancel-appointment-modal-root'
);

const CancelAppointmentModal = ({
  showCancelAppointmentModal,
  setShowCancelAppointmentModal,
}) => {
  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  const dispatch = useDispatch();

  const handleDeleteAppointment = () => {
    firebaseDatabase.users
      .doc(currentUserUid)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });

    setShowCancelAppointmentModal((prev) => !prev);

    dispatch(resetAllAppointmentDetails());

    firebaseAuth.currentUser
      .delete()
      .then(() => {
        console.log('deleted user');
      })
      .catch((e) => {
        console.log(`there was an error, ${e}`);
      });
  };

  if (!showCancelAppointmentModal) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <ConfirmationWrapper>
        <ConfirmationBox>
          <Heading>Are you sure?</Heading>
          <SubHeading $lighter>
            Your appointment and account will be deleted
          </SubHeading>
          <ButtonWrapper>
            <Button $secondary onClick={handleDeleteAppointment}>
              YES, CANCEL
            </Button>
            <Button
              onClick={() => setShowCancelAppointmentModal((prev) => !prev)}
            >
              NO, GO BACK
            </Button>
          </ButtonWrapper>
        </ConfirmationBox>
      </ConfirmationWrapper>
    </ModalContainer>,
    APPOINTMENT_ROOT
  );
};

CancelAppointmentModal.propTypes = {
  showCancelAppointmentModal: PropTypes.bool,
  setShowCancelAppointmentModal: PropTypes.func,
};

export default CancelAppointmentModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const ConfirmationWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f4f5;
  padding: 2rem;
`;

const ConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 1rem;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: ${({ $secondary }) => ($secondary ? '#cc2424' : '#4c6272')};
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
      $secondary ? '#940e0e' : '#223846'};
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
