import React, { Component } from "react";

//Components
import CardList from "./CardList";
import SearchBox from "./SearchBox";

//Enums
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
