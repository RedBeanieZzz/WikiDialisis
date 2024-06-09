import React from 'react'
import MainNavBar from '../navbar/NavBar.jsx'
import SectionsButton from '../buttons/ToSectionBtn.jsx'
import { Link } from 'react-router-dom'

export default function GeneralPage() {
  return (
    <div className='home'>
      <MainNavBar />

      <h3 className='desc'>Tocá las opciones o deslizá para arriba para ver mas!</h3>

      <Link style={{ textDecoration: 'none' }} to='info-dial'>
        <SectionsButton text='¿Que es la dialisis?' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='centro-dial'>
        <SectionsButton text='Centros de dialisis' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='trans'>
        <SectionsButton text='Centros de Transplante' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='guia-nefro'>
        <SectionsButton text='Guia de Nefrologos' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='labs'>
        <SectionsButton text='Laboratorios' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='o-s'>
        <SectionsButton text='Obras sociales' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='casas'>
        <SectionsButton text='Asistencia de Casas provinciales' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='recetas'>
        <SectionsButton text='Recetario' />
      </Link>
      <Link style={{ textDecoration: 'none' }} to='alojamientos'>
        <SectionsButton text='Alojamiento' />
      </Link>
      {/* <Link>
        <SectionsButton text='Conversatorio / Blog' />
      </Link> */}
    </div>
  )
}
