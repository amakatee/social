import React from 'react'
import { useSelector } from 'react-redux'
import { allProducts } from '../../../store/features/Profile/ProductSlice'
import AddProductForm from './AddProductForm'
import ProductCartItem from './ProductCartItem'
import { useState } from 'react'


export default function ProfileProductsGrid() {
   const [container, setContainer] = useState(false)

    const products = useSelector(allProducts)
    const orderedProducts = products.slice().sort((a,b) => b.date.localeCompare(a.date))
    const renderedProducts =  orderedProducts.map(product => (
        <ProductCartItem key={product.id} product={product} />
    ))

    const toggleAddPost = () => {
      setContainer(prev => !prev)
      
  
    }


  return (
    <div>
        <div className='profile__products-grid'>
            {renderedProducts}
        </div>
        <button onClick={toggleAddPost} className='addPost-btn'>Add Post</button>
        {container &&  <AddProductForm />}
        {container &&  <div onClick={toggleAddPost} className='overlay'></div>}

    </div>
  )
}
