import { StyledHeader, StyledImg, StyledTitle } from "./header.styles";


const Header = ({openMenu, setOpenMenu}) => {
  return (
    <StyledHeader>
      <StyledTitle>THE PLANETS</StyledTitle>
      <StyledImg
      src="/assets/icon-hamburger.svg" 
      alt="three lines menu" 
      onClick={() => setOpenMenu(!openMenu)}
      $openMenu={openMenu}/>
    </StyledHeader>
  );
};

export default Header;
