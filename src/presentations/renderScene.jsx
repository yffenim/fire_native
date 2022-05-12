import React from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import SettingsAccount from "../containers/SettingsAccount"
import SettingsAbout from "../containers/SettingsAbout"


export const renderScene = SceneMap({
  first: SettingsAccount,
  second: SettingsAbout
});

