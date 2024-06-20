import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../navbar/NavBar.css'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false) // dropdown menu

  return (
    <div className='menu-nav flex flex-col' onClick={() => setIsOpen(!isOpen)}>
      <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-menu-2'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 6l16 0' /><path d='M4 12l16 0' /><path d='M4 18l16 0' /></svg>
      {isOpen && (
        <ul className='div-nav flex flex-col gap-4'>
          <Link style={{ textDecoration: 'none' }} to='#Blog'><li className='li-nav'>Ayudá a un paciente</li></Link>
          <li className='li-nav'>Comentá</li>
          <li className='li-nav'>Incucai</li>
          <li className='li-nav'>Sobre Nosotros</li>
        </ul>
      )}
    </div>
  )
}
