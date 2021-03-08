import React from 'react';
import NavBar from './components/NavBar';
import Playlist from './pages/Playlist';
import About from './pages/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Playlist />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
