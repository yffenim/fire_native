import React from "react";
import l from "../../helpers/consolelog";
import { useToast } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { devID } from "../../helpers/devID";


// const secondsURL = "https://limitless-citadel-71686.herokuapp.com/api/seconds"
const secondsURL = 'http://localhost:3000/api/seconds/';


// POST
export const postSecondRequest = (level, headers, uid, title) =>  {

    l("Adding a new Second to server with headers: ", headers);
		fetch(secondsURL, {
			method: 'POST',
      headers: headers,
			body: JSON.stringify({
       second: {
					level: level,
          user_id: uid,
          title: title,
					},
				}),
      })
		.then((response) => {
      if (response.ok) {
        alert("Second Successfully Submitted!");
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
export const patchSecondRequest = (editId, level) => {
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
          user_id: devID
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


export const deleteMomentRequest = (id, toast) => {
    l("Making Delete Api Request for ", id);
    let deleteURL = momentsURL + id;
    // l("deleteURL: ", deleteURL);
    
      fetch(deleteURL, {
        method: "DELETE",
      })
    .then((response) => {
      if (response.ok) {
        l(`Deleted ${id}? `, response.ok);
        toast.show({render: () => {
					return (
						<ToastBox text={"Deleted!"} />
					)}
				});

        return response;
      }
      alert("Something went wrong with the delete!");
      throw new Error("Network response was not ok from Delete Request.");
		})
		.catch((err) => l(err));
		};




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
