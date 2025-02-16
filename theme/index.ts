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
                    value: {base: 'darkNavy', _dark: 'white'},
                },
                background: {
                    value: {base: 'colors.lightGrey', _dark: 'colors.darkNavy'},
                },
            },
        },
        textStyles,
    },
});

export const customSystem = createSystem(themeConfig, defaultConfig);
export default customSystem;
