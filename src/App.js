import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { firebaseAuth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setCurrentUserUid } from './state/usersSlice';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import GlobalStyle from './utils/GlobalStyle';
import HomeMain from './components/HomeMain';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomeMain} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;

// const dispatch = useDispatch();
// const isLoading = useSelector((state) => state.usersSlice.isLoading);
// const currentUserUid = useSelector(
//   (state) => state.usersSlice.currentUserUid
// );

// useEffect(() => {
//   const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
//     console.log(user);
//     user && dispatch(setCurrentUserUid(user.uid));
//     dispatch(setIsLoading(false));
//   });

//   return unsubscribe;
// }, []);

// console.log(isLoading);
// console.log(currentUserUid);
