import './init.js';
import React from 'react';
import Application from './components/application';
import ReactDOM from 'react-dom';
import './style.css';

const domRoot = document.getElementById('root');

ReactDOM.render(<Application/>, domRoot);
