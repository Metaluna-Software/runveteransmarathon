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
import Faq from './pages/faq';

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
            <Route path='/results.html'>
              <Results enJson={this.enJson()}/>
            </Route>
            <Route path='/contact.html'>
              <ContactUs enJson={this.enJson()}/>
            </Route>
            <Route path='/faq.html'>
              <Faq enJson={this.enJson()}/>
            </Route>
            <Route path='/marathon.html'>
              <Marathon enJson={this.enJson()}/>
            </Route>
            <Route path='/halfmarathon.html'>
              <HalfMarathon enJson={this.enJson()}/>
            </Route>
            <Route path='/fivek.html'>
              <FiveK enJson={this.enJson()}/>
            </Route>
            <Route path='/raceday.html'>
              <RaceDay enJson={this.enJson()}/>
            </Route>
            <Route path='/'>
              <Home enJson={this.enJson()}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Application;
