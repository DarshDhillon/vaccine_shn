import styled from 'styled-components';
import { useState } from 'react';
import {
  loginUserAsync,
  logoutCurrentUserAsync,
  setIsLoadingUser,
} from '../state/usersSlice';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync({ email, password }));
    history.push('/user-dashboard');
  };

  const handleLogout = (e) => {
    dispatch(logoutCurrentUserAsync());
    // dispatch(setIsLoadingUser(true));
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm onSubmit={handleLogin}>
          <Heading>Sign In</Heading>
          <Label>Email:</Label>
          <Input
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
            type='password'
          />
          <SubmitButton type='submit'>Login</SubmitButton>
        </LoginForm>
        <div>
          Need to sign up? <Link to='/sign-up'>Click here</Link>
        </div>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  border: 3px solid lightgray;
  min-height: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoginForm = styled.form`
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
  background-color: #005eb8;
  color: #fff;
  border: none;

  :hover {
    background-color: #01417e;
  }
`;
