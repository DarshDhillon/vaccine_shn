import styled from 'styled-components';
import { useState } from 'react';
import { setIsLoadingUser } from '../state/usersSlice';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { firebaseAuth } from '../firebase';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setIsLoadingUser(true));

    try {
      setErrorMessage('');
      await firebaseAuth.createUserWithEmailAndPassword(
        signUpEmail,
        signUpPassword
      );
      dispatch(setIsLoadingUser(false));
      history.push('/create-appointment');
    } catch {
      setSignUpEmail('');
      setSignUpPassword('');
      setSignUpConfirmPassword('');
      dispatch(setIsLoadingUser(false));
      setErrorMessage('Error creating user. Please try again.');
    }
  };

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpForm onSubmit={handleSubmit}>
          <Heading>Sign up</Heading>
          <Label>Email:</Label>
          <Input
            autoFocus
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
            type={showPassword ? 'text' : 'password'}
          />
          <Label>Confirm password:</Label>
          <Input
            autoComplete='none'
            onChange={(e) => setSignUpConfirmPassword(e.target.value)}
            required
            value={signUpConfirmPassword}
            type={showPassword ? 'text' : 'password'}
          />
          <SubmitButton
            $deactive={signUpPassword === signUpConfirmPassword ? false : true}
            type='submit'
          >
            Create account
          </SubmitButton>
          <ShowPasswordWrapper onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </ShowPasswordWrapper>
        </SignUpForm>
        <ErrorContainer>
          {signUpPassword.length < 6 || signUpConfirmPassword.length < 6 ? (
            <ErrorMessage>Password must be at least 6 characters</ErrorMessage>
          ) : (
            ''
          )}
          {signUpPassword !== signUpConfirmPassword && (
            <ErrorMessage>Passwords do not match</ErrorMessage>
          )}
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
        <Redirect>
          Already signed up? <Link to='/login'>Click here</Link>
        </Redirect>
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
  position: relative;
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
  background-color: ${({ $deactive }) => ($deactive ? 'lightgrey' : '#005eb8')};
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${({ $deactive }) =>
      $deactive ? 'lightgrey' : '#01417e'};
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const Redirect = styled.p`
  font-style: italic;
`;

const ShowPasswordIcon = styled(BsEye)`
  cursor: pointer;
  font-size: 1.5rem;
  color: #005eb8;
`;

const HidePasswordIcon = styled(BsEyeSlash)`
  cursor: pointer;

  font-size: 1.5rem;
  color: #005eb8;
`;

const ShowPasswordWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 40%;
`;
