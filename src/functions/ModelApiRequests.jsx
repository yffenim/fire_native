import React from "react";
import l from "../../helpers/consolelog";
import { ToastBox } from '../presentations/ToastBox';
import { devID } from "../../helpers/devID";
import { baseURL } from "./APIDevUrl";
// import { baseURL } from "./APIProdUrl";

// MAKE THIS PAGE INTO A SINGLE PAGER FOR ALL API REQUESTS


// POST TODO!!!!!!!!!!!!!
// have to send  differently for model title + url
export const postModelRequest = (level) =>  {
    l("Adding a new Moment to server to userid: ", devID);
		fetch(momentsURL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
        alert: {
					level: level,
					user_id: devID
					},
				}),
      })
		.then((response) => {
      if (response.ok) {
        // l("Alert Level Successful")
        alert("Alert Level Submitted!");
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


// PATCH // NOT IN USE //
export const patchModelRequest = (editId, level) => {
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


// DELETE // IN USE //
export const deleteModelRequest = (id, urlModel, toast) => {
    let deleteURL = baseURL + urlModel + id;
    l(`Sending delete request to ${deleteURL} for oid ${id}`);

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
