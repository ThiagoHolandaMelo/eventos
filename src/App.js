import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import {Provider} from 'react-redux';

/*
  PÁGINAS
*/
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha/';
import EventoCadastro from './view/evento-cadastro/';

/*
  Font awesome: https://fontawesome.com/how-to-use/on-the-web/using-with/react
*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab,faCheckSquare, faCoffee);



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />
      </Router>
    </Provider>
  );
}

export default App;
