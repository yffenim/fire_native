export function getLoginName(params) {
	const { nameParam } = params
	// console.log(params);
	
	return JSON.stringify(nameParam.name).replace(/"/g,"");
}



