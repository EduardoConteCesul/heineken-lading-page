import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        header: {
          iconsHeader: { value: "#1f5c2c"},
          hoverIconsHeader: { value: "#257c39"}
        }
      }
    },
  }
});

export const system = createSystem(defaultConfig, customConfig);