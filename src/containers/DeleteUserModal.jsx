import React, { useState } from 'react';
import { Modal, Box, FormControl, Button, Input } from 'native-base';
import l from '../../helpers/consolelog';

export default function DeleteUserModal({showModal, setShowModal, userData}) {
	const name = userData[0]["name"];
	const count = 5
	const questionText = "Are you sure you want to delete your account and lose all your data?";
	const [deleteBool, setDeleteBool] = useState(false);

	// delay delete to allow cancel
	function delayDelete() {
		setTimeout(function () {
			setDeleteBool(true);
			deleteUser();
			setShowModal(false);
		}, 3000);
	};
	
	// delete once delay ends
	function deleteUser() {
		l(`deleting ${name}'s data... goodbye!`);
	};

	return (
		<Modal 
			isOpen={showModal} 
			onClose={() => setShowModal(false)}
		>
        <Modal.Content maxWidth="400px">
					<Modal.Body>
						{questionText}
						Deleting in...{count}
					</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
							<Button 
								variant="ghost" 
								colorScheme="blueGray" 
								onPress={() => {
									setDeleteBool(false);
									setShowModal();
            		}}>
                Cancel
							</Button>

              <Button onPress={() => {
								delayDelete();
            	}}>
                Delete
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
	)
};
