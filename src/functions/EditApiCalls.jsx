import API from './API';
import { baseURL } from './APIDevUrl';
import { devID } from '../../helpers/devID';
import l from '../../helpers/consolelog';

const api = new API;




export function editApiCall(level, urlModel, id) {

	const url = baseURL + urlModel + "/" + id
	l("Edit URL: ", url);

	const body = JSON.stringify({
  	alert: {
	  	level: level,
			user_id: devID
			},
		});

	api.patch(url, body)
		.then(response => {
			l(response);
		})
		.catch(error => {
			console.error(error);
		});

}
