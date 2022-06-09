import l from '../../helpers/consolelog';

// API class for AUTHENTICATION


// ALL THE URLS
const loginURL = 'http://localhost:3000/auth/sign_in';

// default login for dev
const adaLogin = JSON.stringify({
  email: "ada@ardour.com",
	password: "password",
});

// refactor this?
// default header
const requestHeader = {
	"Content-Type": "application/json",
	"X-Requested-With": "XMLHttpRequest"
};

// create header object for authenticated requests
export const setTokenHeaders = (client, expiry, token, tokenType, uid) => {
	return ({
		"client": client,
		"expiry": expiry,
		"access-token": token,
		"token-type": tokenType,
		"uid": uid
	})
}

export default class API {
  constructor(authToken) {
    // this.authToken = authToken;
  }

// Wrapper for request header
  constructHeaders() {
    const headers = requestHeader // does this base need to change?
    // l("Headers are set: ", headers);
    return headers;
  }

// responses handlers 
  handleResponse(response) {
    if (response.ok) {
      l("Network response for GET is good.");
      return response.json();
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText
      });
    }
  }

  handleLoginResp(response){
    let tokenHeaders = {}
    if (response.ok) {
      // alert("Login successful!");
      l("Network response for login is good.");
      // l("resp headers: ", response.headers);
				let expiry = response.headers["map"]["expiry"];
				let client = response.headers["map"]["client"];
				let token = response.headers["map"]["access-token"];
				let tokenType = response.headers["map"]["token-type"];
				let uid = response.headers["map"]["uid"];
				// make the header object
				tokenHeaders = setTokenHeaders(client,
        expiry, token, tokenType, uid);
        // l("tokenHeaders is: ", tokenHeaders);
        return tokenHeaders 
        // return response.json();
    } else {
      alert("Oops, could not login...");
        return Promise.reject({
        status: response.status,
        statusText: "Network response for login is not good."
      });
    }
  }

// API REQUESTS BY TYPE
// Get
  get(url) {
    return fetch(url, {
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }

// POST
  post(url, body) {
  // fetching
    return fetch(url, {
      method: 'POST',
      headers: this.constructHeaders(),
      // body: adaLogin // currently set to user authentication
      body: body
    })
    .then(
      this.handleLoginResp);
  }

// EDIT / UPDATE 
// Must use PATCH and not PUT
  patch(url, body, headers) {
    return fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: body
    })
      .then(this.handleResponse);
  }


// DELETE
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }
}
