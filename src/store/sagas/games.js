import { put, delay } from 'redux-saga/effects';

import * as actions from '../actions/games';

export function* fetchGamesSaga() {
	yield put(actions.fetchGamesStart());
	// const queryParams = `?auth=${action.user.token}&orderBy="userId"&equalTo="${action.user.userId}"`;
	// const response = yield database.get(`/games.json` + queryParams);
	yield put(actions.fetchGamesSuccess());
}

export function* saveGamesSaga(action) {
	yield put(actions.saveGamesStart());
	yield delay(1500);
	yield put(actions.saveGamesSuccess(action.games));
}
