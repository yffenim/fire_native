import React, { useState } from 'react';
import { Modal, Button, Center, HStack,Input, Text, Spacer } from 'native-base';
import l from '../../helpers/consolelog';
import { patchMomentRequest } from '../functions/MomentsApiRequests.jsx';
import { patchSecondRequest } from '../functions/SecondsApiRequests.jsx';
import { patchThirdRequest } from '../functions/ThirdsApiRequests.jsx';
import EditDropdown from './EditDropdown';

// TODO:  
// (1) RENDER MODEL NAME
// (2) Make Date/Time -> format function, make editable


export default function EditModal({setShowModal, showModal, eId, eLevel, eUpdated, onPressCall}) {
  const [level, setLevel] = useState(null)

  // const patchApiCall = async () => {
  //   switch (model) {
  //     case "alertness" : await patchMomentRequest(eId, level);
  //     break;
  //     case "second" : await patchSecondRequest(eId, level);
  //     break;
  //     case "third" : await patchThirdRequest(eId, level);
  //     break;
  //     default: l("Something is wrong in SubmitButton()");
  //   }
// };
  
  const patchApiCall = async () => {
    patchMomentRequest(eId, level);
    onPressCall();
  }

  const handleSaveButton = () => {
    patchApiCall();
  };


  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />

          <Modal.Header>
            <HStack>
              <Text bold>Current Level: </Text>
              <Text>{eLevel}</Text>
            </HStack>
            <HStack>
              <Text bold>Current Time: </Text>
              <Text>{eUpdated}</Text>
            </HStack>
          </Modal.Header>

          <Modal.Body>
            <HStack>
              <Text>New Level: </Text>
              <EditDropdown setLevel={setLevel} level={level}/>
            </HStack>
            <HStack>
              <Text>New Time: </Text>
              <Input h="15" w="150" placeholder="change to timepicker"></Input>
            </HStack>
          </Modal.Body>

          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" 
                onPress={() => {
                  setShowModal(false);
              }}>
                Cancel
              </Button>
              <Button 
                onPress={() => {
                  setShowModal(false);
                  handleSaveButton();
              }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>

        </Modal.Content>
      </Modal>
    </Center>
  )
}
