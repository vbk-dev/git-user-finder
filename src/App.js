import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './components/context/github/GithubState';
import Navbar from './components/layout/Navbar';
import User from './components/user/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/NotFoundError';

const App = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ];

  return (
    <GithubState>
      <Router>
      <div>
        <Navbar title='Github Finder' logo='fab fa-github mx-2' navItems={navItems} />
        <div className="container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/user/:username' exact component={User} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    </GithubState>
  );
}

export default App;