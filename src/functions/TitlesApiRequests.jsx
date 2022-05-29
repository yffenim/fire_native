import React from "react";
import l from "../../helpers/consolelog";
import { useToast } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { devID } from "../../helpers/devID";


// const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/" // usually with user_id = 1 
const secondsURL = 'http://localhost:3000/api/seconds/';
const thirdsURL = 'http://localhost:3000/api/thirds/';


// PUT TO ADD TITLE
export const postSecondTitle = (title, oid) =>  {
  l("Adding a Second Title to server...");
  // the default object is at this oid
  let objectURL = secondsURL + oid

    fetch(objectURL, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
        second: {
					title: title,
          user_id: devID,
          level: 5 // use 5 for all default levels
					},
				}),
      })
		.then((response) => {
      if (response.ok) {
        l("Second title submitted called ", title);
        // alert("Title Successfully Submitted!");
         // toast.show({render: () => {
         //    return (<ToastBox text="Moment Submitted!" />)
         //  }
        // });
				return response.json();
			}
				alert("Oops, something went wrong!")
			throw new Error("Network response was not ok.");
		})
		.catch((err) => l(err));
	};

export const postThirdTitle = (title, oid) =>  {
    l("Adding a new Thirds Title to server...");
    let objectURL = thirdsURL + oid
    l(objectURL);
		fetch(objectURL, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
        third: {
					title: title,
          user_id: devID,
          level: 5 // always use 5 as default
					},
				}),
      })
		.then((response) => {
      if (response.ok) {
        l("Thirds title submitted called: ", title);
        // alert("Level Successfully Submitted!");
         // toast.show({render: () => {
         //    return (<ToastBox text="Moment Submitted!" />)
         //  }
        // });
				// updateDisplay();
				return response.json();
			}
				alert("Oops, something went wrong!")
			throw new Error("Network response was not ok.");
		})
		.catch((err) => l(err));
	};




// PATCH
export const patchMomentRequest = (editId, level) => {
		l("Sending a PATCH request to server with id: ", editId);
    let editURL = momentsURL + editId;
    l("to URL: ", editURL);
    fetch(editURL, {
      method: 'PATCH',
        headers: {
         'Content-Type': 'application/json',
         'X-Requested-With': 'XMLHttpRequest',
        // 'X-CSRF-Token' : token,
      },
      body: JSON.stringify({
        alert: {
          level: level,
          user_id: 1
        }
      })
    })
    .then((response) => {
			if (response.ok) {
				alert("Update Level Successfully Submitted!");
        return response.json();
    }
    throw new Error("Network response was not ok");
		})
		.catch((err) => l(err));
  };


export const deleteRequest = (id) => {
    l("Making Delete Api Request for ", id);
    let deleteURL = momentsURL + id
    l("deleteURL: ", deleteURL);
    
      fetch(deleteURL, {
        method: "DELETE",
      })
    .then((response) => {
      if (response.ok) {
        l(`Deleted ${id}? `, response.ok);
        return response;
      }
      alert("Something went wrong with the delete!");
      throw new Error("Network response was not ok from Delete Request.");
		})
		.catch((err) => l(err));
		};


// UNAUTHENTICATED VERSIONS

// GET, no auth
export const getRequest = () => 
  fetch(momentsURL)
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Network response was not ok.")
  })
  .catch(err => l("Error: ", err))




{/* Resources */}

// catching fallback value?  https://stackoverflow.com/questions/55019621/using-async-await-and-then-together

// https://stackoverflow.com/questions/54495711/async-await-vs-then-which-is-the-best-for-performance/54497100#54497100

// https://dev.to/kylejb/a-key-difference-between-then-and-async-await-in-javascript-53e9


{/* OLD THINGS */}


// export const getPromise = async () => 
//   fetch(momentsURL)
//   .then(response => response.json())
//
// fetch(momentsURL)
    // .then(jsonData => jsonData.json())
    // .then(data => printIt(data))

// export let printIt = (data) => {
  //  l("printing it:");
  //  l(typeof data);
  //  l(data);
// }

// export const GetRequest = () => {
//   l("making a GET request for Moments");
//     fetch(momentsURL)
//       .then(response => response.json())
// 			.then(response => {
//         // l("the GET response is: ", response);
//         return response;
//         // setMoments(response);
//       })
//       .catch(err => { l(err) }
//     );
// }
