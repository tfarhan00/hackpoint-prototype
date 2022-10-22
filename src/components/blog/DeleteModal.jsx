import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function DeleteModal({deletePost, delLoading}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
        return () => onClose()
    }, [])

    return (
      <React.Fragment>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure want to delete this post ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              You'll not be able to undo this action
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={deletePost} colorScheme='red' mr={3} className='w-24'>
                {delLoading ? <Spinner /> : 'Delete'}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </React.Fragment>
    )
}
