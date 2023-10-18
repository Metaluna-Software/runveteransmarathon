import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/navigation';
import enData from './lang/en.json';
import ContactUs from './pages/contactUs';
import VeteransPage from './pages/veterans';
import MemorialPage from './pages/memorial';
import ChooseRace from './pages/chooseRace';

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
        <Navigation enJson={this.enJson()}/>
        <div id='main' role='main'>
          <Switch>
            <Route path='/contact.html'>
              <ContactUs enJson={this.enJson()}/>
            </Route>
            <Route path='/veterans.html'>
              <VeteransPage enJson={this.enJson()}/>
            </Route>
            <Route path='/memorial.html'>
              <MemorialPage enJson={this.enJson()}/>
            </Route>
            <Route path='/'>
              <ChooseRace enJson={this.enJson()}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Application;
