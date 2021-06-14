import styled from 'styled-components';
import shnLogo from '../assets/images/shn_logo_blue_text.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImageWrapper>
        <Link to='/'>
          <HeaderLogo alt='header_logo' src={shnLogo} />
        </Link>
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
  width: 50%;
  margin: 0 auto;
`;

const HeaderLogo = styled.img`
  width: 180px;
  /* border: 1px solid white; */
`;
