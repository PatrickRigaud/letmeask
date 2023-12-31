import '../styles/styleHeader.css'
import logo from '../assets/logo_header.svg'
import { ExcluirPergunta } from './perguntas/ModalExcluirPergunta'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'



export function Header() {
    const [openModal, setModal] = useState(false);

    function executarRedirecionamento(url) {
        window.location.href = url;
      }

    return <>
        <header className="cabecalho">
            
            <div className="logo-full">
                <Link to="/inicio">
                    <img className="letme" src={logo} alt="letme"/>
                </Link>
            </div>
            
        <div className="caixas">
                <div className="numero-sala">
                    <span className="caixa-logo">
                        <span className="copiar-sala-quadrado q1"></span>
                        <span className="copiar-sala-quadrado q2"></span>
                    </span>
                    
                    <span className="codigo-sala">Sala #323243</span>
                </div>
                <button className="btn-encerrar-sala" onClick={() =>
                        setModal(true)}>Encerrar sala</button>
                <ExcluirPergunta 
                    isOpen={openModal}
                    setModalOpen={() => setModal(!openModal)}
                    encerrarItem={"Fechar sala"}
                    confirmacaoDelete={"Tem certeza que você deseja fechar esta sala?"}
                    link={executarRedirecionamento}
                    url={'/painelGrupoSalas'}
                    comando={'fechar'}
            />
            </div>
        </header>
    </>
}