import ducksReducer from 'ducks-reducer';

import * as filter from './filter';
import * as type from './types';

export default ducksReducer({ filter, type });
