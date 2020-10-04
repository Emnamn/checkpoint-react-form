import React from 'react';
import './App.css';

import { FormGroup, }
  from 'reactstrap';

function App() {
  return (<div style={{ textAlign: 'center' }}>
    <form className="login-form">
      <h1 style={{ color: "red", fontSize: 60 }}> <span className="font-weight-bold" >LOGIN PAGE</span></h1>

      <h2>Welcome to our Form </h2>
      <input className="form-control" />
      <FormGroup>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </FormGroup>
      <button>log in</button>
    </form>


  </div>
  );
}
export default App;
