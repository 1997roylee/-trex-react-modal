// Modal.js

import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/modal'

function render(Component, props) {
    if (typeof Component === 'function') return Component(props)
    return Component
}

function CustomModal(props) {
    const {
        isShow = false,
        size = 'md',
        footer = null,
        body = null,
        header = null,
        onClose
    } = props

    return (
        <Modal isOpen={isShow} size={size} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{render(header, props)}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{render(body, props)}</ModalBody>

                <ModalFooter>{render(footer, props)}</ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default React.memo(CustomModal)
