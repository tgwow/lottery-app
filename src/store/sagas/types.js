import { put } from 'redux-saga/effects';
import axios from '../../services/api';

import * as actions from '../actions/types';

export function* fetchTypesSaga() {
	yield put(actions.fetchTypesStart());

	try {
		const response = yield axios.get('/types');
		console.log(response);
		yield put(actions.fetchTypesSuccess(response.data));
	} catch (e) {
		console.log(e);
		yield put(actions.fetchTypesFail(e));
	}
}
