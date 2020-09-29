import React, { Component } from 'react';
import './App.css';

import UserCard from './components/UserCard/UserCard';
import { fetchUserData } from './fetch/index';

class App extends Component {
  state = {
    user: {}
  };

  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
