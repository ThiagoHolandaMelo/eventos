import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import './evento-cadastro.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState();

    return(
        <>
        <Navbar/>
        <div classname="col-12 mt-5">
            <div className="row">
                <h1 className="mx-auto font-weight-bolt">Novo Evento</h1>
            </div>

            <form className="mx-4">
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento</label>
                    <select className="form-control">
                        <option disabled selected value> == Selecione um tipo ==</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição do Evento</label>
                    <textarea className="form-control" rows="3"/>
                </div>

                <div className="form-group row" >
                    <div className="col-6">
                        <label>Data</label>
                        <input type="date" className="form-control" rows="3"/>
                    </div>
                    
                    <div className="col-6">
                        <label>Hora</label>
                        <input type="time" className="form-control" rows="3"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Upload da Foto</label>
                    <input type="file" className="form-control"/>
                </div>

                <button type="button" className="btn brn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>                        
            </form>

            <div className="msg-login text-center mt-2">
                    {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Evento Publicado! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128545;</span>}                                        
            </div>
        </div>
        </>
    )
}

export default EventoCadastro;