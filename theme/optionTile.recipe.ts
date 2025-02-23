import {defineSlotRecipe} from '@chakra-ui/react';

export const optionTileRecipe = defineSlotRecipe({
    slots: ['button', 'option'],
    base: {
        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '24px',
            bgColor: 'white',
            shadow: '0px 16px 40px 0px rgba(143, 160, 193, 0.14)',
            width: {base: '100%', lg: '564px'},
            p: {base: '12px', lg: '20px'},
            _dark: {bgColor: 'brandNavy'},
            _hover: {
                cursor: 'pointer',
                borderWidth: '3px',
                borderColor: 'brandPurple',
            },
            _active: {borderColor: 'brandPurple', borderWidth: '3px'},
            _disabled: {
                cursor: 'not-allowed',
            },
        },
        option: {
            width: {base: '40px', md: '56px'},
            height: {base: '40px', md: '56px'},
            py: {base: '11px', md: '14px'},
            px: {base: '14px', md: '18px'},
            borderRadius: '12px',
        },
    },
});
