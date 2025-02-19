/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, {useState, useContext} from 'react';

interface Question {
    title: string;
    icon: string;
    questions: {
        question: string;
        options: string[];
        answer: string;
    }[];
}

interface QuizContextType {
    fetchQuestions: (quizzess: Question[], quizName: string) => void;
    questions: any[];
    quiz: string;
    setQuiz: (quiz: string) => void;
    waiting: boolean;
}
const QuizContext = React.createContext<QuizContextType>({} as QuizContextType);

const QuizProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const [waiting, setWaiting] = useState(true);

    const [quiz, setQuiz] = useState('');

    const fetchQuestions = (quizzes: Question[], quizName: string) => {
        console.log('testing quiz', quizName);
        setWaiting(false);
        if (quizName === '') return;
        console.log('from fetchQuestions Fn', quizName);
        const quizQuestion = quizzes.filter((q) => q.title === quizName);
        if (quizQuestion.length > 0) {
            setQuestions(quizQuestion); // Only set if there are matching questions
            setWaiting(false);
        } else {
            console.warn('No questions found for the selected quiz.');
            setWaiting(true);
        }
        console.log(quizName, 'quiz', quizQuestion);

        return quizQuestion;
    };

    return (
        <QuizContext.Provider
            value={{
                fetchQuestions,
                questions,
                quiz,
                setQuiz,
                waiting,
            }}>
            {children}
        </QuizContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(QuizContext);
};

export {QuizContext, QuizProvider};
