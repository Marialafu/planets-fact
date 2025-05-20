import { useState } from 'react';
import Header from '../../components/header/Header';
import HomeBody from '../../components/home-body/HomeBody';
import MobileMenu from '../../components/mobile-menu/MobileMenu';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <MobileMenu />}
      <HomeBody />
    </>
  );
};

export default Home;
