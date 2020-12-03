export const SAVE_GAMES_SAGA = 'SAVE_GAMES_SAGA';
export const SAVE_GAMES_START = 'SAVE_GAMES_START';
export const SAVE_GAMES_SUCCESS = 'SAVE_GAMES_SUCCESS';
export const SAVE_GAMES_FAIL = 'SAVE_GAMES_FAIL';

export const FETCH_GAMES_SAGA = 'FETCH_GAMES_SAGA';
export const FETCH_GAMES_START = 'FETCH_GAMES_START';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAIL = 'FETCH_GAMEs_FAIL';

export const saveGames = (games) => ({
	type: SAVE_GAMES_SAGA,
	games,
});

export const saveGamesSuccess = (games) => ({
	type: SAVE_GAMES_SUCCESS,
	games,
});

export const saveGamesStart = () => ({
	type: SAVE_GAMES_START,
});

export const saveGamesFail = (error) => ({
	type: SAVE_GAMES_FAIL,
	error,
});

export const fetchGames = (user) => ({
	type: FETCH_GAMES_SAGA,
	user,
});

export const fetchGamesStart = () => ({
	type: FETCH_GAMES_START,
});

export const fetchGamesSuccess = (games) => ({
	type: FETCH_GAMES_SUCCESS,
	games,
});

export const fetchGamesFail = (error) => ({
	type: FETCH_GAMES_FAIL,
	error,
});
