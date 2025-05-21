import { useState } from 'react';
import Header from '../../components/header/Header';
import MobileMenu from '../../components/mobile-menu/MobileMenu';
import { PLANETS_INFO } from '../../constants/planets-info';
import PlanetInfo from '../../components/planet-info/PlanetInfo';
import Filters from '../../components/filters/Filters';

const Planet = ({ planetLink }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filter, setFilter] = useState(0);

  const planetSelected = identifyPlanetSelected(planetLink);

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Filters planet={planetLink} filter={filter} setFilter={setFilter} />

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <PlanetInfo
        planet={planetSelected}
        filter={filter}
        planetLink={planetLink}
      />
    </>
  );
};

const identifyPlanetSelected = planetLink => {
  const planetSelected = PLANETS_INFO.find(planet => {
    return planet.name === planetLink.name;
  });

  return planetSelected;
};

export default Planet;
