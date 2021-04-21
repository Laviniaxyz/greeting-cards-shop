import {cardsInStock} from '../../data/data'
import {ADD_TO_CART, deleteItem, DELETE_ITEM, REMOVE_ITEM} from '../actions/cartItemAction'
import CartItem from '../../model/cart-item-model'

const initialState = {
  cards: cardsInStock,
  cartItems: {},
  totalAmount: 0
}



const cartItemsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_TO_CART: 
      const addedProduct = cardsInStock.filter(product => product.id === action.payload)[0]
      console.log(addedProduct, 'added-product')
      console.log(state.cartItems, 'cartItems')

      let updatedOrNewCardItem

      if (!!state.cartItems[addedProduct.id]) {
        //if product already exists we update the quantity and sum
        updatedOrNewCardItem = new CartItem(
          state.cartItems[addedProduct.id].quantity + 1,
          addedProduct.price,
          addedProduct.name,
          addedProduct.image,
          (state.cartItems[addedProduct.id].quantity + 1) * addedProduct.price
        )
      } else {
          updatedOrNewCardItem = new CartItem(
            1, 
            addedProduct.price,
            addedProduct.name,
            addedProduct.image,
            addedProduct.price
            )
      }
      return {
        ...state,
         cartItems: {...state.cartItems, [addedProduct.id]: updatedOrNewCardItem},
         totalAmount: state.totalAmount + addedProduct.price
      }
      case DELETE_ITEM:
        const updatedItems = {...state.cartItems}
        const itemPrice = updatedItems[action.payload].sum
        delete updatedItems[action.payload]

      return {
        ...state,
        cartItems: updatedItems,
        totalAmount: state.totalAmount - itemPrice
      }
      case REMOVE_ITEM:
        const selectedProduct = cardsInStock.filter(product => product.id === action.payload)[0]
        const currentQuantity = state.cartItems[selectedProduct.id].quantity
        console.log(selectedProduct, 'selectedProduct')
        let updatedCartItems; 
        let updatedCartItem

        if (currentQuantity > 1) {
          updatedCartItem = new CartItem(
            currentQuantity - 1,
            selectedProduct.price,
            selectedProduct.name,
            selectedProduct.image,
            state.cartItems[selectedProduct.id].sum - selectedProduct.price
          )
          updatedCartItems = {...state.cartItems, [selectedProduct.id]: updatedCartItem}
        }
        else {
          updatedCartItems = {...state.cartItems}
          delete updatedCartItems[selectedProduct.id]
    } 
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount - selectedProduct.price
      }



        

        
    default:
      return state
  }
}


export default cartItemsReducer
