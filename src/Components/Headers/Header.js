import './Header.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export default function Header(props) {
    // header slider bar
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    }
    return (
        <>
            <nav className={`navbar container navbar-expand-lg navbar-${'props.modeIs'} bg-${'props.modeIs'}`}>
                <div className="container-fluid">
                    <div className='headerTitle'>
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <p>Connecting through words</p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navBorder">
                            <li className="nav-item mr-3">
                                <Link className="nav-link active navLinkHover" aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li className="nav-item dropdown rightMenu">
                                <Link className="nav-link dropdown-toggle active navLinkHover menuButton" to="/journals" aria-expanded="false">
                                    JOURNALS
                                </Link>
                                <ul className="dropdown-menu dropdownMenu">
                                    <li><Link className="dropdown-item navLinkHover" to="/">WEB OF SCIENCE JOURNALS</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="dropdown dropdownUnder">
                                        <Link className="dropdown-item dropdown-toggle navLinkHover" to="/">SCOPUS JOURNALS</Link>
                                        <ul className="dropdown-menu dropdownMenu2">
                                            <li><Link className="dropdown-item navLinkHover" to="/">SCOPUS Q1 JOURNALS</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item navLinkHover" to="/">SCOPUS Q2 JOURNALS</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item navLinkHover" to="/">SCOPUS Q3 JOURNALS</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item navLinkHover" to="/">SCOPUS Q4 JOURNALS</Link></li>
                                        </ul>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item navLinkHover" to="/">SCOPUS DISCONTINUED JOURNALS</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item navLinkHover" to="/">GOOGLE SCHOLAR JOURNALS</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item navLinkHover" to="/hec-journals">HEC JOURNALS</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active navLinkHover" to="/publication-process">PUBLICATION PROCESS</Link>
                            </li>
                        </ul>
                        <div className='hamburgerMenu' onClick={toggleModal}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {modal && (
                            <div className="modalBox">
                                <div onClick={toggleModal} className="overlayering"></div>
                                <div className="modalContent">
                                    <h2>MOST USED CATEGORIES</h2>
                                    <p>No categories</p>
                                    <button className="closeModal" onClick={toggleModal}>
                                        x
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}