import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../state/usersSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync({ email: email, password: password }));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>This is the login</h1>
        <p>email</p>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <p>password</p>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='text'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
