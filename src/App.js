import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { firebaseAuth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setCurrentUserUid } from './state/usersSlice';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.usersSlice.isLoading);
  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUserUid
  );

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      console.log(user);
      user && dispatch(setCurrentUserUid(user.uid));
      dispatch(setIsLoading(false));
    });

    return unsubscribe;
  }, []);

  console.log(isLoading);
  console.log(currentUserUid);

  return (
    <Router>
      <h1>Hi from App</h1>
      <Signup />
      <Login />
    </Router>
  );
};

export default App;
