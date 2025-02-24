import {useGlobalContext} from '@/context';
import {
    Box,
    HStack,
    Image,
    Stack,
    useSlotRecipe,
    VStack,
} from '@chakra-ui/react';
import {Progress} from '@chakra-ui/react';
import {useState} from 'react';
import {OptionTile} from './option-tile';

const Question = () => {
    const recipe = useSlotRecipe({key: 'question'});
    const optionStyles = recipe();

    const {questions, index, checkAnswer, nextQuestion} = useGlobalContext();
    const {questions: questionsArray} = questions[0];
    const {answer, options, question} = questionsArray[index];
    const [selectedOption, setSelectedOption] = useState(''); // Track selected option
    const [showNoOptSelected, setShowNoOptSelected] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted

    const handleOptionClick = (opt: string) => {
        setSelectedOption((prev) => (prev === opt ? '' : opt)); // Toggle selection - allows for selecting and deselecting
        setShowNoOptSelected(false); // Hide 'Please select an answer' warning text.
    };

    const handleSubmit = () => {
        if (selectedOption === '') {
            setShowNoOptSelected(true);
            return;
        }
        checkAnswer(answer === selectedOption);
        setIsSubmitted(true); // Mark as submitted
    };

    const handleNextQuestion = () => {
        // Reset state for the next question
        setSelectedOption('');
        setIsSubmitted(false);
        nextQuestion();
    };

    return (
        <Box css={optionStyles.wrapper}>
            <Stack css={optionStyles.questionWrapper}>
                <Box
                    as="p"
                    textStyle="bodyItalic"
                    color="greyNavy"
                    _dark={{color: 'lightBluish'}}>
                    Question {index + 1} of {questionsArray.length}
                </Box>
                <Box
                    as="h1"
                    textStyle="bodyRegular"
                    color="darkNavy"
                    _dark={{color: 'white'}}
                    flex="1">
                    {question}
                </Box>

                <Progress.Root
                    max={questionsArray.length}
                    value={index + 1}
                    maxW="100%"
                    colorPalette="brandPurple"
                    mt={{base: '16px', md: '13px', lg: 0}}>
                    <Progress.Track
                        borderRadius="999px"
                        p="4px"
                        h="1rem"
                        bgColor="white"
                        _dark={{bgColor: 'brandNavy'}}>
                        <Progress.Range borderRadius="104px" />
                    </Progress.Track>
                </Progress.Root>
            </Stack>

            <VStack
                gap={{base: '12px', md: '24px'}}
                width={{base: '100%', lg: '564px'}}>
                {options?.map((opt: string, i: number) => {
                    // Dynamically generate option letters (A, B, C, etc.)
                    const optionLetter = String.fromCharCode(65 + i); // 65 is ASCII for 'A'
                    const isCorrect = opt === answer; // Check if this option is the correct one
                    return (
                        <OptionTile
                            key={opt}
                            text={opt}
                            optLetter={optionLetter}
                            isSelected={selectedOption === opt} // Check if this option is selected
                            isCorrect={isCorrect} // Pass whether this option is correct or not.
                            onClick={() => handleOptionClick(opt)} // Handle click
                            isSubmitted={isSubmitted}
                        />
                    );
                })}
                <Box
                    as="button"
                    textStyle="headingTitle"
                    css={optionStyles.submitAndNextBtn}
                    onClick={isSubmitted ? handleNextQuestion : handleSubmit}>
                    {/* Submit Answer */}
                    {isSubmitted ? 'Next Question' : 'Submit Answer'}
                </Box>
                <HStack gap="8px" display={showNoOptSelected ? 'flex' : 'none'}>
                    <Image
                        src="images/icon-incorrect.svg"
                        alt="please select an answer"
                    />
                    <Box
                        as="span"
                        textStyle="bodySubtitle"
                        color="brandRed"
                        _dark={{color: 'lightGrey'}}>
                        Please select an answer
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Question;
