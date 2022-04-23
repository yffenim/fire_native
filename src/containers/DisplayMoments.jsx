import React, { useState, useEffect } from 'react';
import { Heading, Pressable, Box } from "native-base";
import DisplayMomentsList from './DisplayMomentsList';
import ViewRecentMoments from './ViewRecentMoments';
import l from '../../helpers/consolelog';


export default function DisplayModel0({moments, updateDisplay}) {
  const [showMoments, setShowMoments] = useState(false);
  const listData = moments[0]

  return (
    <Box>
      <ViewRecentMoments
        showMoments={showMoments} 
        setShowMoments={setShowMoments} 
      />
      {showMoments &&
        <DisplayMomentsList 
          data={listData} 
          updateDisplay={updateDisplay}
      />}
    </Box>
  )}

