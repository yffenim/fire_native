import l from '../../helpers/consolelog';

// API class for all requests

// default login
const defaultBody = JSON.stringify({
  email: "ada@ardour.com",
	password: "password",
})

// refactor this away?
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
      l("Network response is good.");
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
      alert("Login successful!");
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
      alert("Oops, could not login");
        return Promise.reject({
        status: response.status,
        statusText: "Network response for login is not good."
      });
    }
  }

// requests by type
// add logic about whether this is a login, register,  or post
  get(url) {
    return fetch(url, {
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }
  post(url, model, body) {
    l("the model for post req is: ", model);
    l("the body for post req is: ", body);
    return fetch(url, {
      method: 'POST',
      headers: this.constructHeaders(),
      body: defaultBody
      // body: body
    })
    .then(
    // logic to different handlers depending on model
    this.handleLoginResp);
    // this.handleResponse);
  }
  put(url) {
    return fetch(url, {
      method: 'PUT',
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }
}
