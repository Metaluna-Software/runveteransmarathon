import React from 'react';
import '../style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import enData from '../lang/en.json';
import MemorialHome from './memorial/memorialhome';
import MemorialResults from './memorial/memorialresults';
import MemorialRaceDay from './memorial/memRaceDay';
import MemorialNavigation from '../navigation/memorialnavigation';
import Memorial10kCourse from './memorial/memorial10kcourse';

class MemorialPage extends React.Component {
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
        <MemorialNavigation/>
        <div id='memorialmain' role='main'>
          <Switch>
            <Route path='/memorialresults.html'>
              <MemorialResults enJson={this.enJson()}/>
            </Route>
            <Route path='/memorialraceday.html'>
              <MemorialRaceDay enJson={this.enJson()}/>
            </Route>
            <Route path='/memorial10kcourse.html'>
              <Memorial10kCourse enJson={this.enJson()}/>
            </Route>
            <Route path='/'>
              <MemorialHome enJson={this.enJson()}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MemorialPage;
