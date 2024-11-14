"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ChakraProvider value={defaultSystem}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ChakraProvider>
  );
}
