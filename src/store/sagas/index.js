import { takeEvery } from 'redux-saga/effects';

import { FETCH_TYPES_SAGA } from '../actions/types';
import { fetchTypesSaga } from './types';

export function* watchTypes() {
	yield takeEvery(FETCH_TYPES_SAGA, fetchTypesSaga);
}
