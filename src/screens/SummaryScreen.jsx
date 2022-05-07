import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
// import DisplayButtons from '../containers/DisplayButtons';
// import DisplayMomentsList from '../containers/DisplayMomentsList';
// import HideDisplayButton from '../containers/HideDisplayButton';
// import DisplaySecondsList from '../containers/DisplaySecondsList';
// import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
// import {CSVLink, CSVDownload} from 'react-csv';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, useWindowDimensions, Animated } from 'react-native';
import { renderScene } from '../presentations/renderScene'
// import { color } from '../styles/customStyles';


// layout for Summary Screen 
export default function SummaryScreen({ navigation }){
  const layout = useWindowDimensions();

const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([{
    key: "first",
    title: "Tab 1"
  }, {
    key: "second",
    title: "Tab 2"
  }, {
    key: "third",
    title: "Tab 3"
  }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {

          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
           });
        
          const color = index === i ? 
            useColorModeValue("#000", "#e5e5e5") :  // don't show title when selected
            useColorModeValue("#E94560", "#E94560");

          const bgcolor = index === i ? 
            useColorModeValue("secondary.300", "secondary.900") :
            useColorModeValue("primary.300", "darkBlue.300");

          const borderColor = index === i ? 
            "cyan.500" : 
            useColorModeValue("coolGray.200", "gray.400");
        
          return (
            <Box 
              borderBottomWidth="3"
              bg={bgcolor}
              borderColor={borderColor} 
              flex={1} alignItems="center" p="3"
            > 
              <Pressable 
                onPress={() => {
                  l(i);
                  setIndex(i);
                }}
              >
                <Animated.Text style={{color}}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
           )
        })}
    </Box>
  )
};

	return (
    <TabView 
      navigationState={{index,routes}} 
      renderScene={renderScene} 
      renderTabBar={renderTabBar} 
      onIndexChange={setIndex} 
      initialLayout={{width: layout.width}}
      // style={{marginTop: StatusBar.currentHeight}} 
    />
  );
}
