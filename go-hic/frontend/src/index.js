import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as Wails from '@wailsapp/runtime';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

Wails.Init(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
