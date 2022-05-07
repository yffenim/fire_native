import React from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import TabRouteFirst from "../containers/TabRouteFirst"
import TabRouteSecond from "../containers/TabRouteSecond"
import TabRouteThird from "../containers/TabRouteThird"


export const renderScene = SceneMap({
  first: TabRouteFirst,
  second: TabRouteSecond,
  third: TabRouteThird,
});

