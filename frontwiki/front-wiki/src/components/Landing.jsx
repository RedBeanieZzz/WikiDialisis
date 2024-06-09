import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

export default function Landing () {
  return (
    <div className='landing'>
      <div className='lg'>
        <img className='img-1' src='./src/imgs/riñon.png' alt='Logo' />
      </div>
      <div className='title'>
        <p className='title title-1'>Wiki</p>
        <p className='title title-2'>Dialisis</p>
      </div>
      <div className='desc'>
        <p>Aquí encontrarás toda la información <br />
          sobre dialisis, pre-transplante y<br />
          transplante renal que necesitas.
        </p>
      </div>
      <Link to='/home'>
        <div className='btn'>
          <button className='btn-in'>Entrar</button>
        </div>
      </Link>
    </div>
  )
};
