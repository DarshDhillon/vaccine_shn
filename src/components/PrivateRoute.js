import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.usersSlice.currentUser);
  const isLoadingUser = useSelector((state) => state.usersSlice.isLoadingUser);

  console.log(currentUser);

  return (
    <>
      {isLoadingUser ? (
        <p>loading...</p>
      ) : (
        <Route
          {...rest}
          render={(props) => {
            return currentUser ? <Component {...props} /> : <Redirect to='/' />;
          }}
        ></Route>
      )}
    </>
  );
};

export default PrivateRoute;
