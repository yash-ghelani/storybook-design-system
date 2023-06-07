import React from 'react';
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Global, css } from '@emotion/react';
import { GlobalStyle } from '../src/shared/global';


const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];

// /*
//  * Global decorator to apply the styles to all stories
//  * Read more about them at:
//  * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
//  */
// export const decorators = [
//   Story => (
//     <>
//       <GlobalStyle />
//       <Story />
//     </>
//   ),
// ];


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
