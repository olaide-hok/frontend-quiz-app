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

interface OptionTileType {
    text: string;
    optLetter: string;
    isSelected: boolean;
    onClick: () => void;
}

const OptionTile = ({text, optLetter, isSelected, onClick}: OptionTileType) => {
    const recipe = useSlotRecipe({key: 'optionTile'});
    const optionTileStyles = recipe();

    return (
        <Box
            as="button"
            css={{
                '&:hover div span:first-of-type': {
                    bgColor: '#F6E7FF',
                    color: 'brandPurple',
                },
                ...optionTileStyles.button,
            }}
            borderColor={isSelected ? 'brandPurple' : ''}
            borderWidth={isSelected ? '3px' : ''}
            onClick={() => {
                onClick();
            }}>
            <HStack gap={{base: '1rem', md: '32px'}}>
                <Box
                    as="span"
                    textStyle="headingTitle"
                    bgColor={isSelected ? 'brandPurple' : 'lightGrey'}
                    color={isSelected ? 'white' : 'greyNavy'}
                    css={optionTileStyles.option}>
                    {optLetter}
                </Box>

                <Box as="span" textStyle="headingTitle">
                    {text}
                </Box>
            </HStack>
            <HStack>
                <Image
                    src="images/icon-correct.svg"
                    alt="checkmark"
                    display="none"
                />
                <Image
                    src="images/icon-incorrect.svg"
                    alt="checkmark"
                    display="none"
                />
            </HStack>
        </Box>
    );
};

const Question = () => {
    const recipe = useSlotRecipe({key: 'question'});
    const optionStyles = recipe();

    const {questions, index, checkAnswer} = useGlobalContext();
    const {questions: questionsArray} = questions[0];
    const {answer, options, question} = questionsArray[index];
    const [selectedOption, setSelectedOption] = useState(''); // Track selected option
    const [showNoOptSelected, setShowNoOptSelected] = useState(false);

    const handleOptionClick = (opt: string) => {
        setSelectedOption(opt); // Update selected option
        setShowNoOptSelected(false); // Hide 'Please select an answer' warning text.
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
                    return (
                        <OptionTile
                            key={opt}
                            text={opt}
                            optLetter={optionLetter}
                            isSelected={selectedOption === opt} // Check if this option is selected
                            onClick={() => handleOptionClick(opt)} // Handle click
                        />
                    );
                })}
                <Box
                    as="button"
                    textStyle="headingTitle"
                    css={optionStyles.submitAndNextBtn}
                    onClick={() => {
                        if (selectedOption === '') {
                            setShowNoOptSelected(true);
                            return;
                        }
                        checkAnswer(answer === selectedOption);
                        setSelectedOption('');
                    }}>
                    Submit Answer
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
