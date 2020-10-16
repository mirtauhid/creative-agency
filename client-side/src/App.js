import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import './App.css';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Customer from './Components/Customer/Customer/Customer';
import Admin from './Components/Admin/Admin/Admin';
import { useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login/:id">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
