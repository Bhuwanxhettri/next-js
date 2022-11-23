import { call, put, all, takeEvery } from 'redux-saga/effects';
import { getProduct } from '../../features/product/productSlice';
import { sagaActions } from './sagaActions';

const productFetch = async () => {
  const res = await fetch('https://fakestoreapi.com/products').then(
    (res) => {
      return res.json();
    },
  );
  return res;
};

const userFetch = async()=>{
    const res = await fetch('https://fakestoreapi.com/users').then(
        (res) => {
          return res.json();
        },
      );
      return res;
}

function* workGetProductFetch() {
  const product = yield call(productFetch);
  yield put(getProduct(product));
}

function* workGetUserFetch(){
    const user = yield call(userFetch)
    yield put(getUsers(user))
}

function* mySaga() {
  yield all([
    takeEvery(sagaActions.FETCH_PRODUCT_DATA, workGetProductFetch),
    takeEvery(sagaActions.FETCH_USER_DATA, workGetUserFetch),
  ])
}
export default mySaga;