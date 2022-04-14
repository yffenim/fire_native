import React, { useState, useEffect } from "react";
import { Text } from 'native-base';

const l = (arg) => console.log(arg);
const url = 'https://limitless-citadel-71686.herokuapp.com/api/users/1';

export default function greeting() {
	return <Text>Hello</Text>
}

// export default function greeting() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//   const response = await fetch(
//       "https://api.chucknorris.io/jokes/random"
//     );
//    const data = await response.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//     <p> {posts.value} </p>
//       <button onClick={fetchPost}> get new joke </button>
//     </div>
//   );
// }


// const [user, setUser] = useState([]);
// const getUser = () => {
// 	return fetch(url)
// 		.then((resp) => {
// 			if (resp.ok) {
// 				return resp.json();
// 			}
// 			throw new Error("Network response was not ok.");
// 		})
// 			.then((resp) => {
// 				l(resp);
// 				setUser(resp);
// 	})
// }

// 	return(
// 		<Text>Hello NAME!</Text>

// 	)
// }

// export default greeting;
