import React from 'react';

  // Generate a random value 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Select a gradient based on the current state value
  function selectGradient(gradientContainer){
    switch (gradientContainer) {
      case 0: 
        gradientContainer = defaultStyle // also default
      case 1:
        l("Case is: ", 1);
        setGradientContainer(GradientSelector0);
        break;
      case 'moments':
        url = momentsURL;
        break;
      case 'seconds':
        url = secondsURL;
        break;
      case 'thirds':
        url = thirdsURL;
        break;
      default:
      // change this to default styling
      gradientContainer = defaultStyle
    }
}


{/* NOT CURRENT IN CASE? */}
function GradientSelector0() {
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
}
