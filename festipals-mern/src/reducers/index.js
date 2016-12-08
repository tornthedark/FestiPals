import {combineReducers} from 'redux';
import ActReducer from './reducer-acts';
import ActiveActReducer from './reducer-active-act';


const allReducers = combineReducers({
  acts: ActReducer,
  activeAct: ActiveActReducer
});

export default allReducers;
