import styled from 'styled-components';
import PersonalInfoForm from './PersonalInfoForm';

const CreateAppointmentPersonalInfo = () => {
  return (
    <MainContainer>
      <HeadingsWrapper>
        <Heading>Enter your personal information</Heading>
      </HeadingsWrapper>
      <PersonalInfoForm />
    </MainContainer>
  );
};

export default CreateAppointmentPersonalInfo;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadingsWrapper = styled.div`
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

const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
