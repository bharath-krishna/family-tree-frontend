import React from 'react';
import './App.css';
import AppLayout from './components/applayout'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <AppLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
