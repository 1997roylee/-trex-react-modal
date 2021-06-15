// ModalRoot.js
import React from 'react'
import { ModalConsumer } from './ModalContext'

export default function ModalRoot() {
    return (
        <ModalConsumer>
            {({ component: Component = null, props, isShow, hideModal }) => {
                return Component ? (
                    <Component {...props} isShow={isShow} onClose={hideModal} />
                ) : null
            }}
        </ModalConsumer>
    )
}
