import { SET_TYPE, ADD_TYPE, REMOVE_TYPE, CLEAR_TYPE } from '../actions/filter';

const INITIAL_STATE = {
	selectedType: ['Lotofácil'], /// []
	behavior: 'all', // selecionar varios: all | só um: single
};

const setType = (state, action) => ({
	...state,
	behavior: action.behavior,
});

const addType = (state, action) => ({
	...state,
	selectedType: state.selectedType.concat(action.optionType),
});

const removeType = (state, action) => ({
	...state,
	selectedType: state.selectedType.filter((type) => type !== action.optionType),
});

const clearType = (state, action) => ({
	...state,
	selectedType: [action.optionType],
});

const filter = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TYPE:
			return setType(state, action);
		case ADD_TYPE:
			return addType(state, action);
		case REMOVE_TYPE:
			return removeType(state, action);
		case CLEAR_TYPE:
			return clearType(state, action);
		default:
			return state;
	}
};

export default filter;
