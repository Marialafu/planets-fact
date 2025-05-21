import { useState } from 'react';
import Header from '../../components/header/Header';
import HomeBody from '../../components/home-body/HomeBody';
import MobileMenu from '../../components/mobile-menu/MobileMenu';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MobileMenu openMenu={openMenu} />
      <HomeBody />
    </>
  );
};

export default Home;
