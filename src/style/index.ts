import { useLayoutEffect } from "react";
import tenoxui, { use } from "tenoxui";
import { property as txProps } from "./lib/property";
import { values as txValues } from "./lib/value";
import { classNames, classUtils } from "./lib/classes";
import { breakpoint } from "./lib/breakpoint";
import { mergeObjects } from "@/utils/mergeObjects";

export const styler = ({ property = {}, values = {}, classes = {} } = {}) => {
  useLayoutEffect(() => {
    use({
      property: [{ ...txProps, ...property }],
      values: { ...txValues, ...values },
      classes: mergeObjects(classNames, classUtils, classes),
      breakpoint
    });

    tenoxui();
  }, []);
};
