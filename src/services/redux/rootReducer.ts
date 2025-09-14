import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer; 