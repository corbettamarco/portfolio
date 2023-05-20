import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    portfolio: {
      50: "#d9ffff",
      100: "#acfeff",
      200: "#7efcfe",
      300: "#4efbfd",
      400: "#29fafd",
      500: "#18e1e3",
      600: "#02afb1",
      700: "#007d7e",
      800: "#004c4d",
      900: "#001b1b",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "-webkit-radial-gradient(rgba(0,64,170,1) 0%, rgba(5,114,147,0.8803418803418803) 0%, rgba(26,32,44,1) 100%)",
        scrollBehavior: "smooth",
        textColor: "white"
      },
    },
  },
});
