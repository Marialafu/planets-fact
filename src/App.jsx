import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import Header from './components/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      <Header />
    </BrowserRouter>
  );
};

export default App;
