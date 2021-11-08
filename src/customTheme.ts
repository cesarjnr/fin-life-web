import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    fonts: {
      body: "Poppins"
    },
    colors: {
      customBlack: {
        50: "#f2f2f2",
        100: "#d9d9d9",
        200: "#bfbfbf",
        300: "#a6a6a6",
        400: "#8c8c8c",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#171717",
        900: "#0d0d0d"
      },
      customGreen: {
        50: "#dbffed",
        100: "#adffd2",
        200: "#7cffb6",
        300: "#4aff99",
        400: "#1aff7d",
        500: "#00e663",
        600: "#00b34c",
        700: "#008035",
        800: "#004e1e",
        900: "#001c05"
      }
    },
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              bg: "customBlack.800",
              _hover: {
                bg: "customBlack.800"
              },
              _focus: {
                bg: "customBlack.800"
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
  withDefaultColorScheme({ colorScheme: "customGreen" })
);

export default customTheme;
