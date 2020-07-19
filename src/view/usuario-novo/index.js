import React, {useState} from 'react';
import './usuario-novo.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){
        
        setCarregando(1); //verdadeiro
        setMsgTipo(null);
        
        if( !email || !senha ){
            setMsgTipo('erro');
            setMsg('Voce precisa informar o email e senha para fazer o cadastro');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then( resultado => {
            setCarregando(0);
            setMsgTipo('sucesso');
        }).catch( erro => {
            setCarregando(0);
            setMsgTipo('erro');
            setMsg(erro.message);
        })
    }

    return(
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weght-bolt">Cadastro</h1>

                <input onChange={ (e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={ (e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                {
                    carregando ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div> 
                    : <button onClick={cadastrar} type="button" className="btn brn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>                        
                }

                <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128545;</span>}                                        
                </div>
                
            </form>
        </div>
    )

}

export default NovoUsuario;