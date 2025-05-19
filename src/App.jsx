import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import Header from './components/header/Header';
import MobileMenu from './components/mobile-menu/MobileMenu';
import { useState } from 'react';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <MobileMenu /> }
      
    </BrowserRouter>
  );
};


export default App;
