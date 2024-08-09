import * as propsLib from "@tenoxui/property";

const cssVariableProps = {
  rotate: "--rotate",
  "text-opacity": "--text-opa",
  "border-opacity": "--bdr-opa",
  "bg-opacity": "--bg-opa",
  "shadow-color": "--shadow-color",
  "shadow-opacity": "--shadow-opa"
};

const regProps = {
  all: "all",
  txf: "color",
  trans: "transform",
  shadow: "boxShadow",
  "br-tl": "borderTopLeftRadius",
  "br-bl": "borderBottomLeftRadius",
  "br-top": ["borderTopLeftRadius", "borderTopRightRadius"]
};

const customValueProps = {
  moveX: {
    property: "transform",
    value: "translateX({value})"
  },
  moveXly: {
    property: "transform",
    value: "translateY({value})"
  },
  transform: {
    property: "transform",
    value: "rotate(var(--rotate))"
  },
  bgo: {
    property: "backgroundColor",
    value: "blue"
  }
};

export const property = {
  ...propsLib.default,
  ...cssVariableProps,
  ...regProps,
  ...customValueProps
};
