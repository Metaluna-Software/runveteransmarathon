import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Home from './pages/home';
import RaceDay from './pages/raceDay';
import HalfMarathon from './pages/halfMarathon';
import Marathon from './pages/marathon';
import FiveK from './pages/5k';
import enData from './lang/en.json'

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.enJson = () => JSON.parse(JSON.stringify(enData));
  }

  render() {
    return (
      <Router>
        <div className='page-layout'>
          <Navigation/>
          <Switch>
            <Route path="/marathon">
              <Marathon/>
            </Route>
            <Route path="/halfmarathon">
              <HalfMarathon/>
            </Route>
            <Route path="/5k">
              <FiveK/>
            </Route>
            <Route path="/raceday">
              <RaceDay enJson={this.enJson()}/>
            </Route>
            <Route path="/">
              <Home enJson={this.enJson()}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Application;
