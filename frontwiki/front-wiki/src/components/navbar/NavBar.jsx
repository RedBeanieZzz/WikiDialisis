// <NavBar/> con menú, logo y titulo
import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../buttons/MenuBtn.jsx'
import './NavBar.css'

export default function MainNavBar () {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/' title='Volver a la página principal'>
          <img className='img-logo' src='./src/imgs/riñon.png' alt='logomain' />
        </Link>
      </div>
      <div className='title-nav'>
        <p className='title-nav1'>Wiki</p>
        <p className='title-nav2'>Dialisis</p>
      </div>
      <Menu />
    </div>
  )
}
