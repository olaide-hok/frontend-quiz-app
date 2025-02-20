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
    headingTitle: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontSize: {base: '18px', md: '28px'},
            lineHeight: '100%',
        },
    },
    bodyRegular: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontSize: {base: '20px', md: '36px'},
            lineHeight: '120%',
        },
    },
    bodySubtitle: {
        value: {
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: {base: '18px', md: '24px'},
            lineHeight: '150%',
        },
    },
});
