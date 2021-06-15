// ModalContext.js
import { useContext, createContext } from 'react'

export const ModalContext = createContext({
    component: null,
    props: {},
    isShow: false,
    showModal: () => {},
    hideModal: () => {}
})

export const ModalConsumer = ModalContext.Consumer

export const useModal = () => useContext(ModalContext)
