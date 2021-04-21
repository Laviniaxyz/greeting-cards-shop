import React from 'react' 
import './cardlist.scss'
import CardItem from '../card-item/carditem'
import {cardsInStock} from '../../data/data'


const CardList = () => {
  return(
    <div className='product-list'>
    <div className='title'>Shop your favorite Greeting Cards</div>
    <div className='cardlist'>
      {cardsInStock.map(product => <CardItem 
        id={product.id}
        key={product.id} 
        image={product.image}
        name={product.name}
        price={product.price}
        />)
      }
    </div>
    </div>
  )
}

export default CardList

