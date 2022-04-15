import React from 'react'
import "./Profile.css"
import ProfileHeader from './features/ProfileHeader'

import {Link, Outlet} from 'react-router-dom'
import Layout from '../Layout'

export default function Profile() {
  return (
    <section>
        <ProfileHeader />
        
        <div className='profile__navigation'>
            <Link to="/profile" > <h2 className='profile__nav-option'>Photos</h2></Link>
            <Link to='/profile/products'><h2 className='profile__nav-option'>Products</h2></Link>
            
        </div>
        <Layout />
        
        
        
    </section>
  )
}
