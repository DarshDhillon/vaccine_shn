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
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #f0f4f5; */
`;

const HeadingsWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;
`;
