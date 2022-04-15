import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'boxicons'

export default function Navbar() {
  return (
    <>
 
   <header className="header">
       <nav className="nav container">
          <div className="nav__menu">
               <ul className="nav__list">

                   <li className="nav__item hidden">
                       <Link to="/profile" className="nav__link active__link">
                       <i><box-icon name='planet' color="#ffffff"></box-icon></i>
                       </Link>
                   </li>

                   <li className="nav__item">
                       <Link to="/search" className="nav__link active__link">
                           <i><box-icon name='search' color="#ffffff"></box-icon></i>
                       </Link>
                   </li>

               

                   <li className="nav__item">
                       <Link to="/feed" className="nav__link active__link">
                           <i><box-icon name='message-rounded' color="#ffffff" ></box-icon></i>
                       </Link>
                   </li>

                   <li className="nav__item">
                       <Link to="/shoppingCart" className="nav__link active__link">
                           <i><box-icon name='cart' color="#ffffff"></box-icon></i>
                       </Link>
                   </li>

               </ul>
           </div>
           {/* <img src="https://thumbs.dreamstime.com/b/abstract-sci-fi-shiny-huge-saturn-abstract-sci-fi-shiny-huge-saturn-galaxy-star-landscape-background-d-rendering-167177510.jpg" className="nav__img" alt=""></img> */}
       </nav>
   </header>
   </>
  )
}
