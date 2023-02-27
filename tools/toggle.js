import { html } from "lit-html";

export default function color(globalCallbacks) {
  const ui = {
    displayName: "toggle",
    width: "100px",
    height: "50px",
  };

  const state = {
    toggle: false,
  };

  const inports = {};

  const outports = {
    toggle: {
      type: "boolean",
      value: state.toggle,
    },
  };

  function onInput(e) {
    state.toggle = e.target.checked;
  }

  const init = () => {
    globalCallbacks.log("initializing!!");
  };

  const render = () => {
    return html`<style>
        input {
          width: 100%;
        }
      </style>
      <input type="checkbox" ?checked=${state.toggle} @input=${onInput} />`;
  };

  return { ui, inports, outports, state, init, render };
}