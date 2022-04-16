export function getLoginName(params) {
	const { nameParam } = params
	return JSON.stringify(nameParam.name).replace(/"/g,"");
}



