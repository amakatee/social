import React from 'react'
import TimeAgo from './TimeAgo'

export default function ProductCartItem({product}) {

  return (
    <div>
          <div className='profile__product-cart'>
                <div className='profile__product-img'>
                    <img src={product.imageURL}></img>
                </div>
                <div className='profile__product-desc'>
                    <h1 className='profile__product-name'>{product.title}</h1>
                    <h1 className='profile__product-price'>{product.price}$</h1>
                </div>
            </div>
    </div>
  )
}
