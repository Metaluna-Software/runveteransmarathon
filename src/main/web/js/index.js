import './init.js';
import Application from './components/application';
import Base from 'terra-base';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, withRouter } from 'react-router-dom';

const WrappedApplication = withRouter(Application);

const AppRoot = () => (
  <Base className="base" locale="en">
    <MemoryRouter>
      <WrappedApplication/>
    </MemoryRouter>
  </Base>
);

const domRoot = document.getElementById('root');

if (domRoot) {
  ReactDOM.render(<AppRoot/>, domRoot);
}
