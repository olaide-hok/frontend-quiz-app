// import {useGlobalContext} from '@/context';
import {chakra, Box, HStack, Image, useSlotRecipe} from '@chakra-ui/react';

interface OptionTileType {
    text: string;
    optLetter: string;
    isSelected: boolean;
    onClick: () => void;
    isCorrect: boolean;
    isSubmitted: boolean;
}

export const OptionTile = ({
    text,
    optLetter,
    isSelected,
    onClick,
    isCorrect,
    isSubmitted,
}: OptionTileType) => {
    const recipe = useSlotRecipe({key: 'optionTile'});
    const optionTileStyles = recipe();

    let borderColor = ''; // Default border color
    let borderWidth = ''; // Default border width

    let optBgColor = 'lightGrey'; // Default Opt letter Bg color
    let optColor = 'greyNavy'; // Default Opt letter color

    let iconShowCorrect = 'none';
    let iconShowInCorrect = 'none';

    // Apply border colors and widths based on selection and submission
    if (isSubmitted) {
        if (isCorrect) {
            borderColor = 'brandGreen'; // Green for correct option
            borderWidth = '3px';
            optBgColor = 'brandGreen';
            optColor = 'white';
            iconShowCorrect = 'block';
        } else if (isSelected) {
            borderColor = 'brandRed'; // Red for selected wrong option
            borderWidth = '3px';
            optBgColor = 'brandRed';
            optColor = 'white';
            iconShowInCorrect = 'block';
        }
    } else if (isSelected) {
        borderColor = 'brandPurple'; // Purple for selected option before submission
        borderWidth = '3px';
        optBgColor = 'brandPurple';
        optColor = 'white';
    }

    return (
        <chakra.button
            css={{
                '&:hover div span:first-of-type': {
                    bgColor: '#F6E7FF',
                    color: 'brandPurple',
                },
                '&[data-selected="true"]:hover div span:first-of-type': {
                    bgColor: 'brandPurple',
                    color: 'white',
                },
                '&:disabled:hover div span:first-of-type': {
                    bgColor: 'lightGrey',
                    color: 'greyNavy',
                },
                ...optionTileStyles.button,
            }}
            borderColor={borderColor}
            borderWidth={borderWidth}
            disabled={isSubmitted}
            data-selected={isSelected}
            onClick={() => {
                onClick();
            }}>
            <HStack gap={{base: '1rem', md: '32px'}}>
                <Box
                    as="span"
                    textStyle="headingTitle"
                    bgColor={optBgColor}
                    color={optColor}
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
                    alt="icon-correct"
                    display={iconShowCorrect}
                />
                <Image
                    src="images/icon-incorrect.svg"
                    alt="icon-incorrect"
                    display={iconShowInCorrect}
                />
            </HStack>
        </chakra.button>
    );
};
