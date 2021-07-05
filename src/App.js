import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
          <Home />  
      </Route>      
      <Route exact path="/about">
          <About />  
      </Route>      
      <Route exact path="/services">
          <Services />  
      </Route>      
      <Route exact path="/contact">
          <Contact />  
      </Route>
    </Switch>
  );
}

export default App;
