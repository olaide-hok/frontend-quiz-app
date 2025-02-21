'use client';

import {Box, Flex, Image} from '@chakra-ui/react';
import ModeToggle from './mode-toggle';
import {useGlobalContext} from '@/context';
import subjects from '@/subjects';

interface QuizIconAndNameType {
    name: string;
    imgSrc: string;
    bgColor: string;
}

const quizIconAndName = (quiz: string, subjects: QuizIconAndNameType[]) => {
    const {name, imgSrc, bgColor} =
        subjects.find((sbj) => sbj.name === quiz) || {};

    return (
        <Box
            display="flex"
            alignItems="center"
            columnGap={{base: '1rem', md: '24px'}}
            textStyle="headingTitle"
            color="darkNavy"
            _dark={{color: 'white'}}>
            <Image
                src={imgSrc}
                alt={name}
                bgColor={bgColor}
                width={{base: '40px', lg: '56px'}}
                height={{base: '40px', lg: '56px'}}
                borderRadius="6px"
                padding="5.71px"
            />
            {name}
        </Box>
    );
};

const Header = () => {
    const {quiz} = useGlobalContext();
    return (
        <Flex
            justify="space-between"
            align="center"
            py={{base: '1rem', md: '40px', lg: '0'}}
            px={{base: '1.5rem', md: '64px', lg: '0'}}>
            {quiz ? quizIconAndName(quiz, subjects) : <div />}
            <ModeToggle />
        </Flex>
    );
};

export default Header;
