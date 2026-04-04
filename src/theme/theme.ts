import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heineken: { value: "HEINEKEN Core', sans-serif" },
      },
    },
  }
});

export const system = createSystem(defaultConfig, config);