import { useState } from 'react';
import Header from '../../components/header/Header';
import { PLANETS_INFO } from '../../constants/planets-info';
import PlanetInfo from '../../components/planet-info/PlanetInfo';
import Filters from '../../components/filters/Filters';
import { FILTERS_INFO } from '../../constants/filters';
import Menu from '../../components/menu/Menu';

const Planet = ({ planetName }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filter, setFilter] = useState(FILTERS_INFO.overview);

  const planetSelected = PLANETS_INFO[planetName];

  return (
    <>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <Menu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <Filters
        planetSelected={planetSelected}
        filter={filter}
        setFilter={setFilter}
      />

      <PlanetInfo
        planetSelected={planetSelected}
        filter={filter}
        planetName={planetName}
      />
    </>
  );
};

export default Planet;
