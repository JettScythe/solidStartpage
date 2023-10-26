import {
    Container,
    IconButton,
    useColorMode,
    useColorModeValue,
    Spacer,
    Flex
} from "@hope-ui/solid";
import {IconMoon} from "../icons/IconMoon";
import {IconSun} from "../icons/IconSun";
import {IconBCH} from "../icons/IconBCH";
import {CenteredModal} from "./Modal";
import {A} from "@solidjs/router";

const Header = () => {
    const {toggleColorMode} = useColorMode();
    const colorModeButtonIcon = useColorModeValue(<IconMoon/>, <IconSun/>);

    return (
        <Container h="$full">
            <Flex>
                <Spacer/>
                <CenteredModal/>
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
                <A href="/metrics">
                    <IconButton
                        aria-label="Toggle color mode"
                        variant="ghost"
                        colorScheme="neutral"
                        size="sm"
                        rounded="$md"
                        fontSize="$lg"
                        icon={IconBCH}
                    />
                </A>
            </Flex>
        </Container>
    );
};

export default Header;
