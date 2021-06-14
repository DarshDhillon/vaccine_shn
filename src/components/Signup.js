import { useState } from 'react';
import {
  createNewUserAsync,
  logoutCurrentUserAsync,
} from '../state/usersSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewUserAsync({ email: email, password: password }));
  };

  const handleLogout = () => {
    dispatch(logoutCurrentUserAsync());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>This is the signup</h1>
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
        <button type='submit'>Signup</button>
      </form>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Signup;
