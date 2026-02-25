import style from './style.css'

export default function ModalAddCandidate({ modalVisibilty, setModalVisibilty }) {

    return (
        <>
            <section id="modalsContent">

                <div id="modalOverlay" className={`${modalVisibilty}`}></div>

                <div id="modalAddCandidate" className={`modal ${modalVisibilty}`}>

                    <div className="modal-header">
                        <div className="modal-header-item">
                            <h4>Cadastrar Candidato</h4>
                        </div>
                        <div className="modal-header-item">
                            <button onClick={() => setModalVisibilty('hide')}>
                                <i className="bx bx-x"></i>
                            </button>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}