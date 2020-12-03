import {
	SAVE_GAMES_SUCCESS,
	SAVE_GAMES_FAIL,
	SAVE_GAMES_START,
	FETCH_GAMES_START,
	FETCH_GAMES_SUCCESS,
	FETCH_GAMES_FAIL,
} from '../actions/games';

const INITIAL_STATE = {
	games: [],
	error: null,
	loading: false,
};

const saveGamesStart = (state) => {
	return {
		...state,
		loading: true,
		error: null,
	};
};

const saveGamesSuccess = (state, action) => {
	console.log(state.loading);
	return {
		error: null,
		loading: false,
		games: state.games.concat({ ...action.games }),
	};
};

const saveGamesFail = (state) => {
	return {
		...state,
		error: true,
		loading: false,
	};
};

const fetchGamesStart = (state) => {
	return {
		...state,
		loading: true,
		error: null,
	};
};

const fetchGamesSuccess = (state, action) => {
	console.log(action.games);
	return {
		error: null,
		loading: false,
		games: action.games,
	};
};

const fetchGamesFail = (state, action) => {
	console.log(action.error);

	return {
		...state,
		error: true,
		loading: false,
		games: [],
	};
};

const gamesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_GAMES_START:
			return fetchGamesStart(state);
		case FETCH_GAMES_SUCCESS:
			return fetchGamesSuccess(state, action);
		case FETCH_GAMES_FAIL:
			return fetchGamesFail(state, action);
		case SAVE_GAMES_START:
			return saveGamesStart(state);
		case SAVE_GAMES_SUCCESS:
			return saveGamesSuccess(state, action);
		case SAVE_GAMES_FAIL:
			return saveGamesFail(state, action);
		default:
			return state;
	}
};

export default gamesReducer;
