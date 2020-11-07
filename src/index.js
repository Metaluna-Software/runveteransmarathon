import './init.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Application from './application';
import React from 'react';
import { render } from 'react-snapshot';

const domRoot = document.getElementById('root');

render(<Application/>, domRoot);
