import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {formReducer} from './redux/form';
const rootReducer = combineReducers({
  form: formReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
