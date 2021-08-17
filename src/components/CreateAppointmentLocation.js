import styled from 'styled-components';
import DateAndTimePicker from './DateAndTimePicker';
import MapSection from './MapSection';

const CreateAppointmentLocation = () => {
  return (
    <MainContainer>
      <HeadingsWrapper>
        <Heading>Choose where and when your appointment is:</Heading>
      </HeadingsWrapper>
      <MapContainer>
        <MapSection />
      </MapContainer>
      <DateAndTimePicker />
    </MainContainer>
  );
};

export default CreateAppointmentLocation;

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

const MapContainer = styled.div`
  padding: 2rem 1rem;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;
