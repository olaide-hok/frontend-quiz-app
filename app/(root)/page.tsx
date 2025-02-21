'use client';

import Landing from '@/components/shared/landing';
import Question from '@/components/shared/question';
import {useGlobalContext} from '@/context';

export default function Home() {
    const {waiting} = useGlobalContext();

    if (waiting) {
        return <Landing />;
    }

    return <Question />;
}
