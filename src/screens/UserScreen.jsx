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


// This Page contains:
// - Layout/Styling for Tabs 
// - renderScene imports each individual tabview screen

export default function UserScreen({ navigation }){
  const userData = useRecoilValue(userAtom);
  const headers = useRecoilValue(headersAtom);

  // CLEAR INPUT ON PAGE LOAD
  useEffect(() => {
    navigation.addListener('focus', () => {
      // alert("visited!");
    });
  },[navigation]);


  // LAYOUT FOR TABS
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  // ROUTES FOR TABS
  const [routes] = React.useState([{
    key: "first",
    title: "Account"
  }, {
    key: "second",
    title: "About"
  }]);

  // RENDERING FOR TABS
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {

          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
           });

        // styling for selected / unselected & color modes
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
        // style={{marginTop: StatusBar.currentHeight}} 
      />
  );
}
