export function addToCart(product) {
  return {
    type: '@Cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@Cart/REMOVE',
    id,
  };
}

export function updateAmmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  }
}
