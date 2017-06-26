/* global window document */

import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/AppRoutes';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { App } from './components/App';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
