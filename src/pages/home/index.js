import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}));

  const dispatch = useDispatch();
  useEffect( () => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price)
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);


  function handleAddProducts(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button" onClick={ () => handleAddProducts(product.id) }>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}


// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(null, mapDispatchToProps) (Home);
