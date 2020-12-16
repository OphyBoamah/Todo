import { extendTheme } from '@chakra-ui/react';

const breakpoints = ['30em', '48em', '62em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontSize: 'md',
        fontFamily: '"Poppins", sans-serif',
        lineHeight: 'tall',
      },
    }),
  },
  ...breakpoints,
  fonts: {
    heading: '"Poppins" ,sans-serif',
    display: '"Poppins" ,sans-serif',
    medium: '"Poppins" ,sans-serif',
    light: '"Poppins" ,sans-serif',
    body: '"Poppins", sans-serif',
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem',
  },
  colors: {
    brand: {
      orange: '#fe7b19',
      lightBlue: '#0093b3',
      darkBlue: '#1b2740',
    },
    orangeButton: {
      500: '#fe7b19',
      600: '#df670b',
    },
    greenButton: {
      500: '#2dce89',
      600: '#188d5a',
    },
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem',
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem',
  },
});
