
import { NavLink, Route, Switch } from "react-router-dom";
import React from "react";
import { hot } from "react-hot-loader";



class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
      app is up and ready
      </div>
    );
  }
}


export default hot(module)(App);
