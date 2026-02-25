'use client'

import { useState, useEffect } from 'react'

/* import style */
import style from './page.module.css'

/* import components */
import CardCandidate from '../../src/components/CardCandidate'
import CardHeader from '../../src/components/CardCandidate/CardHeader'
import ModalAddCandidate from '../../src/components/ModalAddCandidate'

/* import api services */
import { getCandidates } from '@/services/api'

export default function Candidates() {

    const [modalVisibilty, setModalVisibilty] = useState('hide')
    const [candidates, setCandidates] = useState([])

    async function loadCandidates() {

        const data = await getCandidates()
        console.log('getCand.: ' + data)
        setCandidates(data)
    }

    useEffect(() => { loadCandidates() }, [])

    return (
        <>
            <CardHeader
                setModalVisibilty={setModalVisibilty}
            />
            
            <section id="cardsContent" className={style.cardsContent}>
                {candidates.map((candidate) => (
                    <CardCandidate
                        key={candidate._id}
                        candidate={candidate}
                    />
                ))}
            </section>

            <ModalAddCandidate
                modalVisibilty={modalVisibilty}
                setModalVisibilty={setModalVisibilty}
            />
        </>
    )
}