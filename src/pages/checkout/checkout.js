import React from 'react' 
import {useSelector} from 'react-redux'
import CartProductItem from '../../components/cartProduct-item/cartProduct-item'
import './checkout.scss'
import {Button} from '@material-ui/core'


const Checkout = () => {

  const cartItems = useSelector(state => state.cartItems.cartItems)
  const totalAmount = useSelector(state => state.cartItems.totalAmount)
  console.log(cartItems, 'checkout')
  //form object to array Cart Items
  const transformedCartItems = []

  for (const key in cartItems) {
    console.log(cartItems[key])
    transformedCartItems.push({
      id: key,
      quantity: cartItems[key].quantity,
      price: cartItems[key].productPrice,
      title: cartItems[key].productTitle,
      image: cartItems[key].productImage,
      sum: cartItems[key].sum
    })
  }

  console.log(transformedCartItems, 'checkoutTransform')

  return(
    <div className='checkout'>
      {transformedCartItems.length > 0?
      <div className='cart-product-list'>
      <div>
        {transformedCartItems.map(product => <CartProductItem 
          key={product.id}
          id={product.id}
          quantity={product.quantity} 
          price={product.price} 
          title={product.title} 
          image={product.image} 
          sum={product.sum}/>
        )
      }
      </div>
      <div className='total'>
        <div>Total: {totalAmount} RON</div>
        <div className='order-button'>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Place order
          </Button>
        </div>
      </div>
    </div>
    :
    <div className='empty-cart'>Your shopping cart is currently empty.</div>
    }
    </div>
  )
}

export default Checkout