// @jsx h

import { props } from "skatejs/dist/esnext";
import { h } from "preact";
import { Component } from "./util";

export default class extends Component {
  static props = {
    msg: props.string,
  };
  render() {
    return (
      <div>
        {this.props.msg}
      </div>
    );
  }
}
