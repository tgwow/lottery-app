export const Types = {
	SAVE_GAMES_SAGA: 'games/SAVE_GAMES_SAGA',
	SAVE_GAMES_START: 'games/SAVE_GAMES_START',
	SAVE_GAMES_SUCCESS: 'games/SAVE_GAMES_SUCCESS',
	SAVE_GAMES_FAIL: 'games/SAVE_GAMES_FAIL',

	FETCH_GAMES_SAGA: 'games/FETCH_GAMES_SAGA',
	FETCH_GAMES_START: 'games/FETCH_GAMES_START',
	FETCH_GAMES_SUCCESS: 'games/FETCH_GAMES_SUCCESS',
	FETCH_GAMES_FAIL: 'games/FETCH_GAMEs_FAIL',
};

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
	return {
		error: null,
		loading: false,
		games: action.games,
	};
};

const fetchGamesFail = (state) => {
	return {
		...state,
		error: true,
		loading: false,
		games: [],
	};
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.FETCH_GAMES_START:
			return fetchGamesStart(state);
		case Types.FETCH_GAMES_SUCCESS:
			return fetchGamesSuccess(state, action);
		case Types.FETCH_GAMES_FAIL:
			return fetchGamesFail(state, action);
		case Types.SAVE_GAMES_START:
			return saveGamesStart(state);
		case Types.SAVE_GAMES_SUCCESS:
			return saveGamesSuccess(state, action);
		case Types.SAVE_GAMES_FAIL:
			return saveGamesFail(state, action);
		default:
			return state;
	}
}

export const Creators = {
	saveGames: (games) => ({
		type: Types.SAVE_GAMES_SAGA,
		games,
	}),

	saveGamesSuccess: (games) => ({
		type: Types.SAVE_GAMES_SUCCESS,
		games,
	}),

	saveGamesStart: () => ({
		type: Types.SAVE_GAMES_START,
	}),

	saveGamesFail: (error) => ({
		type: Types.SAVE_GAMES_FAIL,
		error,
	}),

	fetchGames: (user) => ({
		type: Types.FETCH_GAMES_SAGA,
		user,
	}),

	fetchGamesStart: () => ({
		type: Types.FETCH_GAMES_START,
	}),

	fetchGamesSuccess: (games) => ({
		type: Types.FETCH_GAMES_SUCCESS,
		games,
	}),

	fetchGamesFail: (error) => ({
		type: Types.FETCH_GAMES_FAIL,
		error,
	}),
};
