import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    fonts: {
      body: "Poppins"
    },
    colors: {
      black: {
        50: "#d9d9d9",
        100: "#bfbfbf",
        200: "#a6a6a6",
        300: "#8c8c8c",
        400: "#737373",
        500: "#595959",
        600: "#404040",
        700: "#171717",
        800: "#0d0d0d",
        900: "#000000"
      },
      green: {
        50: "rgb(0, 210, 91)",
        100: "rgba(0, 210, 91, .3)",
        200: "rgba(0, 210, 91, .05)"
      },
      red: {
        50: '#ffe6df',
        100: '#ffbab0',
        200: '#ff8e7f',
        300: '#ff614c',
        400: '#ff351a',
        500: '#e61b00',
        600: '#b41300',
        700: '#810b00',
        800: '#500400',
        900: '#210000',
      }
    },
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              bg: "black.700",
              _hover: {
                bg: "black.700"
              },
              _focus: {
                bg: "black.700"
              },
              _placeholder: {
                color: "whiteAlpha.400"
              }
            }
          }
        }
      }
    }
  },
  withDefaultColorScheme({ colorScheme: "green" })
);

export default customTheme;
