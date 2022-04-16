import React from "react";
import l from "../../helpers/consolelog";

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const momentsURL = 'http://localhost:3000/api/alerts/';

// I want to GET request the list
// save this list into state parent state
// var returnedGetApi = "test"

export const GetApiCall = () => {
  // var returnedGetApi = "outside scope"

  l("making a GET request for Moments");
    fetch(momentsURL)
      .then(response => response.json())
			.then(response => {
        // l("the GET response is: ", response);
        // const returnedGetApi = response
        // l("inside then returnedGetApi is: ", returnedGetApi);
        // return response;
        // setMoments(response);
      })
      .catch(err => { l(err) }
    );
  // l("outside returnedGetApi is: ", returnedGetApi);
}




