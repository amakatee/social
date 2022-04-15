import React from 'react'
import "./../Profile.css"
import { AllPhotos } from '../../../store/features/Profile/PostSlice'
import { useDispatch, useSelector } from 'react-redux'
import PhotoCartItem from './PhotoCartItem'
import AddPostForm from './AddPostForm'
import { useState } from 'react'

export default function ProfilePhotosGrid() {
  const [container, setContainer] = useState(false)
   
  const posts = useSelector(AllPhotos)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const renderedPostPhotos = orderedPosts.map(post => (
      <PhotoCartItem key={post.id} post={post}/>
  ))

  const toggleAddPost = () => {
    setContainer(prev => !prev)
    

  }


  return (
    <div>
         
        <div className='profile__photo-grid'>
             {renderedPostPhotos}
            
        </div>
            
         <button onClick={toggleAddPost} className='addPost-btn'>Add Post</button>

        {container &&  <AddPostForm />}
        {container &&  <div onClick={toggleAddPost} className='overlay'></div>}
       
      
            
    </div>
  )
}
