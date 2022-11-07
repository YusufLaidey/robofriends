import React, { Component } from "react";

import CardsList from "./components/CardsList";
import { robots } from "./components/robot";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

 onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })
 }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="h1">Robo friends!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardsList robots = { filteredRobots }/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App
