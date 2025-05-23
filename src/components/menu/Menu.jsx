import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planets-menu';
import { StyledImg, StyledMenu, StyledMenuItem } from './menu.styles';

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <StyledMenu $openMenu={openMenu}>
        {PLANETS_MENU.map(planet => {
          return (
            <StyledMenuItem
              key={planet.id}
              $planet={planet}
            >
              <Link
                to={planet.link}
                onClick={() => setOpenMenu(!openMenu)}
              >
                {planet.name}
              </Link>
              <StyledImg
                src='/assets/icon-chevron.svg'
                alt='chevron'
              />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </nav>
  );
};

export default Menu;
