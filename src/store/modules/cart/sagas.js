/**
 * Middleware - Cart
 * set action to listen middleware
 * middleware get api informationsos detalhes
 * then send information to reducer
 */


//Imports
import { call, put, all, takeLatest } from 'redux-saga/effects'; //for async methods and returns promises and put call redux action
import api from '../../../services/api';

import { addToCartSuccess } from './actions';



//asterisco no js significa generator, similar ao async, mas com mais recursos
function* addToCart({id}) {
  console.log('addToCart');
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));

}

//all is a listener
//takeLatest - if all to api doesnt concluded, get only latest.
export default all([
  takeLatest('@Cart/ADD_REQUEST', addToCart),
]);
