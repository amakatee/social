import React from 'react'
import TimeAgo from './TimeAgo'


export default function PhotoCartItem({post}) {
  return (
    <div>
         <div className='profile__photo-cart'>

       
                    <div className='profile__photo-container'>
                        <img src={post.imageURL}></img>
                    </div>
               
                    
         </div>
    </div>
  )
}
