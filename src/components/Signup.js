import styled from 'styled-components';
import { useState } from 'react';
import { createNewUserAsync } from '../state/usersSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   createNewUserAsync({ email: signUpEmail, password: signUpPassword })
    // );
  };

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpForm onSubmit={handleSubmit}>
          <Heading>Sign Up</Heading>
          <Label>Email:</Label>
          <Input
            autoComplete='none'
            required
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            type='email'
          />
          <Label>Password:</Label>
          <Input
            autoComplete='none'
            required
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
            type='password'
          />
          <Label>Confirm password:</Label>
          <Input
            autoComplete='none'
            onChange={(e) => setSignUpConfirmPassword(e.target.value)}
            required
            value={signUpConfirmPassword}
            type='password'
          />
          {signUpPassword !== signUpConfirmPassword && (
            <p style={{ color: 'red' }}>Passwords do not match!</p>
          )}
          <SubmitButton type='submit'>Create account</SubmitButton>
        </SignUpForm>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const SignUpWrapper = styled.div`
  border: 3px solid grey;
  min-height: 400px;
  width: 60%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
`;

const SignUpForm = styled.form`
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.label`
  /* font-weight: bold; */
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: none;
  outline: none;
`;

const Heading = styled.h1`
  /* color: #005eb8; */
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #005eb8;
  color: #fff;
  border: none;

  :hover {
    background-color: #01417e;
  }
`;
