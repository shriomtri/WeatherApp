import React, { Component } from 'react';
import './App.css';

const baseURL = "https://api.github.com/users/";


class App extends Component{

  render(){

    return (
      <div className="container main card">
        <div className="row">
          <div className="col-md-6 titleColumn"></div>
          <div className="col-md-6 searchColumn"></div>
        </div>
      </div>
    );

  }

}

export default App;
