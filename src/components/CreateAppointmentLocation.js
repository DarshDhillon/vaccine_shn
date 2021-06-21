import styled from 'styled-components';
import MapSection from './MapSection';

const CreateAppointmentLocation = () => {
  return (
    <MainContainer>
      <HeadingsWrapper>
        <Heading>Choose where and when your appointment is:</Heading>
        <SubHeadingSection></SubHeadingSection>
      </HeadingsWrapper>
      <MapContainer>
        <MapSection />
      </MapContainer>
    </MainContainer>
  );
};

export default CreateAppointmentLocation;

const MainContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
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

const MapContainer = styled.div`
  border: 1px solid black;
  padding: 2rem 1rem;
  width: 70%;
  margin: 0 auto;
`;
