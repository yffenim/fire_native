import React, { useState, useEffect } from 'react';
import { Heading, Pressable, Box } from "native-base";
import DisplayMomentsList from './DisplayMomentsList';
import UpdateMomentsList from './UpdateMomentsList';
import l from '../../helpers/consolelog';


export default function DisplayModel0({moments, updateDisplay, editMode, setEditMode}) {
  const [showMoments, setShowMoments] = useState(false);
  const listData = moments[0]

  function liftHandleEdit(id) {
    // l('liftHandleEdit id:', id);
    changeInputMoment(id);
  }

  return (
    <Box>
      <UpdateMomentsList 
        showMoments={showMoments} 
        setShowMoments={setShowMoments} 
      />
        {showMoments &&
          <DisplayMomentsList 
            data={listData} 
            liftHandleEdit={liftHandleEdit}
            updateDisplay={updateDisplay}
            editMode={editMode}
            setEditMode={setEditMode}
        />}
    </Box>
  )}

