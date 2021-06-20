import { useState } from 'react';
import styled from 'styled-components';
import HonorificsList from '../utils/Honorifics';
import { useSelector } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';

const PersonalInfoForm = () => {
  const currentUser = useSelector((state) => state.usersSlice.currentUser);
  const [day, setDay] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <InfoContainer>
        <StepIconWrapper>
          <StepIcon>1</StepIcon>
        </StepIconWrapper>
        <InfoForm>
          <InfoDetail>
            <label>Title:</label>
            <Selector>
              {HonorificsList.map((honorific, index) => (
                <Option key={index}>{honorific}</Option>
              ))}
            </Selector>
          </InfoDetail>
          <InfoDetail>
            <Label>First name: </Label>
            <Input required type='text'></Input>
          </InfoDetail>
          <InfoDetail>
            <Label>Second name: </Label>
            <Input required type='text'></Input>
          </InfoDetail>
          <InfoDetail>
            <Label>Date of birth: </Label>
            <DatePicker
              style={{ marginLeft: 'auto', width: '39%' }}
              openTo='year'
              format='dd/MM/yyyy'
              disableFuture={true}
              onChange={(newValue) => setDay(newValue)}
              value={day}
            />
          </InfoDetail>
          <InfoDetail>
            <Label>Email: </Label>
            <Email>{currentUser && currentUser.email}</Email>
          </InfoDetail>
          <ButtonWrapper to='/create-appointment-choose-location'>
            <SaveButton>Save my details</SaveButton>
          </ButtonWrapper>
        </InfoForm>
      </InfoContainer>
    </MuiPickersUtilsProvider>
  );
};

export default PersonalInfoForm;

const InfoContainer = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const InfoForm = styled.form`
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const InfoDetail = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`;

const Selector = styled.select`
  border: 1px solid #005eb8;
  margin-left: auto;
  outline: none;
`;

const Option = styled.option`
  border: none;
`;

const Label = styled.label``;

const Input = styled.input`
  outline: none;
  border: 1px solid #005eb8;
  margin-left: auto;
`;

const Email = styled.p`
  margin-left: auto;
  color: grey;
`;

const ButtonWrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #005eb8;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: #2871b6;
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
