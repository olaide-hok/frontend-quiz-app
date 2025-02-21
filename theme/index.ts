import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';
import {breakpoints} from './breakpoints';
import {textStyles} from './text-styles';
import {tokens} from './tokens';
import baseStyles from './base-styles';
import {optionTileRecipe} from './optionTile.recipe';
import {questionRecipe} from './question.recipe';

const themeConfig = defineConfig({
    globalCss: {
        ...baseStyles,
        ':root': {
            background: 'background',
            color: 'foreground',
        },
        '.bodycss': {
            bgRepeat: 'no-repeat',
            bgImage: {
                base: 'url(./images/pattern-background-mobile-light.svg)',
                md: 'url(./images/pattern-background-tablet-light.svg)',
                lg: 'url(./images/pattern-background-desktop-light.svg)',
            },
            _dark: {
                bgImage: {
                    base: 'url(./images/pattern-background-mobile-dark.svg)',
                    md: 'url(./images/pattern-background-tablet-dark.svg)',
                    lg: 'url(./images/pattern-background-desktop-dark.svg)',
                },
            },
        },
    },
    preflight: true,
    theme: {
        breakpoints,
        tokens,
        semanticTokens: {
            colors: {
                foreground: {
                    value: {base: 'colors.darkNavy', _dark: 'white'},
                },
                background: {
                    value: {base: 'colors.lightGrey', _dark: 'colors.darkNavy'},
                },
                brandPurple: {
                    solid: {value: '{colors.brandPurple}'},
                    focusRing: {value: '{colors.brandPurple}'},
                },
            },
        },
        textStyles,
        slotRecipes: {
            optionTile: optionTileRecipe,
            question: questionRecipe,
        },
    },
});

export const customSystem = createSystem(themeConfig, defaultConfig);
export default customSystem;
