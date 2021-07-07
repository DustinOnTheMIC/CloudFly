import { combineReducers } from 'redux';
import langReducer from './langReducer';

export default combineReducers({langReducer});

export type RootState = {
    langReducer: {
        isVn: boolean
    }
}