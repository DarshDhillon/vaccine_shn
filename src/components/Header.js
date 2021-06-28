import styled from 'styled-components';
import shnLogo from '../assets/images/shn_logo_blue_text.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseAuth } from '../firebase';
import { resetAllAppointmentDetails } from '../state/usersSlice';

const Header = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.usersSlice.currentUser);
  const dispatch = useDispatch();

  const handleLogoutUser = async () => {
    try {
      await firebaseAuth.signOut();
      dispatch(resetAllAppointmentDetails());
      history.push('/');
    } catch {
      alert('Error logging out');
    }
  };

  return (
    <HeaderContainer>
      <HeaderImageWrapper>
        <Link to='/'>
          <HeaderLogo alt='header_logo' src={shnLogo} />
        </Link>
        <LogoutButton onClick={handleLogoutUser} $isCurrentUser={currentUser}>
          Logout
        </LogoutButton>
      </HeaderImageWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  /* padding: 1rem; */
  height: 200px;
  width: 100%;
  background-color: #005eb8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderImageWrapper = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const HeaderLogo = styled.img`
  /* border: 1px solid white; */
  width: 180px;
`;

const LogoutButton = styled.button`
  visibility: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'visibile' : 'hidden'};
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  color: #005eb8;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 0;
  border: none;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background-color: #d3cfcf;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
