import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router-dom';
import TopArtists from '../TopArtists/TopArtists';
import Error404 from '../Error404/Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={() => <TopArtists />} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
