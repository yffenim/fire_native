import React from 'react';
import { Modal, Button, Center, FormControl, Input, Text } from 'native-base';
import l from '../../helpers/consolelog';

// TODO: Finish Edit

export default function EditModal({setShowModal, showModal, editId, item, level, updated}) {
  // l("showModal on EditModal: ", showModal);
  l("editId: ", editId);
  l("level: ",level);
  l("item ", item);
  // l("Item: ", item);

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edit Moment</Modal.Header>
          <Modal.Body>
            <Text>Level: </Text>
            <Text>ID: {editId} </Text>
            <Text>Last Updated: </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
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
