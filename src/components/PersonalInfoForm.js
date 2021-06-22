import { useState } from 'react';
import styled from 'styled-components';
import HonorificsData from '../utils/HonorificsData';
import { useSelector, useDispatch } from 'react-redux';
import { setNewUserPersonalInfo } from '../state/usersSlice';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const PersonalInfoForm = () => {
  const currentUser = useSelector((state) => state.usersSlice.currentUser);
  const history = useHistory();
  const [day, setDay] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      setNewUserPersonalInfo({
        firstName,
        secondName,
        dateOfBirth: moment(day).format('DD/MM/YYYY'),
      })
    );

    history.push('/create-appointment/choose-location');
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <InfoContainer>
        <StepIconWrapper>
          <StepIcon>1</StepIcon>
        </StepIconWrapper>
        <InfoForm onSubmit={handleSubmitForm}>
          <InfoDetail>
            <label>Title:</label>
            <Selector>
              {HonorificsData.map((honorific, index) => (
                <Option key={index}>{honorific}</Option>
              ))}
            </Selector>
          </InfoDetail>
          <InfoDetail>
            <Label>First name: </Label>
            <Input
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type='text'
            />
          </InfoDetail>
          <InfoDetail>
            <Label>Second name: </Label>
            <Input
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
              type='text'
            />
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
          <ButtonWrapper>
            <SaveButton type='submit'>SAVE</SaveButton>
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
  text-transform: capitalize;
`;

const Email = styled.p`
  margin-left: auto;
  color: grey;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const SaveButton = styled.button`
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

  :hover {
    background-color: #046933;
  }
`;

const StepIconWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const StepIcon = styled.h1`
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  background: #005eb8;
  color: #fff;
  border-radius: 50%;
`;
