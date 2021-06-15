# @trex/react-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@trex/react-modal.svg)](https://www.npmjs.com/package/@trex/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @trex/react-modal
```

## Usage

```jsx
import React from 'react'
import { useModal, createModal } from '@trex/react-modal'
import { Container, Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Demo = createModal({
    header: () => <h5>Title</h5>,
    body: () => <h1>Hello World</h1>,
    size: 'xl'
})

const Demo2 = createModal({
    header: (props) => <h5>{props.title}</h5>,
    body: (props) => <h1>{props.body}</h1>,
    size: 'xl'
})

const DemoSm = createModal({
    header: () => <h5>Title</h5>,
    body: () => <h1>Small Size</h1>,
    size: 'sm'
})

export default function Child() {
    const { showModal, hideModal } = useModal()

    return (
        <Container py={8}>
            <Stack spacing={4}>
                <Button colorScheme={'blue'} onClick={() => showModal(Demo)}>
                    Show Demo Modal
                </Button>
                <Button
                    colorScheme={'blue'}
                    onClick={() =>
                        showModal(Demo2, {
                            title: 'Demo 02',
                            body: 'Hello world demo 02'
                        })
                    }
                >
                    Show Demo Modal With Props
                </Button>
                <Button colorScheme={'blue'} onClick={() => showModal(DemoSm)}>
                    Show Small Size Modal
                </Button>
            </Stack>
        </Container>
    )
}
```

## License

MIT © [1997roylee](https://github.com/1997roylee)
