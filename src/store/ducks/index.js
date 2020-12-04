import ducksReducer from 'ducks-reducer';

import * as filter from './filter';
import * as games from './games';
import * as types from './types';

export default ducksReducer({ filter, games, types });
