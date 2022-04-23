import React from "react";
import { useColorMode, Switch, Text, HStack } from "native-base";

export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" mt="3">
      <Text>Dark</Text>
      <Switch
        colorScheme="indigo"
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}


