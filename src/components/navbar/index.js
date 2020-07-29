//Adicionando o módulo 'react', localizado na pasta node_modules e atrelando a variárive 'React'
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';

function Navbar(){

    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg navbar-light" background-color="#e3f2fd;">

            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>               
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

                    {
                        useSelector( state => state.usuarioLogado ) > 0 ? 
                        
                        <>
                            <li className="nav-item"><Link className="nav-link" to="">Publicar evento</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link></li>                    
                            <li className="nav-item"><Link className="nav-link" onClick={ () => dispatch( { type: 'LOG_OUT' } )}>Sair</Link></li>                    
                        </>
                        :

                            <>
                                <li className="nav-item"><Link className="nav-link" to="/novoUsuario">Cadastrar</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="login">Login</Link></li>                    
                            </>                    
                            
                    }
                </ul>               
            </div>
        </nav>
    )
}

export default Navbar;