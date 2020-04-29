/**
 * Middleware - Cart
 * set action to listen middleware
 * middleware get api informationsos detalhes
 * then send information to reducer
 */


//Imports
import { call, select, put, all, takeLatest } from 'redux-saga/effects'; //for async methods and returns promises and put call redux action
import {toast} from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmmount } from './actions';




//asterisco no js significa generator, similar ao async, mas com mais recursos
function* addToCart({id}) {
  console.log('addToCart');
  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  )

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount: 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      toast.error('Quantidade solicitada sem estoque');
      return;
    }


  if (productExists) {
    // const amount = productExists.amount + 1;
      yield put(updateAmmount(id, amount));
  } else {
  const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice( response.data.price ),
    }

    yield put(addToCartSuccess(data));
  }

}

//all is a listener
//takeLatest - if all to api doesnt concluded, get only latest.
export default all([
  takeLatest('@Cart/ADD_REQUEST', addToCart),
]);
