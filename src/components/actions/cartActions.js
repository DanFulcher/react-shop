export const addToCart = id => ({
  type: addToCart,
  id,
});

export const addQuantity = id => ({
  type: addQuantity,
  id,
});

export const subQuantity = id => ({
  type: subQuantity,
  id,
});

export const remove = id => ({
  type: remove,
  id,
});

export const addShipping = e => ({
  type: addShipping,
  e,
});

export const subShipping = e => ({
  type: subShipping,
  e,
});
