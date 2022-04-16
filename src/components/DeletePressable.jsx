import React from 'react';
import { Pressable, Text, useToast, Box } from 'native-base';
import l from '../../helpers/consolelog';

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


export default function DeletePressable({item, updateDisplay}) {

	const deleteApiCall = (item) => {
    l("Making Delete Api Request for ", item);
		let id = item.item
    let deleteURL = momentsURL + id
    fetch(deleteURL, {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
				updateDisplay();
				// alert("Level Deleted!");
			}
      throw new Error("Network response was not ok.");
		})
		.catch((err) => l(err));
		};

  const toast = useToast();


	return (
		<Pressable 
			onPress={()=>{
				deleteApiCall({item});
					toast.show({
        		render: () => {
							return (
								<Box bg="secondary.600" px="2" py="1" rounded="sm" mb={5}>
                  Moment Deleted!
								</Box>
									)
        				}
					});					
			}}>
			<Text>DELETE</Text>
		</Pressable>
	)
}

// const styles
