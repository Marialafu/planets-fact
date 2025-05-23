import { useState } from 'react';
import Header from '../../components/header/Header';
import HomeBody from '../../components/home-body/HomeBody';
import Menu from '../../components/menu/Menu';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Menu openMenu={openMenu} />
      <HomeBody />
    </>
  );
};

export default Home;
