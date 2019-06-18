// @jsx h

import { props } from "skatejs/dist/esnext";
import { h } from "preact";
import { Component } from "./util";

export default class extends Component {
  static events = ["submit"];
  state = {
    value: "initial load"
  };

  handleSelect = e => {
    alert(e.target.value)
    this.state = { value: e.target.value }
    // this.setState({
    //   value: e.target.value
    // })
  };


  render({ handleSelect }) {
    return (
      <div>
        <select onChange={handleSelect} >
          <option value="value1">value 1</option>
          <option value="value2">value 2</option>
          <option value="value3">value 3</option>
        </select>
        <br />
        you selected {this.state.value}
      </div>
    );
  }
}
