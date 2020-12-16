import { put } from 'redux-saga/effects';
import axios from '../../services/api';

import { Creators as typesActions } from '../ducks/types';

export function* fetchTypesSaga() {
	yield put(typesActions.fetchTypesStart());

	try {
		const response = yield axios.get('/types');
		yield put(typesActions.fetchTypesSuccess(response.data));
	} catch (e) {
		console.log(e.response.data.error.message);
		yield put(typesActions.fetchTypesFail(e.response.data.error.message));
	}
}
