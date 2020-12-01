export const FETCH_TYPES_SAGA = 'FETCH_TYPES_SAGA';
export const FETCH_TYPES_START = 'FETCH_TYPES_START';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_FAIL = 'FETCH_TYPES_FAIL';

export const fetchTypesSaga = () => ({
	type: FETCH_TYPES_SAGA,
});

export const fetchTypesStart = () => ({
	type: FETCH_TYPES_START,
});

export const fetchTypesSuccess = (types) => ({
	type: FETCH_TYPES_SUCCESS,
	types,
});

export const fetchTypesFail = (error) => ({
	type: FETCH_TYPES_FAIL,
	error,
});
