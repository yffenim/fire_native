import l from '../../helpers/consolelog';
import { baseURL } from './APIDevUrl';
// import { baseURL } from './APIProdUrl';
// import { useRecoilValue } from 'recoil'
// import { headersAtom } from '../atoms/headersAtom';


// API class for all MODEL REQUESTS
export default class API {

// Wrapper for request header
  // constructHeaders() {
  //   const headers = useRecoilValue(headersAtom);
  //   return headers;
  // }

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


// API REQUESTS BY METHOD
// Get
  get(url) {
    return fetch(url, {
      headers: this.constructHeaders(),
    })
      .then(this.handleResponse);
  }

// POST
  post(model, body, headers) {
    let url = baseURL + model;
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(
    // logic to different handlers depending on model
    this.handleLoginResp);
    // this.handleResponse);
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
