import { Link } from 'react-router-dom';
import { StyledHeader, StyledImg, StyledTitle } from './header.styles';

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <StyledHeader>
      <StyledTitle>
        <Link to='/'>THE PLANETS</Link>
        </StyledTitle>
      <StyledImg
        src='/assets/icon-hamburger.svg'
        alt='three lines menu'
        onClick={() => setOpenMenu(!openMenu)}
        $openMenu={openMenu}
      />
    </StyledHeader>
  );
};

export default Header;
