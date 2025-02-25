/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {useState} from 'react';

import {Flex} from '@chakra-ui/react';
import {Switch} from '@/components/ui/switch';
import {LuMoon, LuSun} from 'react-icons/lu';
import {useColorMode} from '@/components/ui/color-mode';

const ModeToggle = () => {
    const {toggleColorMode} = useColorMode();
    const [checked, setChecked] = useState(true);

    return (
        <Flex gap="1rem" align="center">
            <LuSun />
            <Switch
                checked={checked}
                onCheckedChange={(e: any) => {
                    setChecked(e.checked);
                    toggleColorMode();
                }}
                colorPalette="brandPurple"
                size="md"
                css={{
                    '& span[data-state=unchecked]': {bgColor: 'brandPurple'},
                    '& span[data-state=unchecked] span[data-state=unchecked]': {
                        bgColor: 'white',
                    },
                }}
                label="toggle theme"
            />
            <LuMoon />
        </Flex>
    );
};

export default ModeToggle;
