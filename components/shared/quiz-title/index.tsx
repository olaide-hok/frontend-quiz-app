'use client';

import {Box, Image} from '@chakra-ui/react';

interface QuizIconAndNameType {
    name: string;
    imgSrc: string;
    bgColor: string;
}

interface QuizTitleType {
    quiz: string;
    subjects: QuizIconAndNameType[];
}

const QuizTitle = ({quiz, subjects}: QuizTitleType) => {
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
                alt={name + ' icon'}
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

export default QuizTitle;
