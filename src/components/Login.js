import styled from 'styled-components';
import { useState } from 'react';
import { setIsLoadingUser } from '../state/usersSlice';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { firebaseAuth } from '../firebase';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setIsLoadingUser(true));

    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      dispatch(setIsLoadingUser(false));
      history.push('/user-dashboard');
    } catch {
      setErrorMessage('Login failed. Please try again.');
      dispatch(setIsLoadingUser(false));
      setEmail('');
      setPassword('');
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm onSubmit={handleLogin}>
          <Heading>Sign in</Heading>
          <Label>Email:</Label>
          <Input
            autoFocus
            autoComplete='none'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
          <Label>Password:</Label>
          <Input
            autoComplete='none'
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? 'text' : 'password'}
          />
          <SubmitButton
            disabled={password.length < 6 ? true : false}
            type='submit'
          >
            Login
          </SubmitButton>
          <ShowPasswordWrapper onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </ShowPasswordWrapper>
        </LoginForm>
        <ErrorContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
        <Redirect>
          Need to sign up? <Link to='/sign-up'>Click here</Link>
        </Redirect>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  border: 1px solid red;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const LoginWrapper = styled.div`
  border: 1px solid black;
  min-height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  border: 1px solid red;
  /* width: 50%; */
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
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#005eb8')};
  cursor: pointer;
  color: #fff;
  border: none;

  :hover {
    background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#01417e')};
  }
`;

const Redirect = styled.p`
  font-style: italic;
`;

const ErrorContainer = styled.div``;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
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
  top: 55%;
`;
