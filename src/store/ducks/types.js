export const Types = {
	FETCH_TYPES_SAGA: 'types/FETCH_TYPES_SAGA',
	FETCH_TYPES_START: 'types/FETCH_TYPES_START',
	FETCH_TYPES_SUCCESS: 'types/FETCH_TYPES_SUCCESS',
	FETCH_TYPES_FAIL: 'types/FETCH_TYPES_FAIL',
};

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

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.FETCH_TYPES_START:
			return fetchTypesStart(state);
		case Types.FETCH_TYPES_SUCCESS:
			return fetchTypesSuccess(state, action);
		case Types.FETCH_TYPES_FAIL:
			return fetchTypesFail(state, action);
		default:
			return state;
	}
}

export const Creators = {
	fetchTypesSaga: () => ({
		type: Types.FETCH_TYPES_SAGA,
	}),

	fetchTypesStart: () => ({
		type: Types.FETCH_TYPES_START,
	}),

	fetchTypesSuccess: (types) => ({
		type: Types.FETCH_TYPES_SUCCESS,
		types,
	}),

	fetchTypesFail: (error) => ({
		type: Types.FETCH_TYPES_FAIL,
		error,
	}),
};
