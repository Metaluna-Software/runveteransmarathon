import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Home from './pages/home';
import RaceDay from './pages/raceDay';
import HalfMarathon from './pages/halfMarathon';
import Marathon from './pages/marathon';
import FiveK from './pages/fiveK';
import enData from './lang/en.json';
import ContactUs from './pages/contactUs';
import Results from './pages/results';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enJson: JSON.parse(JSON.stringify(enData))
    };
    this.enJson = () => JSON.parse(JSON.stringify(enData));
  }

  render() {
    return (
      <Router>
        <Navigation/>
        <div id='main' role='main'>
          <Switch>
            <Route path="/results">
              <Results enJson={this.enJson()}/>
            </Route>
            <Route path="/contact">
              <ContactUs enJson={this.enJson()}/>
            </Route>
            <Route path="/marathon">
              <Marathon enJson={this.enJson()}/>
            </Route>
            <Route path="/halfmarathon">
              <HalfMarathon enJson={this.enJson()}/>
            </Route>
            <Route path="/fivek">
              <FiveK enJson={this.enJson()}/>
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
