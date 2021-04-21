import React from 'react' 
import './cartProduct-item.scss'
import {BsChevronLeft, BsChevronRight, BsTrash} from "react-icons/bs";
import {useDispatch} from 'react-redux'
import { deleteItem, addToCart, removeItem } from '../../store/actions/cartItemAction';



const CartProductItem = (props) => {
  const {quantity, price, title, sum, image, id } = props
  const dispatch = useDispatch()

  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }

  const deleteHandler = (id) => {
    dispatch(deleteItem(id))
  }

  const removeItemHandler = (id) => {
    dispatch(removeItem(id))
  }


  
  return(
    <div className='cart-page'>
      <div className='cart-product'>
        <div className='product-image'>
          <img src={image}/>
        </div>
        <div className='product-details'>
          <div className='description'>{title}</div>
          <div className='detailed'>
            <div className='quantitextandq'><div>Quantity:</div> 
            <div className='quantity'>
              <BsChevronLeft className='arrow-left' onClick={()=> removeItemHandler(id)}/>  
                <span> {quantity} </span>  
              <BsChevronRight className='arrow-right' onClick={()=> addToCartHandler(id)}/>
              </div>
            </div>
            <div className='price'>Price: <span>{price} RON</span></div>
            <div className='total-product'>Total: <span>{sum} RON</span> </div>
          </div>
          <div className='trash' onClick={() => deleteHandler(id)}>
          <BsTrash/> Delete
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductItem