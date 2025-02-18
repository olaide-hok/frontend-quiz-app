import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';
import {breakpoints} from './breakpoints';
import {textStyles} from './text-styles';
import {tokens} from './tokens';
import baseStyles from './base-styles';

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
    cssVarsPrefix: 'chakra',
    cssVarsRoot: ':where(:root, :host)',
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

                // // {value: '#313E51'},
                // navy: {value: '#3B4D66'},
                // greyNavy: {value: '#626C7F'},
                // lightBluish: {value: '#ABC1E1'},
                // lightGrey: {value: '#F4F6FA'},
                // green: {value: '#26D782'},
                // red: {value: '#EE5454'},
            },
        },
        textStyles,
    },
});

export const customSystem = createSystem(themeConfig, defaultConfig);
export default customSystem;
