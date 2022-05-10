import React, { ErrorBoundary }  from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable, Input} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';
import { DetailsWithSuspense } from '../functions/selectors/DetailsWithSuspense';
// import { todoListState } from '../atoms/todoListState';
// import TodoItemCreator from '../atoms/TodoItemCreator';


export default function TabRouteSecond() {




  return(
    <Center>
      <Text>Second </Text>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <DetailsWithSuspense />
      </React.Suspense>
    </Center>
  )
}




