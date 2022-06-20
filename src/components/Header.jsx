import {
  Container,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@hope-ui/solid";
import { IconMoon } from "../icons/IconMoon";
import { IconSun } from "../icons/IconSun";
import CenteredModal from "./Modal";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeButtonIcon = useColorModeValue(<IconMoon />, <IconSun />);

  return (
    <Container h="$full">
      <CenteredModal />
      <IconButton
        aria-label="Toggle color mode"
        variant="ghost"
        colorScheme="neutral"
        size="sm"
        rounded="$md"
        fontSize="$lg"
        icon={colorModeButtonIcon}
        onClick={toggleColorMode}
      />
    </Container>
  );
};

export default Header;
