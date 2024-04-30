import React, { useState } from 'react'

export default function Menu() {

    const [isOpen, setIsOpen] = useState() //dropdown menu

    return (
        <div>
            <div className="menu" onClick={() => setIsOpen(!isOpen)} >
                <img src=".src/imgs/menu-2.svg" alt="" />
                {isOpen && (
                    <div>
                        <p>Ver Blog</p>
                        <p>¡Quiero opinar!</p>
                        <p>¿Como usar la pagina?</p>
                    </div>
                )}
            </div>
        </div>
    )
}