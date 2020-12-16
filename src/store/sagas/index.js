import { takeEvery } from 'redux-saga/effects';

import { Types as fetchTypes } from '../ducks/types';
import { fetchTypesSaga } from './types';

export function* watchTypes() {
	yield takeEvery(fetchTypes.FETCH_TYPES_SAGA, fetchTypesSaga);
}
