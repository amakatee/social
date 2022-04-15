import React from 'react'
import './../Profile.css'
import { Link } from 'react-router-dom'
export default function ProfileHeader() {
  return (
    <div>
          <div className='profile__user'>
            <h1>zinina</h1>
        </div>
        <div className='profile__header'>
            <div className='profile__ava-container'>
                <img width="100px" src='https://i.pinimg.com/736x/de/81/67/de816779dc2fc22fe46a9ad81c664572.jpg'></img>
            </div>
            <div className='profile__user-info'>
                <div className='profile__follow' >
                  <h1 className='profile__follow-info'>Followers <br /><span className='bold'>20</span></h1>
                  <h1 className='profile__follow-info'>Following <br /><span className='bold'>20</span></h1>
                </div>
                <button className='profile__subscribe-btn'>Subscribe</button>
            </div>
        </div>

  
    </div>
  )
}
