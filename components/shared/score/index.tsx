import {useGlobalContext} from '@/context';
import {Box, Stack, VStack} from '@chakra-ui/react';

const Score = () => {
    const {questions, quiz, correct} = useGlobalContext();
    const {questions: questionsArray} = questions[0];

    return (
        <Stack direction={{base: 'column', lg: 'row'}}>
            <Box>
                <Box
                    as="h1"
                    textStyle="headingRegular"
                    color="darkNavy"
                    _dark={{color: 'white'}}>
                    Quiz completed
                </Box>
                <Box
                    as="h1"
                    textStyle="headingBold"
                    color="darkNavy"
                    mt="8px"
                    mb={{base: '1rem', lg: '48px'}}
                    _dark={{color: 'white'}}>
                    You scored
                </Box>
            </Box>

            <VStack p={{base: '2rem', md: '3rem'}}>
                <VStack gap={{base: '1rem', md: ''}}>
                    <Box>{quiz}</Box>
                    {correct}
                    <Box>out of {questionsArray.length}</Box>
                </VStack>

                <Box as="button" textStyle="headingTitle">
                    Play Again
                </Box>
            </VStack>
        </Stack>
    );
};

export default Score;
