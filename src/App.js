import React, { Component } from "react";

import CardsList from "./components/CardsList";
import { robots } from "./components/robot";
import SearchBox from "./components/SearchBox";

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
    const filteredRobots = this.state.robots.filter( robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="h1">Robo friends!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardsList robots = { filteredRobots }/>
      </div>
    );
  }
}

export default App
