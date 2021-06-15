import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { firebaseAuth } from './firebase';
import { useDispatch } from 'react-redux';
import { setIsLoading, setCurrentUser } from './state/usersSlice';
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
      console.log('user log1', user);
      dispatch(setIsLoading(true));
      dispatch(setCurrentUser(user));
      console.log('user log2', user);
      dispatch(setIsLoading(false));
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
