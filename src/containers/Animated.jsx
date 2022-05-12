import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Heading, useColorModeValue, Pressable, Button} from "native-base";
// import { modelsAtom } from '../atoms/modelsAtom';
// import { useRecoilState } from 'recoil';
import Communications from 'react-native-communications';
import { DownloadButton, EmailButton } from '../containers/ExportButtons'
import { EasterEggText } from '../containers/EasterEggText';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet }  from "react-native";
import l from "../../helpers/consolelog.js";

// API DATA NEEDS: user email
// on click anywhere = change colours!

export default function ExportScreen({ navigation }){
  return (
    <Box>
      <Pressable onPress={()=>{l("clicked")}}>
        <LinearGradient
          colors={["#09203f", "#537895"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <VStack space={5}>  
            <DownloadButton />
            <EmailButton />
            <EasterEggText />
          </VStack>
        </LinearGradient>
      </Pressable>
    </Box>
  );
}


const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
