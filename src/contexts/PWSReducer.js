
export const PWSReducer = ( state = {}, action ) => {
	// console.log('Entro in PWSReducer : ' + JSON.stringify(state));
	localStorage.setItem('pwsData',JSON.stringify(state));
	return state;
}