import {defineTextStyles} from '@chakra-ui/react';

export const textStyles = defineTextStyles({
    bodyItalic: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: '14px',
            fontStyle: 'italic',
            lineHeight: '150%',
        },
    },
    headingRegular: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '300',
            fontSize: '40px',
            lineHeight: '100%',
        },
    },
    headingBold: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '100%',
        },
    },
});
