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
import CreateAppointment from './components/CreateAppointment';
import CreateAppointmentPersonalInfo from './components/CreateAppointmentPersonalInfo';
import CreateAppointmentLocation from './components/CreateAppointmentLocation';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomeMain} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user-dashboard' component={UserDashboard} />
        {/* <PrivateRoute
          path='/create-appointment'
          component={CreateAppointment}
        /> */}
        <Route
          exact
          path='/create-appointment/personal-info'
          component={CreateAppointmentPersonalInfo}
        />
        <Route exact path='/create-appointment' component={CreateAppointment} />
        <Route
          exact
          path='/create-appointment/choose-location'
          component={CreateAppointmentLocation}
        />
      </Switch>
    </Router>
  );
};

export default App;
