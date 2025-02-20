import {Box, HStack, Image, Stack, VStack} from '@chakra-ui/react';
import {Progress} from '@chakra-ui/react';
import {useState} from 'react';

const OptionTile = () => {
    const [selected, setSelected] = useState(false);

    return (
        <Box
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="24px"
            bgColor="white"
            shadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)"
            width={{base: '100%', lg: '564px'}}
            p={{base: '12px', lg: '20px'}}
            _dark={{bgColor: 'brandNavy'}}
            _hover={{cursor: 'pointer'}}
            _active={{borderColor: 'brandPurple', borderWidth: '3px'}}
            _focus={{borderColor: 'brandPurple', borderWidth: '3px'}}
            onClick={() => {
                console.log('clicked me!');

                setSelected(true);
            }}>
            <HStack gap={{base: '1rem', md: '32px'}}>
                <Box
                    as="span"
                    textStyle="headingTitle"
                    width={{base: '40px', md: '56px'}}
                    height={{base: '40px', md: '56px'}}
                    bgColor={selected ? 'brandPurple' : 'lightGrey'}
                    color={selected ? 'white' : 'greyNavy'}
                    py={{base: '11px', md: '14px'}}
                    px={{base: '14px', md: '18px'}}
                    borderRadius="12px">
                    A
                </Box>
                <Box as="span" textStyle="headingTitle">
                    4.5 : 1
                </Box>
            </HStack>
            <Image
                src="images/icon-correct.svg"
                alt="checkmark"
                display="none"
            />
            <Image src="images/icon-incorrect.svg" alt="checkmark" display="" />
        </Box>
    );
};

const Question = () => {
    return (
        <Box
            display="flex"
            alignItems={{base: 'center', lg: 'start'}}
            justifyContent={{lg: 'space-between'}}
            flexDir={{base: 'column', lg: 'row'}}
            rowGap={{base: '40px'}}
            px={{base: '1.5rem', md: '4rem', lg: 0}}
            pt={{base: '32px'}}>
            <Stack
                justify="space-between"
                gap={{base: '12px', md: '27px'}}
                width={{base: '100%', lg: '465px'}}
                height={{base: '100%', lg: '452px'}}>
                <Box
                    as="p"
                    textStyle="bodyItalic"
                    color="greyNavy"
                    _dark={{color: 'lightBluish'}}>
                    Question 6 of 10
                </Box>
                <Box
                    as="h1"
                    textStyle="bodyRegular"
                    color="darkNavy"
                    _dark={{color: 'white'}}
                    flex="1">
                    Which of these color contrast ratios defines the minimum
                    WCAG 2.1 Level AA requirement for normal text?
                </Box>

                <Progress.Root
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
                <OptionTile />
                <OptionTile />
                <OptionTile />
                <OptionTile />
                <Box
                    as="button"
                    textStyle="headingTitle"
                    w="100%"
                    py={{base: '12px', md: '32px'}}
                    bgColor="brandPurple"
                    color="white"
                    borderRadius="12px"
                    shadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)">
                    Submit Answer
                </Box>
                <HStack gap="8px" display="none">
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
