import style from './style.css'

export default function CardCandidates({ setModalVisibilty }) {

    return (
        <>
            <div className="card-header">
                <div>
                    <h1>Lista de Candidatos</h1>
                    <button onClick={() => setModalVisibilty('show')}>Novo</button>
                </div>
                <hr />
            </div>

            <section id="cardsContent">

                <div className="card-item">
                    <div className="card">
                        <div className="card-content">
                            <div className="top">
                                <h4>Nome do Candidato 1</h4>
                            </div>
                            <div className="bottom">

                                <div className="chip">
                                    <i className="bx bx-phone"></i>
                                    <span>923100100</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bxl-gmail"></i>
                                    <span>exemplo@email.com</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bx-calendar"></i>
                                    <span>data</span>
                                </div>

                            </div>
                        </div>

                        <div className="card-action">
                            <p>Área de Candidatura</p>
                        </div>

                    </div>
                </div>

                <div className="card-item">
                    <div className="card">
                        <div className="card-content">
                            <div className="top">
                                <h4>Nome do Candidato 2</h4>
                            </div>
                            <div className="bottom">

                                <div className="chip">
                                    <i className="bx bx-phone"></i>
                                    <span>923100100</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bxl-gmail"></i>
                                    <span>exemplo@email.com</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bx-calendar"></i>
                                    <span>data</span>
                                </div>

                            </div>
                        </div>

                        <div className="card-action">
                            <p>Área de Candidatura</p>
                        </div>

                    </div>
                </div>

                <div className="card-item">
                    <div className="card">
                        <div className="card-content">
                            <div className="top">
                                <h4>Nome do Candidato 3</h4>
                            </div>
                            <div className="bottom">

                                <div className="chip">
                                    <i className="bx bx-phone"></i>
                                    <span>923100100</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bxl-gmail"></i>
                                    <span>exemplo@email.com</span>
                                </div>

                                <div className="chip">
                                    <i className="bx bx-calendar"></i>
                                    <span>data</span>
                                </div>

                            </div>
                        </div>

                        <div className="card-action">
                            <p>Área de Candidatura</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}