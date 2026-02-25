'use client'

import { useState } from 'react'

import { createCandidate } from '@/services/api'

import style from './style.css'

export default function ModalAddCandidate({ modalVisibilty, setModalVisibilty, onSuccess }) {

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')

    if(!modalVisibilty) return null

    async function handleSubmit(elem) {

        elem.preventDefault()

        console.log('from Modal Component', {name, tel, email, position})

        await createCandidate({name, tel, email, position})

        onSuccess()
        setName('')
        setTel('')
        setEmail('')
        setPosition('')
    }

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
                        <form id="formAddCandidate" onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input
                                    value={name}
                                    onChange={(elem) => setName(elem.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="nome"
                                />
                            </div>

                            <div className="input-field">
                                <input
                                    value={tel}
                                    onChange={(elem) => setTel(elem.target.value)}
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="telefone"
                                />
                            </div>

                            <div className="input-field">
                                <input
                                    value={email}
                                    onChange={(elem) => setEmail(elem.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="email"
                                />
                            </div>

                            <div className="input-field">
                                <select
                                    value={position}
                                    onChange={(elem) => setPosition(elem.target.value)}
                                    name="position"
                                    id="position"
                                >
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
                            <button type="submit" form="formAddCandidate">Cadastrar</button>
                        </div>

                    </footer>

                </div>

            </section>

        </>
    )
}