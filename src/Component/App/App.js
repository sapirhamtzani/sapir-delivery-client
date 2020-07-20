import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error';
import Form from '../Form/Form';
import Admin from '../Admin/Admin';
import EditMethod from '../EditMethod/EditMethod';
import NewMethod from '../NewMethod/NewMethod';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Form} exact />
          <Route path="/Admin" component={Admin} />
          <Route path="/EditMethod" component={EditMethod} />
          <Route path="/NewMethod" component={NewMethod} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
