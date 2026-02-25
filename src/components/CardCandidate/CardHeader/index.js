import style from '../style.css'

export default function CardCandidates({ setModalVisibilty}) {

    return (
        <>
            <div className="card-header">
                <div>
                    <h1>Lista de Candidatos</h1>
                    <button onClick={() => setModalVisibilty('show')}>Novo</button>
                </div>
                <hr />
            </div>
        </>
    )
}