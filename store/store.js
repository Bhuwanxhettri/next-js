import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/product/productSlice'
import userReducer from '../features/user/userSlice'
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './sagas/sagas';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product:productReducer,
    user:userReducer,
  },
  middleware:[sagaMiddleware]
})
sagaMiddleware.run(mySaga)


