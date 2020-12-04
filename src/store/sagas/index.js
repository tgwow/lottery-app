import { takeEvery } from 'redux-saga/effects';

import { Types as fetchTypes } from '../ducks/types';
import { fetchTypesSaga } from './types';

import { Types as gamesTypes } from '../ducks/games';
import { fetchGamesSaga, saveGamesSaga } from './games';

export function* watchTypes() {
	yield takeEvery(fetchTypes.FETCH_TYPES_SAGA, fetchTypesSaga);
}

export function* watchGames() {
	yield takeEvery(gamesTypes.SAVE_GAMES_SAGA, saveGamesSaga);
	yield takeEvery(gamesTypes.FETCH_GAMES_SAGA, fetchGamesSaga);
}
