import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/features/Profile/ProductSlice'

export default function AddProductForm() {
  const [content, setContent] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [price, setPrice] = useState(0)
  const [title, setTitle] = useState('')
  
  const dispatch = useDispatch()

  const onContentChanged = e => setContent(e.target.value)
  const onTitleChanged = e => setTitle(e.target.value)
  const onImageChanged = e => setImageURL(e.target.value)
  const onPriceChanged = e => setPrice(e.target.value)

  const onProductSubmit = () => {
    if(title) {
      dispatch(addProduct(title, content, imageURL, price))
    }
    
  }

  return (
    <div className="addingPost__container">
       <form  className="addPost__form">
       <label htmlFor='productTitle'>Title:</label>
      <input
      type='text'
      id="productTitle"
      name="productTitle"
      value={title}
      className="smallInputCont"
      onChange={onTitleChanged}
      ></input>

      <label htmlFor='productContent'>Capture Product</label>
      <input
      type='text'
      id="productContent"
      name="productContent"
      value={content}
      onChange={onContentChanged}
      className="inputCont"
      ></input>

     <label htmlFor='productImage'>Type Image URL:</label>
      <input
      type='text'
      id="productImage"
      name="productImage"
      className="smallInputCont"
      value={imageURL}
      onChange={onImageChanged}
      ></input>

       <label htmlFor='productPrice'>Price: RUB</label>
      <input
      type='text'
      id="productPrice"
      name="productPrice"
      value={price}
      className="smallInputCont"
      onChange={onPriceChanged}
      ></input>

      <button
      type='button'
      className="uploadPost__Btn"
      onClick={onProductSubmit}
      >Add Product</button>

    </form>
    </div>
   
  )
}
