import API from './API';
import { baseURL } from './APIDevUrl';
import { devID } from '../../helpers/devID';
import l from '../../helpers/consolelog';

const api = new API;



// EDIT API CALLS FOR ALL MODELS
export function editApiCall(level, urlModel, id, body) {
	const url = baseURL + urlModel + id;
	l(`Sending edit body ${body} to ${url} for oid ${id}`);

	api.patch(url, body)
		.then(response => {
			l("Edit response: ", response.status);
		})
		.catch(error => {
			console.error(error);
		});

}
