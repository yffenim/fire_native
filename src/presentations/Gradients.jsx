import React from 'react';
import { VStack } from "native-base";
import { DownloadButton, EmailButton } from '../containers/ExportButtons'
import { EasterEggText } from '../presentations//EasterEggText';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet }  from "react-native";
import l from "../../helpers/consolelog.js";

// This Page Contains ALL gradient containers
// Inside containers, we have the Buttons

// I am aware this is very unDRY, however, the
// <LinearGradient> component does not allow 
// passing in variables into the color prop



export const defaultStyle = <LinearGradient
      colors={["#0f0c29", "#302b63"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>;


export function GradientSelector0() {
  return (
    <LinearGradient
      colors={["#8360c3", "#2ebf91"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector1() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector2() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector3() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector4() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector5() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector6() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector7() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector8() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
}

export function GradientSelector9() {
  return (
    <LinearGradient
      colors={["#fc5c7d", "#6a82fb"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <VStack space={5}>
        <DownloadButton />
        <EasterEggText />
      </VStack>
    </LinearGradient>
  )
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

