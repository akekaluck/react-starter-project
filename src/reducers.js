import * as types from './actionTypes';

const initState = {
    name: 'Container'
}

export default (state = initState, actions) => {
    switch(actions.type) {
        case types.APP_INIT:
            return state;
        default:
            return state;
    }
}