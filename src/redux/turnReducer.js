import {PLAYERX, PLAYER0} from '../constants/constants';

function turnReducer(state = PLAYERX, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        return action.turn === PLAYERX ? PLAYER0 : PLAYERX;
    case 'RESET':
          return PLAYERX;
    case 'FETCH_DATA':
          return action.turn;
    default:
        return state;
    }
}

export default turnReducer;