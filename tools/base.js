import { html } from "lit-html";

const config = {
  inports: {
    text: {
      type: "string",
      value: "hello",
    },
  },
  outports: {},
  state: {},
  ui: {
    displayName: "base",
    width: 200,
    height: 200,
  },
};

function base(inports, outports, state) {
  const resize = () => {};

  const init = () => {
    console.log("init");
  };

  const render = () => {
    return html`<div>${inports.text}</div>`;
  };

  return { resize, render };
}

export default { config, tool: base };
