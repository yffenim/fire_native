import React, { useState } from 'react';
import { useRecoilValue, useRecoilRefresher_UNSTABLE  } from 'recoil';
import { Text, Button } from 'native-base';
import l from '../../helpers/consolelog';
import DataFlatList from './DataFlatList';
import { fetchSecondsData } from '../functions/fetchModelSelector';


// // subscribe to the selector 
// Data returned from Select is READ-ONLY
export const SecondsList= () => {
    const data = useRecoilValue(fetchSecondsData);
    const refresh = useRecoilRefresher_UNSTABLE(fetchSecondsData);

    return (
        <DataFlatList 
            data={data} 
            refresh={refresh} 
        />
    );
}


