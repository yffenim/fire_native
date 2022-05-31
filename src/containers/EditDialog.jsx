import React, { useState, useRef } from 'react';
import { Center, Button, AlertDialog, Text, Box } from 'native-base';
import { EditSubmitButton, EditCancelButton } from './EditEntryButtons';
import EditEntry from './EditEntry';


export default function EditDialog({
  isOpen, 
  setIsOpen, 
  closeRow, 
  rowMap, 
  id, 
  entry, 
  updated,
  urlModel
}) {

	const [editLevel, setEditLevel] = useState(null);
  const title = entry["title"];
  const current_level = entry["level"];
  const cancelRef = React.useRef(null);

  const model = "default" 

  const onClose = () => {
    setIsOpen(false); // close dialog 
    closeRow(rowMap, id); // close row
  };


  return  (
    <Box>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Edit Entry</AlertDialog.Header>
          <AlertDialog.Body>
            <EditEntry
              editLevel={editLevel}
              setEditLevel={setEditLevel}
              current_level={current_level}
              updated={updated} 
              title={title} 
            />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <EditCancelButton onClose={onClose} cancelRef={cancelRef} />
              <EditSubmitButton 
                onClose={onClose} 
                level={editLevel}
                id={id} urlModel={urlModel}
              />
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  )
};
