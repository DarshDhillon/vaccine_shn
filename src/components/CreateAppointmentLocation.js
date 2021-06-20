import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const CreateAppointmentLocation = () => {
  return (
    <MainContainer>
      <HeadingsWrapper>
        <Heading>Choose where and when your appointment is:</Heading>
        <SubHeadingSection></SubHeadingSection>
      </HeadingsWrapper>
      <MapSection>
        <GoogleMap />
      </MapSection>
    </MainContainer>
  );
};

export default CreateAppointmentLocation;

const MainContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #f0f4f5; */
`;

const HeadingsWrapper = styled.div`
  border: 1px solid red;
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

const SubHeadingSection = styled.div`
  padding: 0 1rem;
  /* margin-bottom: 2rem; */
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 0.5rem;
`;

const MapSection = styled.div`
  border: 1px solid black;
  padding: 2rem 1rem;
  width: 70%;
  margin: 0 auto;
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
