import {defineTextStyles} from '@chakra-ui/react';

export const textStyles = defineTextStyles({
    bodyItalic: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: {base: '14px', md: '20px'},
            fontStyle: 'italic',
            lineHeight: '150%',
        },
    },
    headingRegular: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '300',
            fontSize: {base: '40px', md: '64px'},
            lineHeight: '100%',
        },
    },
    headingBold: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontSize: {base: '40px', md: '64px'},
            lineHeight: '100%',
        },
    },
});
