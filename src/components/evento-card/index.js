import React, {useState, useEffect} from 'react';
import './evento-card.css';
import {Link} from 'react-router-dom';

import { ReactComponent as Icon} from '../../images/eye-regular.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



/*
    Acessar a documentação do bootstrap, a fim de entender as nomenclatura: md e sm
    Localizado em: getboostrap.com/docs/4.3/layout/grid

    Boostrap tambem possui um conjunto de cards
*/

function EventoCard(){
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/100" className="card-img-top img-cartao" alt="imagem do Evento"/>

            <div className="card-body">
                <h5>Título do Evento</h5>
                <p className="card-text text-justify">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                
                <div className="row rodape-card d-flex align-items-center">

                    <div className="col-6">
                        <Link to="/" className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <Icon /><span>2019</span>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default EventoCard;