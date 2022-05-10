import React, { useState } from 'react';
import { selector, useRecoilValue, useRecoilState } from 'recoil';
import { Text, Button } from 'native-base';
import l from '../../helpers/consolelog';
import DataFlatList from './DataFlatList';
import { fetchSecondsData } from '../functions/fetchModelSelector';


// // subscribe to the selector 
// Data returned from Select is READ-ONLY
export const SecondsList= () => {
    const data = useRecoilValue(fetchSecondsData);
    const refresh = () => {}

    return (
        <DataFlatList 
            data={data} 
            refresh={refresh} 
        />
    );
}


