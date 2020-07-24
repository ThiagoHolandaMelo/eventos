//Adicionando o módulo 'react', localizado na pasta node_modules e atrelando a variárive 'React'
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="far fa-bars text-white"></i>             
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/novoUsuario">Cadastrar</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="login">Login</Link></li>                    
                </ul>               
            </div>
        </nav>
    )
}

export default Navbar;