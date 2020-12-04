import { put, delay } from 'redux-saga/effects';

import { Creators as gamesActions } from '../ducks/games';

export function* fetchGamesSaga() {
	yield put(gamesActions.fetchGamesStart());
	yield put(gamesActions.fetchGamesSuccess());
}

export function* saveGamesSaga(action) {
	yield put(gamesActions.saveGamesStart());
	yield delay(1500);
	yield put(gamesActions.saveGamesSuccess(action.games));
}
