//chakra
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Flex,
  Input,
  Stack,
  FormLabel,
  Box
} from '@chakra-ui/react';

interface ModalAddressProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddress = (props: ModalAddressProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={2}>
            <Box>
              <FormLabel>Full name</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Phone</FormLabel>
              <Input />
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="green">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddress;
