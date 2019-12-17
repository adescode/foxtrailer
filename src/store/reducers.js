import {combineReducers} from 'redux';
import HomeReducer from '../reducers/home';

export const makeRootReducer = () => {
  return combineReducers({
    home: HomeReducer,
  });
};

export default makeRootReducer;
