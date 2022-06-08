import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, useWindowDimensions, Animated } from 'react-native';
import { renderScene } from '../presentations/renderScene' 
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import l from "../../helpers/consolelog.js";

// RIGHT NOW YOU ARE MOVING THE USER API CALL
// FROM THE GENERAL API PAGE TO A USER SPECIFIC PAGE


// This Page contains:
// - Layout/Styling for Tabs 
// - renderScene imports each individual tabview screen

export default function UserScreen({ navigation }){
  const userData = useRecoilValue(userAtom);
  const headers = useRecoilValue(headersAtom);

  // LAYOUT FOR TABS
  const layout = useWindowDimensions();

  // State for choosing the Tab Bar
  const [index, setIndex] = React.useState(0);

  // Routes for the Tab bar
  const [routes] = React.useState([{
    key: "first",
    title: "Account"
  }, {
    key: "second",
    title: "About"
  }]);

  // Rendering the Tab Bar + Styling
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {

          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
           });

        // styling for selected / unselecte & color modes
          const color = index === i ? 
            // useColorModeValue("#1A1A2E", "#1A1A2E") :  // don't show title when selected
            // useColorModeValue("#E94560", "#E94560");
            useColorModeValue("#addbff", "#addbff") :  
            useColorModeValue("#0077e6", "#0077e6"); // selected

          const bgcolor = index === i ? 
            // useColorModeValue("#002851", "#002851") : 
            // useColorModeValue("#0F3460", "#0F3460");
            useColorModeValue("#002851", "#002851") :
            useColorModeValue("#0F3460", "#0F3460"); // sekected


          const borderColor = index === i ? 
            "#0F3460" : 
            useColorModeValue("#16213E", "#16213E");
        
          return (
            <Box 
              // borderBottomWidth="1"
              bg={bgcolor}
              borderColor={borderColor} 
              flex={1} alignItems="center" p="3"
            > 
              <Pressable 
                onPress={() => {
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
      // setModel={setModel}
      // style={{marginTop: StatusBar.currentHeight}} 
    />
  );
}
