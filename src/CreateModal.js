// CreateModal.js
import React from 'react'
import Modal from './Modal'

export default function CreateModal({ header, body, footer, size = 'md' }) {
    return (props) => {
        return <Modal {...{ header, body, footer, size, ...props }} />
    }
}
