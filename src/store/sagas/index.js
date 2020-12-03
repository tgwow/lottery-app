import { takeEvery } from 'redux-saga/effects';

import { FETCH_TYPES_SAGA } from '../actions/types';
import { fetchTypesSaga } from './types';

import { FETCH_GAMES_SAGA, SAVE_GAMES_SAGA } from '../actions/games';
import { fetchGamesSaga, saveGamesSaga } from './games';

export function* watchTypes() {
	yield takeEvery(FETCH_TYPES_SAGA, fetchTypesSaga);
}

export function* watchGames() {
	yield takeEvery(SAVE_GAMES_SAGA, saveGamesSaga);
	yield takeEvery(FETCH_GAMES_SAGA, fetchGamesSaga);
}
