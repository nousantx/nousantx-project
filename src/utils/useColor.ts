type Colors = { [color: string]: string[] };

// utility to convert hex into rgb color
function hexToRgb(hex: string): string {
  hex = hex.replace(/^#/, "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r} ${g} ${b}`;
}

// generate range of color classNames
export function useColor(colors: Colors, prefix: string, selectedColors?: string[]) {
  const shadeMapping = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const colorObject: { [className: string]: string } = {};

  const colorsToProcess = selectedColors && selectedColors.length > 0 ? selectedColors : Object.keys(colors);

  colorsToProcess.forEach(color => {
    const shades = colors[color].length === 11 ? shadeMapping : shadeMapping.slice(1, 10);
    shades.forEach((shade, index) => {
      const hex = colors[color][index];
      const rgb = hexToRgb(hex);
      colorObject[`${prefix}-${color}-${shade}`] = `rgb(${rgb} / var(--${prefix}-opa, 1))`;
    });
  });

  return colorObject;
}

export function useRgbColor(colors: Colors, prefix: string, selectedColors?: string[]) {
  const shadeMapping = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const colorObject: { [className: string]: string } = {};

  const colorsToProcess = selectedColors && selectedColors.length > 0 ? selectedColors : Object.keys(colors);

  colorsToProcess.forEach(color => {
    const shades = colors[color].length === 11 ? shadeMapping : shadeMapping.slice(1, 10);
    shades.forEach((shade, index) => {
      const hex = colors[color][index];
      // const rgb = hexToRgb(hex);
      colorObject[`${prefix}-${color}-${shade}`] = hexToRgb(hex);
    });
  });

  return colorObject;
}
