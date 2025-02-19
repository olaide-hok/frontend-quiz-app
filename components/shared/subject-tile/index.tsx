'use client';

import {useGlobalContext} from '@/context';
import {Flex, Image} from '@chakra-ui/react';
import questionData from '@/data.json';

interface SubjectTileProps {
    name: string;
    src: string;
    bgColor: string;
}
const SubjectTile = ({name, src, bgColor}: SubjectTileProps) => {
    const {quizzes} = questionData;
    const {fetchQuestions, setQuiz} = useGlobalContext();

    return (
        <Flex
            as="button"
            columnGap={{base: '1rem', lg: '2rem'}}
            align="center"
            onClick={() => {
                setQuiz(name);
                fetchQuestions(quizzes, name);
            }}
            color="darkNavy"
            fontSize={{base: '18px', md: '28px'}}
            fontWeight="500"
            p={{base: '12px', lg: '20px'}}
            borderRadius="12px"
            bgColor="white"
            shadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)"
            _hover={{cursor: 'pointer'}}
            width={{base: '100%', lg: '564px'}}>
            <Image
                src={src}
                alt={name}
                bgColor={bgColor}
                width={{base: '40px', lg: '56px'}}
                height={{base: '40px', lg: '56px'}}
                borderRadius="6px"
                padding="5.71px"
            />
            {name}
        </Flex>
    );
};

export default SubjectTile;
