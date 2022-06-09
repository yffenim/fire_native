import React, { useState } from 'react';
import { Modal, FormControl, Button, Text, Center } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import l from '../../helpers/consolelog';

// jester@fester.com

// right now you are making a DELETED SCREEN / GOOD BYE SCREEN
// which you will load w/ boolean

export default function DeleteUserModal({showModal, setShowModal, counter, setDeleteBool}) {
	const questionText = "Are you sure you want to delete your account and lose all your data?";



	return (
		<Modal 
			isOpen={showModal} 
			onClose={() => setShowModal(false)}
		>
        <Modal.Content maxWidth="130px">
					<Modal.Body>
						<Text>
							Deleting in {counter === 0 ? "now!" : counter}
						</Text>
					</Modal.Body>
					<Modal.Footer>
							<Button mr="4"
								variant="outline"
								colorScheme="rose"
								onPress={() => {
									setDeleteBool(false);
									setShowModal();
            		}}>
                Cancel
							</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
	)
};
