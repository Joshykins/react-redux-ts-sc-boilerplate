import { Store, createStore, applyMiddleware } from "redux"; 
import { rootReducer } from '../reducers';

export function configureStore(initialState?: any) : Store<IStore> {
  const middleware = []; //TODO:middleware/core/api-requests

  const store = createStore(
    rootReducer as any, //Reducers
    initialState as any, //InitialState
    //applyMiddleware(...middleware)
  ) as Store<IStore>



  return store;
}
export interface IStore {
  //Store interface
}