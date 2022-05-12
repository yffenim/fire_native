import React, { useState }  from 'react';
// import { Button } from 'native-base';
import { Center, Text, Box, Heading } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeList from '../containers/SwipeList';
import { atom, selector, useRecoilState, useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
import API from '../functions/API';
import l from '../../helpers/consolelog';
// import { modelsAtom } from '../atoms/modelsAtom';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet }  from "react-native";



export default function ThirdsScreen() {

  return ( 
    <Box>
      <LinearGradient
        colors={["#09203f", "#537895"]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
 
      </LinearGradient>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
