import React from 'react';
import { useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
// import { useRecoilValue } from 'recoil';
// import { Text, Button } from 'native-base';
import l from '../../helpers/consolelog';
import DataFlatList from './DataFlatList';
import { fetchMomentsData } from '../functions/fetchModelSelector';


// This child component here is subscribed to the selector fetchSecondsData
// Data returned from Selector is READ-ONLY
export const MomentsList= () => {
    const data = useRecoilValue(fetchMomentsData);
    // const refresh = () => {}
    const refresh = useRecoilRefresher_UNSTABLE(fetchMomentsData);

    return (
        <DataFlatList 
            data={data}
            refresh={refresh} 
        />
    );
}


