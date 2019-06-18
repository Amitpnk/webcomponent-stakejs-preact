import { emit, withComponent } from "skatejs/dist/esnext";
import withRenderer from "@skatejs/renderer-preact/dist/esnext";

const withEvents = (Base = HTMLElement) =>
  class extends Base {

    static get observedAttributes() {
      (this.events || []).forEach(e => {
        const name = `on${e[0].toUpperCase() + e.substring(1)}`;

        Object.defineProperty(this.prototype, name, {
          get() {
            if (!this.__events[e]) {
              this[name] = () => {};
            }
            return this.__events[e];
          },
          set(fn) {
            this.__events[e] = detail => {
              fn(detail);
              emit(this, e, { detail });
            };
            if (this.triggerUpdate) {
              this.triggerUpdate();
            }
          }
        });
      });
      return super.observedAttributes;
    }
    __events = {};
  };

export const Component = withEvents(withComponent(withRenderer()));
