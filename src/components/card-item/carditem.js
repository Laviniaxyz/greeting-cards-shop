import React from 'react' 
import './carditem.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../store/actions/cartItemAction'

const CardItem = (props) => {
  const dispatch = useDispatch()

  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }


  return(
    <div className='card-item'>
      <div className='product-image'>
        <img src={props.image}/>
        <button onClick={() => addToCartHandler(props.id)}>Add to Cart</button>
      </div>
      <div className='details'>
        <div>{props.name}</div>
        <div>{props.price}RON</div>
      </div>
    </div>
  )
}

export default CardItem