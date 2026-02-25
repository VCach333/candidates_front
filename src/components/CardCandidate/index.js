import style from './style.css'

export default function CardCandidates({ candidate }) {

    return (
        <>
            <div className="card-item">
                <div className="card">
                    <div className="card-content">
                        <div className="top">
                            <h4>{candidate.name}</h4>
                        </div>
                        <div className="bottom">

                            <div className="chip">
                                <i className="bx bx-phone"></i>
                                <span>{candidate.tel}</span>
                            </div>

                            <div className="chip">
                                <i className="bx bxl-gmail"></i>
                                <span>{candidate.email}</span>
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
        </>
    )
}