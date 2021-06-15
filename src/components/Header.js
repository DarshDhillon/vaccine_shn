import styled from 'styled-components';
import shnLogo from '../assets/images/shn_logo_blue_text.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { firebaseAuth } from '../firebase';

const Header = () => {
  const currentUser = useSelector((state) => state.usersSlice.currentUser);

  const handleLogoutUser = async () => {
    try {
      firebaseAuth.signOut();
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
`;

const HeaderLogo = styled.img`
  width: 180px;
  /* border: 1px solid white; */
`;

const LogoutButton = styled.button`
  visibility: ${({ $isCurrentUser }) =>
    $isCurrentUser ? 'visibile' : 'hidden'};
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 0;
  border: none;
`;
