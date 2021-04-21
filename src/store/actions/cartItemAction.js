export const ADD_TO_CART = 'ADD_TO_CART '
export const DELETE_ITEM = 'DELETE_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'


export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
}