import React from "react";
import { Pressable, Heading } from "native-base";
import { getApiCall } from "../api/MomentsApi";
import l from "../../helpers/consolelog";

const UpdateMomentsList = ({showMoments, setShowMoments}) => {
		
		const togglePressable = () => { setShowMoments(!showMoments) }

	return (
	<Pressable onPress={togglePressable} >
  	<Heading fontSize="xl" alignSelf={{base:"center"}}>
      View Recent Moments
    </Heading>
	</Pressable>
	)
}

export default UpdateMomentsList;
