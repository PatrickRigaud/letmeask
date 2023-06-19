import '../styles/styleHeader.css'
import logo from '../assets/logo.svg'
import ask from '../assets/ask.svg'
import letme from '../assets/letme.svg'


export function Header() {
    
    return <>
        <header className="cabecalho">
            
            <div className="logo-full">
                <img className="letme" src={letme} alt="letme"/>
                <img className="ask" src={ask} alt="ask"/>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            
        <div className="caixas">
                <div className="numero-sala">
                    <span className="caixa-logo">
                        <span className="copiar-sala-quadrado q1"></span>
                        <span className="copiar-sala-quadrado q2"></span>
                    </span>
                    
                    <spam className="codigo-sala">Sala #323243</spam>
                </div>
                <button className="btn-encerrar-sala">Encerrar sala</button>
            </div>
        </header>
    </>
}