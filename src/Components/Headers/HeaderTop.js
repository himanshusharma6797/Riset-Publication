import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


export default function HeaderTop() {
  return (
    <div className='hederTop'>

    <nav className="container navbar-expand">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active topHeaderLinks" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active topHeaderLinks" to="/journals">JOURNALS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active topHeaderLinks" to="/publication-process">PUBLICATION PROCESS</Link>
                        </li>
                    </ul>
        </nav>
    </div>
  )
}
