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
import { For } from "solid-js";
import { useSearchProvider } from "../helpers/SearchProvider";

const CenteredModal = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();
  const [state, { setSearchProvider }] = useSearchProvider();
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
              <SimpleSelect
                placeholder="Choose a search provider"
                defaultValue={state()}
                onChange={setSearchProvider}
              >
                <For
                  each={["SearX", "Google", "Brave", "DDG", "Bing", "Yahoo"]}
                >
                  {(item) => (
                    <SimpleOption value={item.toLowerCase()}>
                      {item}
                    </SimpleOption>
                  )}
                </For>
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

export { CenteredModal };
