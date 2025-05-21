import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planets-menu';
import { StyledMenu, StyledMenuItem } from './menu.styles';

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <StyledMenu $openMenu={openMenu}>
        {PLANETS_MENU.map(planet => {
          return (
            <StyledMenuItem key={planet.id} $planet={planet}>
              <Link to={planet.link} onClick={() => setOpenMenu(!openMenu)}>
                {planet.name}
              </Link>
              <img src='/assets/icon-chevron.svg' alt='chevron' />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </nav>
  );
};

export default MobileMenu;
