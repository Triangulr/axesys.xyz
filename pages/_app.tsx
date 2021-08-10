import React, { memo } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "focus-visible";
import "inter-ui/inter.css";

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const App = ({ Component }: AppProps) => {
  return (
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: "dark",
        },
        fonts: {
          body: `Inter, ${fallbackFonts}`,
          heading: `Inter, ${fallbackFonts}`,
        },
        styles: {
          global: {
            body: {
              bg: "gray.900",
            },
          },
        },
      })}
    >
      <Component />
    </ChakraProvider>
  );
};

export default memo(App);
