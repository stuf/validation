import React from 'react';
import ReactDOM from 'react-dom';
import K, * as U from 'karet.util';
import * as L from 'partial.lenses';
import * as R from 'ramda';
import * as Kefir from 'kefir';
import * as Atom from 'kefir.atom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  Object.assign(window, { K, U, R, L, Kefir, Atom });
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
