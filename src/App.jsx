import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import { useState } from 'react';
import Home from './pages/home/Home';
import MobileMenu from './components/mobile-menu/MobileMenu';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      <Home openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <MobileMenu /> }
      
    </BrowserRouter>
  );
};


export default App;
