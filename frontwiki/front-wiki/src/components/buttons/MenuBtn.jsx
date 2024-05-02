import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Menu() {

    return (
        <NavDropdown className="d-inline mx-2" id='dropdown-autoclose-outside' title='Menu'>
            <NavDropdown.Item href=''>¿Que es esto?</NavDropdown.Item>
            <NavDropdown.Item href=''>Soporte Tecnico</NavDropdown.Item>
            <NavDropdown.Item href=''>¿Quienes somos?</NavDropdown.Item>
        </NavDropdown>
    )
}