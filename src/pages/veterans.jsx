import React from 'react';
import '../style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RaceDay from './veterans/raceDay';
import HalfMarathon from './veterans/halfMarathon';
import Marathon from './veterans/marathon';
import FiveK from './veterans/fiveK';
import enData from '../lang/en.json';
import Results from './veterans/results';
import Faq from './veterans/faq';
import VeteransNavigation from '../navigation/veteransnavigation';
import VeteransHome from './veterans/veteranshome';

class VeteransPage extends React.Component {
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
        <VeteransNavigation/>
        <div id='vetmain' role='main'>
          <Switch>
            <Route path='/results.html'>
              <Results enJson={this.enJson()}/>
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
              <VeteransHome enJson={this.enJson()}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default VeteransPage;
