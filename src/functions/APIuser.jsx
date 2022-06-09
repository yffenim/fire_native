import l from '../../helpers/consolelog';
import { baseURL } from './APIDevUrl';

// default headers w/o access token
const requestHeaders = {
	"Content-Type": "application/json",
	"X-Requested-With": "XMLHttpRequest"
};

// API class for all MODEL REQUESTS
export default class API {

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
  };

// API REQUESTS BY METHOD
// Get
  get(url, headers) {
    return fetch(url, {
      headers: headers
    })
      .then(this.handleResponse);
  }

// POST -> REGISTRATIONS
  post(url, headers) {
    return fetch(url, {
      method: 'POST',
      headers: headers,
    })
    .then(
    this.handleResponse);
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


// DELETE USER (not sessions)
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: requestHeaders,
    })
      .then(this.handleResponse);
  }
}
