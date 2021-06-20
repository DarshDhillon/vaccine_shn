import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeMain = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Heading>
          Book or manage your coronavirus (COVID-19) vaccination
        </Heading>
        <SubHeading>
          Use this service to book a coronavirus (COVID-19) vaccination or
          manage your appointment.
        </SubHeading>
        <SubHeading $lighter>
          If you've already booked a vaccination appointment through a GP or
          local SHN service, you do not need to book again using this service.
        </SubHeading>
        <ButtonWrapper>
          {/* <Button to='/sign-up'>Book my appointment</Button> */}
          <Button to='/create-appointment'>create appointment testing</Button>
          <Button to='/login' $secondary>
            Manage my appointment
          </Button>
        </ButtonWrapper>
      </MainWrapper>
    </MainContainer>
  );
};

export default HomeMain;

const MainContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  /* background-color: #f0f4f5; */
`;

const MainWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  /* background-color: pink; */
  padding: 2rem 1rem;
`;

const Heading = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 70%;
  padding: 1rem;
  justify-content: space-around;
  /* margin: 0 auto; */
`;

const Button = styled(Link)`
  background-color: ${({ $secondary }) => ($secondary ? '#4c6272' : '#007f3b')};
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: ${({ $secondary }) =>
    $secondary ? '0 4px 0 #263139' : ' 0 4px 0 #00401e'};
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0;
  padding: 1.3rem 1.8rem;
  text-align: center;
  vertical-align: top;
  width: auto;
  text-decoration: none;

  :hover {
    background-color: ${({ $secondary }) =>
      $secondary ? '#223846' : '#046933'};
  }
`;
