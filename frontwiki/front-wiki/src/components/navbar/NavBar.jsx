// <NavBar/> con menú, logo y titulo
import React from 'react'
import Menu from '../buttons/MenuBtn.jsx'
import './NavBar.css'

export default function MainNavBar() {
	return (
		<div className='navbar'>
			<div className="logo">
				<img className='img-logo' src="./src/imgs/riñon.png" alt="logomain" />
			</div>
			<div className="title-nav">WikiDialisis</div>
			<Menu className="btn-menu"/>
		</div>
	)
}