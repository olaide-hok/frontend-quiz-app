import {Flex} from '@chakra-ui/react';
import ModeToggle from './mode-toggle';

const Header = () => {
    return (
        <Flex
            justify="space-between"
            align="center"
            py={{base: '1rem', md: '40px', lg: '0'}}
            px={{base: '1.5rem', md: '64px', lg: '0'}}>
            Quiz Title
            <ModeToggle />
        </Flex>
    );
};

export default Header;
