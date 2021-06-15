// ModalProvider.js
import React, { Component } from 'react'
import { ModalContext } from './ModalContext'
import ModalRoot from './ModalRoot'

export default class ModalProvider extends Component {
    showModal = (component, props = {}) => {
        console.log('=== Modal ===')
        console.log('=== Action: Show ===', component)
        this.setState({
            component,
            props,
            isShow: true
        })
    }

    hideModal = () =>
        this.setState({
            component: null,
            props: {},
            isShow: false
        })

    state = {
        component: null,
        props: {},
        showModal: this.showModal,
        hideModal: this.hideModal,
        isShow: false
    }

    render() {
        return (
            <ModalContext.Provider value={this.state}>
                {this.props.children}
                <ModalRoot />
            </ModalContext.Provider>
        )
    }
}
