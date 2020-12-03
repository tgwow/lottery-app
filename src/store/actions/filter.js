export const SET_TYPE = 'TYPE/SET_TYPE';
export const ADD_TYPE = 'TYPE/ADD_TYPE';
export const REMOVE_TYPE = 'TYPE/REMOVE_TYPE';
export const CLEAR_TYPE = 'TYPE/CLEAR_TYPE';

export const setType = (type, behavior) => ({
	type: SET_TYPE,
	optionType: type,
	behavior,
});

export const addType = (type) => ({
	type: ADD_TYPE,
	optionType: type,
});

export const removeType = (type) => ({
	type: REMOVE_TYPE,
	optionType: type,
});

export const clearType = (type) => ({
	type: CLEAR_TYPE,
	optionType: type,
});
