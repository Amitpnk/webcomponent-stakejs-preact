// @jsx h

import { props } from "skatejs/dist/esnext";
import { h } from "preact";
import { Component } from "./util";

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Webcomponent SkateJS & Preact</h1>
        <section>
          <custom-message msg="my first web component">
          </custom-message>

          <custom-select></custom-select>
        </section>
      </div>
    );
  }
}
