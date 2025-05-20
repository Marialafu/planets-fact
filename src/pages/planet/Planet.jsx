import { useState } from 'react';
import Header from '../../components/header/Header';
import MobileMenu from '../../components/mobile-menu/MobileMenu';
import { PLANETS_INFO } from '../../constants/planets-info';
import PlanetInfo from '../../components/planet-info/PlanetInfo';

const Planet = ({ planetLink }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const planetSelected = identifyPlanetSelected(planetLink);

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <MobileMenu />}

      <PlanetInfo {...planetSelected} />
    </>
  );
};

const identifyPlanetSelected = planetLink => {
  console.log(planetLink.name);
  const planetSelected = PLANETS_INFO.find(planet => {
    return planet.name === planetLink.name;
  });

  return planetSelected;
};

export default Planet;
