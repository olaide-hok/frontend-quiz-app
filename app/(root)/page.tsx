'use client';

import Landing from '@/components/shared/landing';
import {useGlobalContext} from '@/context';
import {Box} from '@chakra-ui/react';

export default function Home() {
    const {waiting} = useGlobalContext();
    console.log('waiting', waiting);

    if (waiting) {
        return <Landing />;
    }

    return <Box>Start answering questions</Box>;
}
