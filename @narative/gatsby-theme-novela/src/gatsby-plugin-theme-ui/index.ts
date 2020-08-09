import merge from 'lodash/merge';

import colors from './colors';
import tags from './tags';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  title: "'Title',system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto",
  body:
    "'Text',system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const fontsWeight = {
  regular: "300",
  bold: "600",
};

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

export default merge({
  initialColorMode: 'dark',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  fontsWeight,
  breakpoints,
  tags,
});
