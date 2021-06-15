import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { firebaseAuth } from './firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './state/usersSlice';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import GlobalStyle from './utils/GlobalStyle';
import HomeMain from './components/HomeMain';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomeMain} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user-dashboard' component={UserDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
