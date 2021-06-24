import styled from 'styled-components';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSpinnerBlue from '../assets/images/loading_spinner_blue.gif';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.usersSlice.currentUser);
  const isLoadingUser = useSelector((state) => state.usersSlice.isLoadingUser);

  return (
    <>
      {isLoadingUser ? (
        <LoadingSpinnerImage src={LoadingSpinnerBlue} alt='loading spinner' />
      ) : (
        <Route
          {...rest}
          render={(props) => {
            return currentUser ? <Component {...props} /> : <Redirect to='/' />;
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;

const LoadingSpinnerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 200px;
  transform: translate(-50%, -50%);
`;
