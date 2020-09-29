import React, { Component } from 'react';
import './App.css';

import UserCard from './components/UserCard/UserCard';
import { fetchUserData } from './fetch/index';

class App extends Component {
  state = {
    user: 'dtebo',
    userdata: {}
  };

  componentDidMount(){
    fetchUserData(this.state.user)
      .then(res => {
        console.log("App: DT: ", res);
        
        //Save the response to state
        this.setState({
          userdata: res
        });
      });
  }

  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
