import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CreateAppointment = () => {
  return (
    <MainContainer>
      <HeadingsWrapper>
        <Heading>Steps to create your vaccine appointment</Heading>
        <SubHeadingSection>
          <SubHeading $lighter>1. Enter your personal information</SubHeading>
          <SubHeading $lighter>
            2. Using the map, select the hospital or practice of your choice
          </SubHeading>
          <SubHeading $lighter>
            3. Choose a preferred appointment date and time
          </SubHeading>
          <SubHeading $lighter>
            4. Confirm your details and note the reference number
          </SubHeading>
        </SubHeadingSection>
        <ButtonWrapper>
          <Button to='/create-appointment/personal-info'>START</Button>
        </ButtonWrapper>
      </HeadingsWrapper>
    </MainContainer>
  );
};

export default CreateAppointment;

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

const SubHeadingSection = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h2`
  font-weight: ${({ $lighter }) => $lighter && 'lighter'};
  margin-bottom: 0.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* width: 50%; */
  padding: 1rem;
  margin: 0 auto;

  /* justify-content: space-around; */
  /* margin: 0 auto; */
`;

const Button = styled(Link)`
  background-color: #007f3b;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #00401e;
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
    background-color: #046933;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
