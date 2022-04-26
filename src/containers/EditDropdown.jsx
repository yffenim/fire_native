import React from 'react';
import { Select, Box, Text, Center } from 'native-base';
import { Feather } from '@expo/vector-icons';
import l from '../../helpers/consolelog';

const EditDropdown = ({level, setLevel}) => {

	return (
		<Center>
      <Box w="3/4" maxW="200">
        <Select selectedValue={level} minWidth="100" accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
        // bg: "emeralds.600",
        endIcon: <Feather name="check" size={4} />
      }} mt={1} onValueChange={itemValue => setLevel(itemValue)}>
          <Select.Item label="1" value="1" />
          <Select.Item label="2" value="2" />
          <Select.Item label="3" value="3" />
          <Select.Item label="4" value="4" />
          <Select.Item label="5" value="5" />
          <Select.Item label="6" value="6" />
          <Select.Item label="7" value="7" />
          <Select.Item label="8" value="8" />
          <Select.Item label="9" value="9" />
        </Select>
      </Box>
		</Center>
	)
};

export default EditDropdown;
