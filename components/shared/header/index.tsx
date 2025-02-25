'use client';

import {Flex} from '@chakra-ui/react';
import ModeToggle from './mode-toggle';
import {useGlobalContext} from '@/context';
import subjects from '@/subjects';
import QuizTitle from '../quiz-title';

const Header = () => {
    const {quiz} = useGlobalContext();
    return (
        <Flex
            as="header"
            role="heading"
            justify="space-between"
            align="center"
            py={{base: '1rem', md: '40px', lg: '0'}}
            px={{base: '1.5rem', md: '64px', lg: '0'}}>
            {quiz ? <QuizTitle quiz={quiz} subjects={subjects} /> : <div />}
            <ModeToggle />
        </Flex>
    );
};

export default Header;
