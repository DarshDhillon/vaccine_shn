import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const TEST_MESSAGE_ROOT = document.getElementById('test-message-modal-root');

const TestMessageModal = () => {
  const [showTestMessageModal, setShowTestMessageModal] = useState(true);

  if (!showTestMessageModal) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <ConfirmationWrapper>
        <ConfirmationBox>
          <SubHeading $lighter>
            Any dummy email address will work for testing
          </SubHeading>
          <Button onClick={() => setShowTestMessageModal(false)}>CLOSE</Button>
        </ConfirmationBox>
      </ConfirmationWrapper>
    </ModalContainer>,
    TEST_MESSAGE_ROOT
  );
};

export default TestMessageModal;

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
  padding: 1rem;
`;

const ConfirmationBox = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 1rem;
  color: #000;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
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
