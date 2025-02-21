import {defineSlotRecipe} from '@chakra-ui/react';

export const questionRecipe = defineSlotRecipe({
    slots: ['wrapper', 'questionWrapper', 'submitAndNextBtn'],
    base: {
        wrapper: {
            display: 'flex',
            alignItems: {base: 'center', lg: 'start'},
            justifyContent: {lg: 'space-between'},
            flexDir: {base: 'column', lg: 'row'},
            rowGap: {base: '40px'},
            px: {base: '1.5rem', md: '4rem', lg: 0},
            pt: {base: '32px'},
        },
        questionWrapper: {
            justifyContent: 'space-between',
            gap: {base: '12px', md: '27px'},
            width: {base: '100%', lg: '465px'},
            height: {base: '100%', lg: '452px'},
        },
        submitAndNextBtn: {
            w: '100%',
            py: {base: '12px', md: '32px'},
            bgColor: 'brandPurple',
            color: 'white',
            borderRadius: {base: '12px', md: '24px'},
            shadow: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
            _active: {
                bgGradient:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)',
            },
            _focus: {
                bgGradient:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)',
            },
            _hover: {
                cursor: 'pointer',
                bgGradient:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)',
            },
        },
    },
});
