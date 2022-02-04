import React from 'react';
import { Link } from "react-router-dom"
import { PRESTAMOS_PATH, LIBROS_PATH, USUARIOS_PATH, DEVOLUCIONES_PATH } from '../utils/constants';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to={PRESTAMOS_PATH} className="nav-link" >Prestamos</Link>
                </li>
                <li className="nav-item">
                    <Link to={LIBROS_PATH} className="nav-link" >Gestion de libros</Link>
                </li>
                <li className="nav-item">
                    <Link to={USUARIOS_PATH} className="nav-link" >Gestion de usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link to={DEVOLUCIONES_PATH} className="nav-link" >Devoluciones</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
