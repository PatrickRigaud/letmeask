import '../styles/styleExcluirPergunta.css'
import excluir from '../assets/excluir_vermelho.svg'

export function ExcluirPergunta({isOpen, setModalOpen, id, setLista, lista}) {
    
    const excluirItem = () => {
        const listaNova = lista.filter(elemento => {
            return id != elemento.id
        })
        
        setModalOpen()
        return listaNova
    }


    if(isOpen){

    return (<>
            <div className="telaInteira">
                <main className="caixaDialogo">
                    <img className="iconeLixo" src={excluir}alt="Icone Excluir"/>
                    <h2>Excluir pergunta</h2>
                    <p>Tem certeza que você deseja excluir esta pergunta?</p>
                    <div className="botoes">
                        <button className="btnCancelar" onClick={setModalOpen}>Cancelar</button>
                        <button className="btnConfirmarExclusao" onClick={() => {
                            setLista(excluirItem())
                        }}>Sim, excluir</button>
                    </div>
                </main>
            </div>
    </>)
    }
    
    return null
    

}