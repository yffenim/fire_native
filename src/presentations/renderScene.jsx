import React from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import SettingsAccount from "../screens/SettingsAccount"
import SettingsAbout from "../screens/SettingsAbout"

export const renderScene = SceneMap({
  first: SettingsAccount,
  second: SettingsAbout
});

