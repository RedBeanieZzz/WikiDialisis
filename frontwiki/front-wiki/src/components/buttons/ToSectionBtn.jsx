import React from 'react'
import '../pages/HomePage.css'

export default function SectionsButton (props) {
  return (
    <div className='container-btn'>
      <div className='section-title'>{props.text}</div>
    </div>
  )
}
