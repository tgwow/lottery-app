export const Types = {
	ADD_TYPE: 'filter/ADD_TYPE',
	REMOVE_TYPE: 'filter/REMOVE_TYPE',
	CLEAR_TYPE: 'filter/CLEAR_TYPE',
};

const INITIAL_STATE = {
	selectedType: ['Lotofácil'],
};

const addType = (state, action) => ({
	selectedType: state.selectedType.concat(action.optionType),
});

const removeType = (state, action) => ({
	selectedType: state.selectedType.filter((type) => type !== action.optionType),
});

const clearType = (state, action) => ({
	selectedType: [action.optionType],
});

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.ADD_TYPE:
			return addType(state, action);
		case Types.REMOVE_TYPE:
			return removeType(state, action);
		case Types.CLEAR_TYPE:
			console.log('clearing..');
			return clearType(state, action);
		default:
			return state;
	}
}

export const Creators = {
	addType: (type) => ({
		type: Types.ADD_TYPE,
		optionType: type,
	}),

	removeType: (type) => ({
		type: Types.REMOVE_TYPE,
		optionType: type,
	}),

	clearType: (type) => ({
		type: Types.CLEAR_TYPE,
		optionType: type,
	}),
};
