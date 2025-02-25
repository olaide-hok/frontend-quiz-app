'use client';

import Landing from '@/components/shared/landing';
import Question from '@/components/shared/question';
import Score from '@/components/shared/score';
import {useGlobalContext} from '@/context';
import {Box} from '@chakra-ui/react';

export default function Home() {
    const {waiting, showScore} = useGlobalContext();

    if (waiting) {
        return <Landing />;
    }

    return <Box role="main">{showScore ? <Score /> : <Question />}</Box>;
}
