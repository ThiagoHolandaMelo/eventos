import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import './evento-cadastro.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

function EventoCadastro(){

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function cadastrar(){

        setCarregando(1); //verdadeiro

        //local onde salvar a imagem
        storage.ref(`imagens/${foto.name}`).put(foto).then( () => {
            //nome da coleção: evento
            db.collection("evento").add({
                titulo: titulo,
                tipo: tipo,
                detalhes: detalhes,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                visualizacoes: 0,
                foto: foto.name,
                publico: 1,
                criacao: new Date()
            }).then( () => {
                setMsgTipo("sucesso");
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('erro'); 
                setCarregando(0);   
            })
        }).catch(erro => {
            setMsgTipo('erro');
        })
    }

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
                    <input onChange={ (e) => setTitulo(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento</label>
                    <select onChange={ (e) => setTipo(e.target.value)} className="form-control">
                        <option disabled selected value> == Selecione um tipo ==</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição do Evento</label>
                    <textarea onChange={ (e) => setDetalhes(e.target.value)} className="form-control" rows="3"/>
                </div>

                <div className="form-group row" >
                    <div className="col-6">
                        <label>Data</label>
                        <input onChange={ (e) => setData(e.target.value)} type="date" className="form-control" rows="3"/>
                    </div>
                    
                    <div className="col-6">
                        <label>Hora</label>
                        <input onChange={ (e) => setHora(e.target.value)} type="time" className="form-control" rows="3"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Upload da Foto</label>
                    <input onChange={ (e) => setFoto(e.target.files[0])} type="file" className="form-control"/>
                </div>

                <div className="row">
                {
                    carregando ? <div className="spinner-border text-danger mx-auto" role="status"><span className="sr-only">Carregando...</span></div> 
                    : <button onClick={cadastrar} type="button" className="btn brn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>                        
                }
                </div>
                      
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