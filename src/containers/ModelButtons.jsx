import React from 'react';
import { Box, HStack } from 'native-base';   
import { AnimatedButton } from './InputButtons';
import l from '../../helpers/consolelog';


export function ModelButtons({setFirstValue, setSecondValue, setThirdValue, setEditLevel, model, type}) {

  const colors = ["indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "amber", "orange"]

  return (
    <Box>
      <HStack>
        <AnimatedButton 
          model={model} type={type}
          value={1} color={colors[0]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton 
          model={model} type={type}
          value={2} color={colors[1]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton 
          model={model} type={type}
          value={3} color={colors[2]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
      </HStack>
      <HStack ml="10">
        <AnimatedButton 
          model={model} type={type}
          value={4} color={colors[3]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton
          model={model} type={type}
          value={5} color={colors[4]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton 
          model={model} type={type}
          value={6} color={colors[5]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
      </HStack>
      <HStack>
        <AnimatedButton 
          model={model} type={type}
          value={7} color={colors[6]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton 
          model={model} type={type}
          value={8} color={colors[7]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
        <AnimatedButton 
          model={model} type={type}
          value={9} color={colors[8]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
          setEditLevel={setEditLevel}
        />
      </HStack>
    </Box>
	)
}


