import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SelectedMapDetails = ({ handleGetLocation }) => {
  const selectedAppointmentDetails = useSelector(
    (state) => state.usersSlice.selectedAppointmentDetails
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
          3. Zoom in and click the hospital/practice of your choice
        </SubHeading>
        {selectedAppointmentDetails.locationName && (
          <SelectedLocationDetails>
            <SelectedLocationHeading>
              You have selected:
            </SelectedLocationHeading>
            <SelectedLabel>Name:</SelectedLabel>
            <SelectedInfo>
              {selectedAppointmentDetails.locationName}
            </SelectedInfo>
            <SelectedLabel>Address:</SelectedLabel>
            <SelectedInfo>
              {selectedAppointmentDetails.locationAddress}
            </SelectedInfo>
            <SelectedLabel>Phone:</SelectedLabel>
            <SelectedInfo>
              {selectedAppointmentDetails.locationPhoneNumber}
            </SelectedInfo>
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
  border: 1px solid red;
  /* width: 80%; */
  padding: 0rem 1rem;
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
  margin-bottom: 1.5rem;
`;

const SelectedLocationDetails = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const SelectedLocationHeading = styled.h2`
  margin-bottom: 1rem;
`;

const SelectedInfo = styled.h2`
  color: #005eb8;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SelectedLabel = styled.label`
  color: #000;
`;
