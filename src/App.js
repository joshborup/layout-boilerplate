import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/shared/Header";
import LandingContainer from './components/landing/LandingContainer';
import './Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <main>
          <Switch>
            <Route exact path='/' component={LandingContainer} />
            <Route path='/' render={() => {
              return <div>Sup</div>
            }} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
