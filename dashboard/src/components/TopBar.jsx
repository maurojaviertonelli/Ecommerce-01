import React from 'react';
import img from '../assets/images/jordan-walke.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faEnvelope } from '@fortawesome/free-solid-svg-icons'

function TopBar() {
    return(
        <div className="row justify-content-center align-items-center shadow py-4 px-2 navbar-light mb-5">
            <FontAwesomeIcon icon={faBell} className="col"/>
            <FontAwesomeIcon icon={faEnvelope} className="col border border-end border-2 border-top-0 border-bottom-0"/>
            <a href="/" className="row align-items-left justify-content-end col text-decoration-none text-dark small">
                <div className="row align-items-center">
                    <span className="col text-end">Administrador</span>
                    <img src={img} alt="Imagen de usuario" className="img-profile rounded-circle col-3" width="40" height="40"/>
                </div>
            </a>
        </div>
    )
}

export default TopBar;