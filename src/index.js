import './init.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Application from './application';
import ReactDOM from 'react-dom';
import React from 'react';

const domRoot = document.getElementById('root');

ReactDOM.render(<Application/>, domRoot);
