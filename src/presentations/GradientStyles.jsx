import React from 'react';
import { VStack, Center, Text, Box, Heading, useColorModeValue, Pressable, Button} from "native-base";
// import { modelsAtom } from '../atoms/modelsAtom';
// import { useRecoilState } from 'recoil';
import Communications from 'react-native-communications';
import { DownloadButton, EmailButton } from '../containers/ExportButtons'
import { EasterEggText } from '../presentations//EasterEggText';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet }  from "react-native";
import l from "../../helpers/consolelog.js";

// This page contains all gradient styles


export function defaultStyle() {
  return (
    <LinearGradient
      colors={["#000e21", "#000e21"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector1() {
  return (
    <LinearGradient
      colors={["#fffbd5", "#b20a2c"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector2() {
  return (
    <LinearGradient
      colors={["#c6ffdd", "#f7797d"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector3() {
  return (
    <LinearGradient
      colors={["#434343", "black"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector4() {
  return (
    <LinearGradient
      colors={["#00b09b", "#96c93d"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector5() {
  return (
    <LinearGradient
      colors={["#ff6e7f", "#bfe9ff"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector6() {
  return (
    <LinearGradient
      colors={["#0099f7", "#f11712"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector7() {
  return (
    <LinearGradient
      colors={["#5a3f37", "#2c7744"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector8() {
  return (
    <LinearGradient
      colors={["#0f0c29", "#302b63"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

export function GradientSelector9() {
  return (
    <LinearGradient
      colors={["#8360c3", "#2ebf91"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EmailButton />
        <EasterEggText />
        </VStack>
      </LinearGradient>
  )
};

// General Styling for Gradient
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
