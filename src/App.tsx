import React, { FunctionComponent } from 'react';
import Home from './containers/Home';
import Post from './components/post/Post';
import User from './components/User';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

const App: FunctionComponent = () => {
  return (
    <Router>
      <NavBar />
      <div className="App container mx-auto px-4">
        <Switch>
          <Route exact path="/post/:postId">
            <Post />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
