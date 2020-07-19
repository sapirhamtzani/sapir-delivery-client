import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Admin from '../Admin/Admin'
import './App.css';
import logo from '../../logo.svg';

function App() {
  // fetch('https://sapir-delivery-server.herokuapp.com/sapir')
  //   .then((res) => res.text())
  //   .then(console.log);
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Form} exact />
          <Route path="/Admin" component={Admin} />
          {/*<Route path="/shop" component={Shop} />*/}
          <Route component={Error} />
        </Switch>
      </main>
      {/*<header className="App-header">*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*<p>*/}
      {/*Hi sapir1! Edit <code>src/App.js</code> and save to reload.*/}
      {/*</p>*/}
      {/*<a*/}
      {/*className="App-link"*/}
      {/*href="https://reactjs.org"*/}
      {/*target="_blank"*/}
      {/*rel="noopener noreferrer"*/}
      {/*>*/}
      {/*Learn React*/}
      {/*</a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
