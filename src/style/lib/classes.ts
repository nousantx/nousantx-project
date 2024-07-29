import { colors } from "./color";
import { useColor, useRgbColor } from "@/utils/useColor";
import { transformClasses } from "@/utils/transformClass";

export const classNames = transformClasses({
  "text-gradient": {
    "--deg": "63deg",
    "--gradient1": "var(--amber-300)",
    "--gradient2": "var(--yellow-500)",
    "--text-gradient": "linear-gradient(var(--deg), var(--gradient1), var(--gradient2))",
    background: "var(--text-gradient)",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    webkitTextFillColor: "transparent",
    textFillColor: "transparent"
  },
  btn: {
    border: "none",
    fontFamily: "inherit"
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  border: {
    borderStyle: "solid",
    borderWidth: "1px"
  }
});

export const classUtils = {
  color: useColor(colors, "text"),
  backgroundColor: useColor(colors, "bg"),
  borderColor: useColor(colors, "bdr"),
  "--shadow-color": useRgbColor(colors, "shadow"),
  display: {
    flex: "flex",
    block: "block",
    none: "none"
  },
  position: {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed"
  },
  justifyContent: {
    "space-between": "space-between"
  },
  flexWrap: {
    "flex-wrap": "wrap"
  },
  boxShadow: {
    "shadow-sm": "0 1px 2px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))",
    shadow:
      "0 1px 3px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))",
    "shadow-md":
      "0 4px 6px -1px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))",
    "shadow-lg":
      "0 10px 15px -3px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))",
    "shadow-xl":
      "0 20px 25px -5px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.1))",
    "shadow-2xl": "0 25px 50px -12px rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.25))",
    "shadow-inner": "inset 0 2px 4px 0 rgb(var(--shadow-color, 0 0 0) / var(--shadow-opa, 0.05))",
    "shadow-none": "0 0 #0000"
  }
};
