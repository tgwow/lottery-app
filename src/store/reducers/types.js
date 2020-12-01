import { FETCH_TYPES_START, FETCH_TYPES_FAIL, FETCH_TYPES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	types: [],
	loading: false,
	error: null,
};
const fetchTypesStart = (state) => ({
	...state,
	loading: true,
	error: null,
});

const fetchTypesSuccess = (state, action) => ({
	types: action.types,
	loading: false,
	error: null,
});

const fetchTypesFail = (state, { error }) => ({
	...state,
	loading: false,
	error,
});

const types = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_TYPES_START:
			return fetchTypesStart(state);
		case FETCH_TYPES_SUCCESS:
			return fetchTypesSuccess(state, action);
		case FETCH_TYPES_FAIL:
			return fetchTypesFail(state, action);
		default:
			return state;
	}
};

export default types;
