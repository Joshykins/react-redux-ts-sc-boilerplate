import { combineReducers } from 'redux';
import { counterExampleReducer } from './counterExample.reducer';

export const rootReducer = combineReducers({
  counterExample: counterExampleReducer as any,
});
