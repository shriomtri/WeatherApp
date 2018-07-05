import React, { Component } from 'react';
import './App.css';

const baseURL = "https://api.github.com/users/";

function Title() {
  return(
    <div>
      <img className="gifImg" src="https://octodex.github.com/images/maxtocat.gif"/>
      <div className="title">
        <h3>GitHub</h3>
        <h5>Find out your self on github.</h5>
      </div>
    </div>
  );
  
}


class App extends Component{

  render(){

    return (
      <div className="container main card">
        <div className="row">
          <div className="col-md-6 titleColumn">
            <Title />
          </div>
          <div className="col-md-6 searchColumn"></div>
        </div>
      </div>
    );

  }

}

export default App;
