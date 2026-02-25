import style from './style.css'

export default function ModalAddCandidate({ modalVisibilty, setModalVisibilty }) {

    return (
        <>
            <section id="modalsContent">

                <div id="modalOverlay" className={`${modalVisibilty}`}></div>

                <div id="modalAddCandidate" className={`modal ${modalVisibilty}`}>

                    <header>
                        <div className="item">
                            <h4>Cadastrar Candidato</h4>
                        </div>
                        <div className="item">
                            <button onClick={() => setModalVisibilty('hide')}>
                                <i className="bx bx-x bx-sm"></i>
                            </button>
                        </div>
                    </header>

                    <main>
                        <form>
                            <div className="input-field">
                                <input type="text" name="name" id="name" placeholder="nome" />
                            </div>

                            <div className="input-field">
                                <input type="tel" name="tel" id="tel" placeholder="telefone" />
                            </div>

                            <div className="input-field">
                                <input type="email" name="email" id="email" placeholder="email" />
                            </div>

                            <div className="input-field">
                                <select name="position" id="position">
                                    <option disabled>Área</option>
                                    <option>Administração</option>
                                    <option>Recursos Humanos</option>
                                    <option>Serviços Gerais</option>
                                    <option>Tecnologia de Informação</option>
                                </select>
                            </div>
                        </form>
                    </main>

                    <footer>

                        <div className="item">
                            <button onClick={() => setModalVisibilty('hide')}>Cancelar</button>
                        </div>

                        <div className="item">
                            <button>Cadastrar</button>
                        </div>

                    </footer>

                </div>

            </section>

        </>
    )
}