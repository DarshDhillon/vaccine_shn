import styled from 'styled-components';
import { useState } from 'react';
import { setIsLoadingUser } from '../state/usersSlice';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { firebaseAuth } from '../firebase';

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoadingUser(true));

    try {
      await firebaseAuth.createUserWithEmailAndPassword(
        signUpEmail,
        signUpPassword
      );
      dispatch(setIsLoadingUser(false));
      history.push('/user-dashboard');
    } catch {
      setSignUpEmail('');
      setSignUpPassword('');
      setSignUpConfirmPassword('');
      dispatch(setIsLoadingUser(false));
      console.log('error creating user');
    }
  };

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpForm onSubmit={handleSubmit}>
          <Heading>Sign up</Heading>
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
          {signUpPassword.length < 6 || signUpConfirmPassword.length < 6 ? (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Password must be at least 6 characters!
            </p>
          ) : (
            ''
          )}

          {signUpPassword !== signUpConfirmPassword && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Passwords do not match!
            </p>
          )}
          <SubmitButton
            disabled={signUpPassword === signUpConfirmPassword ? false : true}
            type='submit'
          >
            Create account
          </SubmitButton>
        </SignUpForm>
        <div>
          Already signed up? <Link to='/login'>Click here</Link>
        </div>
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
  /* border: 3px solid lightgray; */
  min-height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: none;
  outline: none;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  /* color: #005eb8; */
  text-align: center;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#005eb8')};
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#01417e')};
  }
`;
