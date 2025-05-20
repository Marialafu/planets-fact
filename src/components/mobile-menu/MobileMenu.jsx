import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planets-menu';
import { StyledMenu, StyledMenuItem } from './menu.styles';

const MobileMenu = () => {
  return (
    <nav>
      <StyledMenu>
        {PLANETS_MENU.map(planet => {
          return (
            <StyledMenuItem key={planet.id} $planet={planet}>
              <Link to={planet.link}>{planet.name}</Link>
              <img src='/assets/icon-chevron.svg' alt='chevron' />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </nav>
  );
};

export default MobileMenu;
