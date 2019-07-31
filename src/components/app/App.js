import React from 'react';
import './App.css';
import Header from '../header/Header.js';
import { Switch, Route } from 'react-router-dom';
import TopArtists from '../TopArtists/TopArtists';
import Error404 from '../error404/Error404';

const App = () => (

    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={() => <TopArtists />} />
        <Route component={Error404} />
      </Switch>
    </div>

);

export default App;
