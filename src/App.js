import React, { Fragment, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

// components
const MainNav = lazy(() => import('./components/MainNav'));
const Landing = lazy(() => import('./components/Landing'));
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Fragment>
          <MainNav />

          <div id='mainContainer'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/skills' component={Skills} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </Fragment>
      </Suspense>
    </Router>
  );
}

export default App;
