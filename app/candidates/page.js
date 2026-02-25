'use client'

import { useState } from 'react'

import style from './page.module.css'

import CardCandidates from '../../src/components/CardCandidate'
import ModalAddCandidate from '../../src/components/ModalAddCandidate'

export default function Candidates() {

    const [modalVisibilty, setModalVisibilty] = useState('hide')

    return (
        <>
            <CardCandidates
                setModalVisibilty={setModalVisibilty}
            />

            <ModalAddCandidate
                modalVisibilty={modalVisibilty}
                setModalVisibilty={setModalVisibilty}
            />
        </>
    )
}