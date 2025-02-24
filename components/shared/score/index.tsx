import {useGlobalContext} from '@/context';
import {Box, Span, Stack, VStack} from '@chakra-ui/react';
import QuizTitle from '../quiz-title';
import subjects from '@/subjects';

const Score = () => {
    const {questions, quiz, correct, showScore} = useGlobalContext();
    const {questions: questionsArray} = questions[0];

    return (
        <Stack
            display={showScore ? 'flex' : 'none'}
            direction={{base: 'column', lg: 'row'}}
            px={{base: '24px', md: '64px', lg: 0}}
            pt={{base: '32px', md: '49px', lg: 0}}
            justify="space-between">
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
                    You scored...
                </Box>
            </Box>

            <VStack gap={{base: '12px', md: '2rem'}} w={{lg: '564px'}}>
                <VStack
                    p={{base: '2rem', md: '3rem'}}
                    gap={{base: '1rem', md: ''}}
                    borderRadius="12px"
                    bgColor="white"
                    width="100%"
                    _dark={{
                        bgColor: 'brandNavy',
                    }}>
                    {quiz ? <QuizTitle quiz={quiz} subjects={subjects} /> : ''}

                    <Span
                        fontSize={{base: '88px', md: '144px'}}
                        lineHeight="100%"
                        fontWeight="500"
                        color="darkNavy"
                        mt={{md: '24px'}}
                        _dark={{
                            color: 'white',
                        }}>
                        {correct}
                    </Span>
                    <Box
                        as="span"
                        textStyle="bodySubtitle"
                        color="greyNavy"
                        _dark={{
                            color: 'lightBluish',
                        }}>
                        out of {questionsArray.length}
                    </Box>
                </VStack>

                <Box
                    as="button"
                    textStyle="headingTitle"
                    bgColor="brandPurple"
                    borderRadius="12px"
                    py={{base: '12px', md: '2rem'}}
                    color="white"
                    width="100%"
                    cursor="pointer"
                    onClick={() => {
                        console.log('Play Again!');
                    }}>
                    Play Again
                </Box>
            </VStack>
        </Stack>
    );
};

export default Score;
