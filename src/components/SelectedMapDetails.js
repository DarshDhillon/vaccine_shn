import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SelectedMapDetails = ({ handleGetLocation }) => {
  const selectedAppointmentLocation = useSelector(
    (state) => state.usersSlice.selectedAppointmentLocation
  );

  return (
    <DetailsContainer>
      <DetailsWrapper>
        <StepIconWrapper>
          <StepIcon>2</StepIcon>
        </StepIconWrapper>
        <SubHeading $lighter>
          1. Click
          <GoToMyLocationButton onClick={handleGetLocation}>
            My location
          </GoToMyLocationButton>
          to reposition the map closer to your location (permission required)
        </SubHeading>
        <SubHeading $lighter>
          2. Either search for a specific hospital/practice using the "Enter a
          query" field (example: "Royal London Hospital"), or make a generic
          search (example: "hospital")
        </SubHeading>
        <SubHeading $lighter>
          3. Click the hospital/practice of your choice
        </SubHeading>
        {selectedAppointmentLocation.locationName && (
          <SelectedLocationDetails>
            <SelectedLocationHeading>
              You have selected:
            </SelectedLocationHeading>
            <SelectedLocationName>
              Name:
              {selectedAppointmentLocation.locationName}
            </SelectedLocationName>
            <SelectedLocationAddress>
              Address:
              {selectedAppointmentLocation.locationAddress}
            </SelectedLocationAddress>
            <SelectedLocationPhoneNumber>
              Phone:
              {selectedAppointmentLocation.locationPhoneNumber}
            </SelectedLocationPhoneNumber>
          </SelectedLocationDetails>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default SelectedMapDetails;

const DetailsContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  /* padding: 0rem 1rem; */
`;

const DetailsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const GoToMyLocationButton = styled.button`
  background-color: ${({ $secondary }) => ($secondary ? '#4c6272' : '#007f3b')};
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: ${({ $secondary }) =>
    $secondary ? '0 4px 0 #263139' : ' 0 4px 0 #00401e'};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  padding: 0.2rem 0.8rem;
  text-align: center;
  vertical-align: top;
  width: auto;
  text-decoration: none;
  margin: 0 5px 0 5px;

  :hover {
    background-color: ${({ $secondary }) =>
      $secondary ? '#223846' : '#046933'};
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

const SubHeading = styled.h3`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 2rem;
`;

const SelectedLocationDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedLocationHeading = styled.h2``;

const SelectedLocationName = styled.p`
  color: #005eb8;
`;

const SelectedLocationAddress = styled.p`
  color: #005eb8;
`;

const SelectedLocationPhoneNumber = styled.p`
  color: #005eb8;
`;
