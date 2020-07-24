//Adicionando o módulo 'react', localizado na pasta node_modules e atrelando a variárive 'React'
import React, {useState} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

function Home(){
    return(
        <Navbar></Navbar>        
    )
}

export default Home;