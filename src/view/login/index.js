//Adicionando o módulo 'react', localizado na pasta node_modules e atrelando a variárive 'React'
import React, {useState} from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function logar(){
    
        // .then é o conceito de promisse
        firebase.auth().signInWithEmailAndPassword( email, senha).then( resultado => {
            //entra aqui em caso de sucesso
            alert("Login realizado com sucesso");
        } ).catch( erro => {
            alert(erro);
        } )
        
    }

    //Retorna um conteudo JSX
    //d-flex do boostrap, onde é condensado tudo em caixas
    //mx-auto para centralizar
    //my-2 buscar spacing no boostrap

    //a variavel 'e' simboliza o componente input

    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>                
                </div>

                
                <input onChange={ (e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"/>                
                <input onChange={ (e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha"/>                
                
                <button onClick={logar} class="btn btn-lg btn-login btn-block" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    <span><strong>WOW!</strong> Você está conectado! &#128526;</span>
                    <br></br>
                    <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128545;</span>
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2"> Recuperar Senha</a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className="mx-2">Quero Cadastrar</a>
                </div>
               
            </form>
        </div>
    )
}

//Função default que vai ser executada inicialmente
export default Login;