import React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { ModalProvider, ModalRoot } from 'trex-react-modal'
import Child from './Child'


const App = () => {
    return (
        <ChakraProvider>
            <ModalProvider>
            <Child/>
                <ModalRoot />
            </ModalProvider>
        </ChakraProvider>
    )
}

export default App
