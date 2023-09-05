import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import feedly from "./feedly.png"
function Navbar(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-light bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand  px-3"style={{color:'#4AE344'}} href="#">
                        <strong><img height="35px" width="35px" src={feedly}/>eedly</strong>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{color:'#4AE344'}}
                        height="33px" width="33px"
                        
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li  className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/entertainment">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/health">
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/science">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/sports">
                                    Sports
                                </Link>
                            </li>

                        </ul>
<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button style={{color:'#4AE344',border:'2px solid #4AE344' }} className="btn btn-sm " type="submit">Search</button>
      </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar