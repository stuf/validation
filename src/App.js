import React from 'karet';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Form from './Form';

const App = () =>
  <div>
    <header className="jumbotron text-center">
      <div className="container">
        <h1>Calmm</h1>
        <h2>Form Validation</h2>
      </div>
    </header>
    <div className="container">
      <Form />
    </div>
  </div>;

export default App;
