import API from './APImodels';
import { baseURL } from './APIDevUrl';
import { devID } from '../../helpers/devID';
import l from '../../helpers/consolelog';


// EDIT API CALLS FOR ALL MODELS
export function editApiCall(level, urlModel, id, body, headers) {
	const api = new API;
	const url = baseURL + urlModel + id;
	l(`Sending edit body ${body} to ${url} for oid ${id}`);

	api.patch(url, body, headers)
		.then(response => {
			l("Edit response: ", response.status);
		})
		.catch(error => {
			console.error(error);
		});

}
