import React from 'karet';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Form from './Form';

const App = () =>
  <div>
    <header className="jumbotron text-center">
      <div className="container">
        <div className="content">
          <h1>Calmm · Form Validation</h1>
          <hr />
          <p>
            Validating form data in <a href="https://github.com/calmm-js">Calmm.js</a>
          </p>
        </div>
      </div>
    </header>
    <div className="container">
      <Form />
    </div>
  </div>;

export default App;
