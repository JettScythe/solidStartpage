import {
  createDisclosure,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SimpleSelect,
  SimpleOption,
  IconButton,
} from "@hope-ui/solid";
import { IconGear } from "../icons/IconGear";


const CenteredModal = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();

  return (
    <>
      <IconButton
        aria-label="Toggle color mode"
        variant="ghost"
        colorScheme="neutral"
        size="sm"
        rounded="$md"
        fontSize="$lg"
        icon={IconGear}
        onClick={onOpen}
      />
      <Modal centered opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Settings</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Choose a search provider</FormLabel>
              <SimpleSelect placeholder="Choose a search provider" defaultValue="searx">
                <SimpleOption value="searx">SearX</SimpleOption>
                <SimpleOption value="google">Google</SimpleOption>
                <SimpleOption value="brave">Brave</SimpleOption>
                <SimpleOption value="ddg">DDG</SimpleOption>
                <SimpleOption value="bing">Bing</SimpleOption>
                <SimpleOption value="yahoo">Yahoo</SimpleOption>
              </SimpleSelect>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CenteredModal;
