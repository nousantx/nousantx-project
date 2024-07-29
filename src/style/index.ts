import { useLayoutEffect } from "react";
import tenoxui, { use } from "tenoxui";
import { property } from "./lib/property";
import { values } from "./lib/value";
import { classNames, classUtils } from "./lib/classes";
import { breakpoint } from "./lib/breakpoint";
import { mergeObjects } from "@/utils/mergeObjects";

export const styler = () => {
  useLayoutEffect(() => {
    use({
      property,
      values,
      classes: mergeObjects(classNames, classUtils),
      breakpoint
    });

    tenoxui();
  }, []);
};
