import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import { useState } from 'react';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      
    </BrowserRouter>
  );
};


export default App;
