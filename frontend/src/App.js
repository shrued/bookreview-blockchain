import React, { Component } from "react";
import "./App.css";
import Status from "./components/status";
import Submit from "./components/submit";
import Reviews from "./components/reviews";
import axios from "axios";

const endpoint = "/mine_block";
class App extends Component {
  componentWillMount() {
    axios.get(endpoint);
  }
  render() {
    return (
      <div className="App">
        <Status />
        <Submit />
        <Reviews />
      </div>
    );
  }
}

export default App;
