import { SET_TYPE } from '../actions/filter';

const INITIAL_STATE = {
	selectedType: 'Lotofácil',
};

const setType = (state, { selectedType }) => ({
	...state,
	selectedType,
});

const filter = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TYPE:
			return setType(state, action);
		default:
			return state;
	}
};

export default filter;
